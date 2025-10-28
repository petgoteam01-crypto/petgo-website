"use client";
import { auth } from "@/lib/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { AKC_BREEDS } from "@/app/data/breeds";
import { useRouter } from "next/navigation";



import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import {
  doc,
  getDoc,
  updateDoc,
  collection,
  getDocs,
  query,
  where,
  orderBy,
  addDoc,
  Timestamp,
  deleteDoc,
} from "firebase/firestore";
import { db, storage } from "@/lib/firebase";
import { ref, uploadBytes, getDownloadURL,deleteObject } from "firebase/storage";

export default function UserProfilePage() {
  const { uid } = useParams();
  const [activeTab, setActiveTab] = useState("profile");
  const [socialTab, setSocialTab] = useState("posts");
  const [user, setUser] = useState<any>(null);
  const [pets, setPets] = useState<any[]>([]);
  const [records, setRecords] = useState<Record<string, any[]>>({});
  const [loading, setLoading] = useState(true);
  const [selectedPet, setSelectedPet] = useState<any>(null);
  const [selectedPetForRecord, setSelectedPetForRecord] = useState<any>(null);

  const [editUserModal, setEditUserModal] = useState(false);
  const [editPetModal, setEditPetModal] = useState(false);
  const [editAddressModal, setEditAddressModal] = useState(false);
  const [addRecordModal, setAddRecordModal] = useState(false);
  const router = useRouter();
  
  

  const [editUser, setEditUser] = useState({
    firstName: "",
    lastName: "",
    phone: "",
  });
  const [editAddress, setEditAddress] = useState({
    country: "",
    city: "",
    province: "",
    street: "",
    unit: "",
    postalCode: "",
  });
  const [newRecord, setNewRecord] = useState({
    title: "",
    type: "",
    date: "",
    notes: "",
    file: null as File | null,
  });
  const [editPet, setEditPet] = useState({
  name: "",
  breed: "",
  sex: "",
  birthDate: "",
});

// 🐶 Add New Pet Modal States
const [addPetModal, setAddPetModal] = useState(false);
const [newPet, setNewPet] = useState({
  name: "",
  breed: "",
  sex: "",
  birthDate: "",
  photo: null as File | null,
});

const [petPhotoFile, setPetPhotoFile] = useState<File | null>(null);
const [petPhotoPreview, setPetPhotoPreview] = useState<string>("");
  

  // === 🔥 NEW: Social Stats & Data ===
  const [stats, setStats] = useState({ posts: 0, followers: 0, following: 0 });
  const [posts, setPosts] = useState<any[]>([]);
  const [followers, setFollowers] = useState<any[]>([]);
  const [following, setFollowing] = useState<any[]>([]);
  const [loadingSocial, setLoadingSocial] = useState(false);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("✅ Logged in as:", user.uid);
      } else {
        console.log("❌ Not logged in");
        alert("⚠️ Please log in first to upload photos.");
      }
    });
    return () => unsub();
  }, []);
  // === Load Data === 부분 수정
useEffect(() => {
  if (!uid) return;
  const fetchData = async () => {
    try {
      const userRef = doc(db, "users", uid as string);
      const userSnap = await getDoc(userRef);
      if (userSnap.exists()) {
        const data = userSnap.data();
        setUser(data);
        setEditUser({
          firstName: data.firstName || "",
          lastName: data.lastName || "",
          phone: data.phone || "",
        });
        setEditAddress({
          country: data.country || "",
          city: data.city || "",
          province: data.province || "",
          street: data.street || "",
          unit: data.unit || "",
          postalCode: data.postalCode || "",
        });

        // 🔥 실제 데이터 개수 세기 (user 문서 대신)
        const postsSnap = await getDocs(
          query(collection(db, "posts"), where("userId", "==", uid))
        );
        const followersSnap = await getDocs(
          collection(db, "users", uid as string, "followers")
        );
        const followingSnap = await getDocs(
  collection(db, "users", uid as string, "following")
);
        
        setStats({
          posts: postsSnap.size,  // ← 실제 posts 개수
          followers: data.followersCount || 0,
          following: data.followingCount || 0,
        });
      }

      const petsSnap = await getDocs(
        query(collection(db, "pets"), where("userId", "==", uid))
      );
      setPets(petsSnap.docs.map((d) => ({ id: d.id, ...d.data() })));

      const healthSnap = await getDocs(
        query(
          collection(db, "healthRecords"),
          where("userId", "==", uid),
          orderBy("date", "desc")
        )
      );
      const grouped: Record<string, any[]> = {};
      healthSnap.docs.forEach((d) => {
        const data = d.data();
        const petId = data.petId || "unknown";
        if (!grouped[petId]) grouped[petId] = [];
        grouped[petId].push({ id: d.id, ...data });
      });
      setRecords(grouped);
    } catch (err) {
      console.error("❌ Error fetching profile:", err);
    } finally {
      setLoading(false);
    }
  };
  fetchData();
}, [uid]);

 
  // 🔥 NEW: Load Social Data when tab changes
  useEffect(() => {
    if (!uid) return;
    loadSocialData();
  }, [uid, socialTab]);
    // ✅ Breed 선택 시 Add Pet 모달에 자동 반영
  useEffect(() => {
  const storedBreed = localStorage.getItem("selectedBreed");
  if (storedBreed) {
    setNewPet((prev) => ({ ...prev, breed: storedBreed }));
    localStorage.removeItem("selectedBreed");
  }
}, []);


  const loadSocialData = async () => {
    if (!uid) return;
    setLoadingSocial(true);

    try {
      if (socialTab === "posts") {
        // Load user's posts
        const postsSnap = await getDocs(
          query(
            collection(db, "posts"),
            where("userId", "==", uid),
            orderBy("createdAt", "desc")
          )
        );
        setPosts(postsSnap.docs.map((d) => ({ id: d.id, ...d.data() })));
      } else if (socialTab === "followers") {
        // Load followers list
        const followersSnap = await getDocs(
          collection(db, "users", uid as string, "followers")
        );
        const followerIds = followersSnap.docs.map((d) => d.id);

        // Get follower user details
        const followersList = await Promise.all(
          followerIds.map(async (id) => {
            const userDoc = await getDoc(doc(db, "users", id));
            return userDoc.exists() ? { id, ...userDoc.data() } : null;
          })
        );
        setFollowers(followersList.filter((f) => f !== null));
      } else if (socialTab === "following") {
        // Load following list
        const usersSnap = await getDocs(collection(db, "users"));
        const followingList: any[] = [];

        for (const userDoc of usersSnap.docs) {
          const followersSnap = await getDocs(
            collection(db, "users", userDoc.id, "followers")
          );
          const isFollowing = followersSnap.docs.some((d) => d.id === uid);
          if (isFollowing) {
            followingList.push({ id: userDoc.id, ...userDoc.data() });
          }
        }
        setFollowing(followingList);
      }
    } catch (err) {
      console.error("❌ Error loading social data:", err);
    } finally {
      setLoadingSocial(false);
    }
  };

  // === Add Health Record ===
  const addHealthRecord = async () => {
  if (!uid || !selectedPetForRecord) return;
  if (!newRecord.title || !newRecord.date) {
    alert("⚠️ Please fill in title and date");
    return;
  }

  try {
    let fileURL = "";
    let fileName = "";

    // 🔥 파일 업로드 추가
    if (newRecord.file) {
      const fileRef = ref(
        storage,
        `healthRecords/${selectedPetForRecord.id}/${Date.now()}-${newRecord.file.name}`
      );
      await uploadBytes(fileRef, newRecord.file);
      fileURL = await getDownloadURL(fileRef);
      fileName = newRecord.file.name;
    }

    const recordData = {
      userId: uid,
      petId: selectedPetForRecord.id,
      title: newRecord.title,
      type: newRecord.type || "General",
      date: Timestamp.fromDate(new Date(newRecord.date)),
      notes: newRecord.notes || "",
      fileURL: fileURL || "",      // 🔥 추가
      fileName: fileName || "",    // 🔥 추가
      createdAt: Timestamp.now(),
    };

    const docRef = await addDoc(collection(db, "healthRecords"), recordData);
    alert("✅ Record added!");

    setRecords((prev) => ({
      ...prev,
      [selectedPetForRecord.id]: [
        { id: docRef.id, ...recordData },
        ...(prev[selectedPetForRecord.id] || []),
      ],
    }));

    setNewRecord({ title: "", type: "", date: "", notes: "", file: null }); // 🔥 file: null 추가
    setAddRecordModal(false);
  } catch (err) {
    console.error("❌ Failed to add record", err);
    alert("❌ Failed to add record.");
  }
};
const savePetEdit = async () => {
  if (!selectedPet?.id) return;
  
  try {
    const updateData: any = {
      name: editPet.name,
      breed: editPet.breed,
      sex: editPet.sex,
    };

    if (editPet.birthDate) {
      updateData.birthDate = Timestamp.fromDate(new Date(editPet.birthDate));
    }

    if (petPhotoFile) {
      const fileName = `${Date.now()}-${petPhotoFile.name}`;
      const storageRef = ref(storage, `petPhotos/${selectedPet.id}/${fileName}`);
      await uploadBytes(storageRef, petPhotoFile);
      const photoURL = await getDownloadURL(storageRef);
      
      updateData.photoURL = photoURL;
      updateData.photoFileName = petPhotoFile.name;
    }

    await updateDoc(doc(db, "pets", selectedPet.id), updateData);

    setPets((prev) =>
      prev.map((p) =>
        p.id === selectedPet.id ? { ...p, ...updateData } : p
      )
    );

    alert("✅ Pet updated successfully!");
    setEditPetModal(false);
    setSelectedPet(null);
    setPetPhotoFile(null);
    setPetPhotoPreview("");
  } catch (err) {
    console.error("❌ Failed to update pet:", err);
    alert("❌ Failed to update pet.");
  }
};
// === Add New Pet ===
const addNewPet = async () => {
  if (!uid || !newPet.name || !newPet.breed || !newPet.sex || !newPet.birthDate) {
    alert("⚠️ Please fill in all fields");
    return;
  }
  try {
    let photoURL = "";
    if (newPet.photo) {
      const fileRef = ref(storage, `petPhotos/${uid}/${Date.now()}-${newPet.photo.name}`);
      await uploadBytes(fileRef, newPet.photo);
      photoURL = await getDownloadURL(fileRef);
    }

    const petData = {
      userId: uid,
      name: newPet.name,
      breed: newPet.breed,
      sex: newPet.sex,
      birthDate: Timestamp.fromDate(new Date(newPet.birthDate)),
      photoURL,
      createdAt: Timestamp.now(),
    };

    const docRef = await addDoc(collection(db, "pets"), petData);
    setPets((prev) => [...prev, { id: docRef.id, ...petData }]);
    alert("✅ Pet added successfully!");
    setAddPetModal(false);
    setTimeout(() => {
      setNewPet({ name: "", breed: "", sex: "", birthDate: "", photo: null });
    }, 300);

  } catch (err) {
    console.error("❌ Failed to add pet:", err);
    alert("❌ Failed to add pet.");
  }
};

  


  // === HandlePhotoUpload ===
  const handlePhotoUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("🟢 Step 1: handlePhotoUpload triggered");
    if (!e.target.files?.[0] || !uid) {
      console.warn("⚠️ No file or uid");
      return;
    }

    const file = e.target.files[0];
    console.log("🟡 Step 2: Selected file:", file.name, file.type, file.size);

    try {
      const storageRef = ref(
        storage,
        `profilePhotos/${uid}/${Date.now()}-${file.name}`
      );
      console.log("🟣 Step 3: Storage ref ready:", storageRef.fullPath);

      const snap = await uploadBytes(storageRef, file);
      console.log("🟠 Step 4: Uploaded to storage:", snap.metadata.fullPath);

      const downloadURL = await getDownloadURL(storageRef);
      console.log("🟤 Step 5: Download URL fetched:", downloadURL);

      await updateDoc(doc(db, "users", uid as string), {
        photoURL: downloadURL,
      });
      console.log("🟩 Step 6: Firestore updated");

      setUser((prev: any) => ({ ...prev, photoURL: downloadURL }));
      console.log("🟦 Step 7: State updated");
      alert("✅ Profile photo updated!");
    } catch (err: any) {
      console.error("❌ Upload failed:", err);
      alert("❌ Upload failed. See console for details.");
    }
  };

  // === Upload Pet Photo ===
  const handlePetPhotoUpload = async (
    e: React.ChangeEvent<HTMLInputElement>,
    petId: string
  ) => {
    console.log("🐶 Step 1: handlePetPhotoUpload triggered");
    if (!e.target.files?.[0]) {
      console.warn("⚠️ No file selected");
      return;
    }

    const file = e.target.files[0];
    console.log("🟡 Step 2: Selected pet file:", file.name);

    try {
      const storageRef = ref(
        storage,
        `petPhotos/${petId}/${Date.now()}-${file.name}`
      );
      console.log("🟣 Step 3: Storage ref ready:", storageRef.fullPath);

      const snap = await uploadBytes(storageRef, file);
      console.log("🟠 Step 4: Uploaded:", snap.metadata.fullPath);

      const url = await getDownloadURL(storageRef);
      console.log("🟤 Step 5: Download URL:", url);

      await updateDoc(doc(db, "pets", petId), { photoURL: url });
      console.log("🟩 Step 6: Firestore updated");

      setPets((prev) =>
        prev.map((p) => (p.id === petId ? { ...p, photoURL: url } : p))
      );
      console.log("🟦 Step 7: Local state updated");

      alert("✅ Pet photo updated!");
    } catch (err: any) {
      console.error("❌ Pet upload failed:", err);
      alert("❌ Pet upload failed. See console for details.");
    }
  };

  if (loading)
    return (
      <main className="flex justify-center items-center min-h-screen bg-[#F9F6F1] text-[#8B6A43] text-lg">
        Loading profile...
      </main>
    );

  return (
    <main className="flex bg-[#F9F6F1] min-h-screen">

      {/* ===== MAIN CONTENT ===== */}
      <div className="flex-1 p-8 space-y-8">
        {activeTab === "profile" && (
          <>
            {/* ===== PROFILE CARD ===== */}
            <section className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm flex justify-between items-center">
              <div className="flex items-center gap-4">
                <div className="relative w-20 h-20">
                  <Image
                    src={
                      user?.photoURL ||
                      "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=400"
                    }
                    alt="Profile"
                    fill
                    className="rounded-full object-cover border-2 border-[#8B6A43]"
                  />
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-[#111827]">
                    {user?.displayName ||
                      `${user?.firstName} ${user?.lastName}`}
                  </h2>
                  <p className="text-sm text-[#111827]">{user?.email}</p>
                  <div className="mt-1">
                    <input
                      type="file"
                      id="profilePhoto"
                      accept="image/*"
                      className="hidden"
                      onChange={handlePhotoUpload}
                    />
                    <button
                      type="button"
                      onClick={() =>
                        document.getElementById("profilePhoto")?.click()
                      }
                      className="text-xs text-[#8B6A43] hover:underline cursor-pointer"
                    >
                      Change Photo
                    </button>
                  </div>
                </div>
              </div>

              {/* 🔥 STATS - Real Data */}
              <div className="flex gap-6 text-center">
                <div>
                  <p className="text-xl font-bold text-[#8B6A43]">
                    {stats.posts}
                  </p>
                  <p className="text-xs text-[#111827]">Posts</p>
                </div>
                <div>
                  <p className="text-xl font-bold text-[#8B6A43]">
                    {stats.followers}
                  </p>
                  <p className="text-xs text-[#111827]">Followers</p>
                </div>
                <div>
                  <p className="text-xl font-bold text-[#8B6A43]">
                    {stats.following}
                  </p>
                  <p className="text-xs text-[#111827]">Following</p>
                </div>
              </div>
            </section>

            {/* PERSONAL INFO */}
            <section className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
              <div className="flex justify-between items-center mb-3">
                <h3 className="font-semibold text-[#8B6A43] text-lg">
                  Personal Information
                </h3>
                <button
                  onClick={() => setEditUserModal(true)}
                  className="border border-[#8B6A43] text-[#8B6A43] rounded-full px-3 py-1 text-sm hover:bg-[#8B6A43] hover:text-white transition"
                >
                  ✏️ Edit
                </button>
              </div>
              <div className="grid md:grid-cols-2 gap-3 text-sm text-[#111827]">
                <p>
                  <strong>First Name:</strong> {user?.firstName || "—"}
                </p>
                <p>
                  <strong>Last Name:</strong> {user?.lastName || "—"}
                </p>
                <p>
                  <strong>Email:</strong> {user?.email || "—"}
                </p>
                <p>
                  <strong>Phone:</strong> {user?.phone || "—"}
                </p>
              </div>
            </section>

            {/* ADDRESS */}
            <section className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
              <div className="flex justify-between items-center mb-3">
                <h3 className="font-semibold text-[#8B6A43] text-lg">
                  Address
                </h3>
                <button
                  onClick={() => setEditAddressModal(true)}
                  className="border border-[#8B6A43] text-[#8B6A43] rounded-full px-3 py-1 text-sm hover:bg-[#8B6A43] hover:text-white transition"
                >
                  ✏️ Edit
                </button>
              </div>
              <div className="grid md:grid-cols-3 gap-3 text-sm text-[#111827]">
                <p>
                  <strong>Country:</strong> {user?.country || "—"}
                </p>
                <p>
                  <strong>City:</strong> {user?.city || "—"}
                </p>
                <p>
                  <strong>Province:</strong> {user?.province || "—"}
                </p>
                <p>
                  <strong>Street:</strong> {user?.street || "—"}
                </p>
                <p>
                  <strong>Unit:</strong> {user?.unit || "—"}
                </p>
                <p>
                  <strong>Postal Code:</strong> {user?.postalCode || "—"}
                </p>
              </div>
            </section>

            {/* PETS */}
<section className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
  <div className="flex justify-between items-center mb-4">
    <h3 className="font-semibold text-[#8B6A43] text-lg">My Pet's Profile</h3>
    {/* 🔥 기존 prompt 입력 삭제 + 모달 버튼으로 교체 */}
    <button
      onClick={() => setAddPetModal(true)}
      className="text-sm px-3 py-1.5 rounded-full border border-[#8B6A43] text-[#8B6A43] hover:bg-[#8B6A43] hover:text-white transition"
    >
      ➕ Add New Pet
    </button>
  </div>
    

  {pets.map((pet) => (
    <div key={pet.id} className="border-t border-gray-200 pt-4 mt-4">
      <div className="flex justify-between items-start">
        {/* LEFT SIDE */}
        <div className="flex gap-4">
          <div className="relative w-16 h-16">
            <Image
              src={
                pet.photoURL ||
                "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400"
              }
              alt={pet.name}
              fill
              className="rounded-full object-cover border border-[#8B6A43]"
            />
          </div>

          <div>
            <h4 className="font-semibold text-lg text-[#111827]">{pet.name}</h4>
            <p className="text-sm text-[#111827]">
              {pet.breed} · {pet.sex}
            </p>
            <p className="text-sm text-[#111827]">
              Birth:{" "}
              {pet.birthDate
                ? new Date(pet.birthDate.seconds * 1000).toLocaleDateString()
                : "N/A"}
            </p>
            {/* 🩺 Health Records */}
<div className="mt-3">
  <h5 className="font-medium text-[#8B6A43] text-sm mb-1">
    Health Records
  </h5>

  {records[pet.id]?.length ? (
    <ul className="text-xs text-gray-700 space-y-2">
      {records[pet.id].map((r) => (
        <li
          key={r.id}
          className="border-l-2 border-[#8B6A43] pl-2"
        >
          <strong>{r.title}</strong>{" "}
          {r.date
            ? `(${new Date(r.date.seconds * 1000).toLocaleDateString()})`
            : ""}
          {" – "}
          {r.type || "General"}

          {r.fileURL && (
            <div className="mt-1">
              <a
                href={r.fileURL}
                target="_blank"
                rel="noopener noreferrer"
               className="text-[#8B6A43] hover:underline text-xs flex items-center gap-1 truncate max-w-[200px]"
              >
                📎 {r.fileName || "Download File"}
              </a>
              <button
  onClick={async () => {
    if (confirm("Delete this record?")) {
        if (r.fileURL) {
  try {
    const fileRef = ref(storage, r.fileURL);
    await deleteObject(fileRef);
  } catch (e) {
    console.warn("⚠️ File already removed or inaccessible");
  }
}
      await deleteDoc(doc(db, "healthRecords", r.id));
      setRecords((prev) => ({
        ...prev,
        [pet.id]: prev[pet.id].filter((rec) => rec.id !== r.id),
      }));
    }
  }}
  className="ml-2 text-red-500 hover:underline text-xs"
>
  🗑 Delete
</button>
            </div>
          )}
        </li>
      ))}
    </ul>
  ) : (
    <p className="text-xs text-gray-500 italic">
      No health records yet.
    </p>
  )}

  <button
    onClick={() => {
      setSelectedPetForRecord(pet);
      setAddRecordModal(true);
    }}
    className="mt-2 text-xs px-2 py-1 rounded-full border border-[#8B6A43] text-[#8B6A43] hover:bg-[#8B6A43] hover:text-white transition"
  >
    ➕ Add Record
  </button>
</div>          
          </div>
        </div>

      {/* ✏️ Edit / 🗑 Delete Buttons */}
<div className="flex flex-col gap-2 items-end">
  <button
    onClick={() => {
      setSelectedPet(pet);
      setEditPet({
        name: pet.name,
        breed: pet.breed,
        sex: pet.sex,
        birthDate: pet.birthDate
          ? new Date(pet.birthDate.seconds * 1000).toISOString().split("T")[0]
          : "",
      });
      setPetPhotoPreview(pet.photoURL || "");
      setEditPetModal(true);
    }}
    className="border border-[#8B6A43] text-[#8B6A43] rounded-full px-3 py-1 text-sm hover:bg-[#8B6A43] hover:text-white transition"
  >
    ✏️ Edit
  </button>

  <button
    onClick={async () => {
      if (!confirm(`Delete ${pet.name}? This cannot be undone.`)) return;
      try {
        // 🗑 Delete photo from storage
        if (pet.photoURL) {
          try {
            const fileRef = ref(storage, pet.photoURL);
            await deleteObject(fileRef);
          } catch (err) {
            console.warn("⚠️ Pet photo already removed or not accessible");
          }
        }

        // 🗑 Delete pet document
        await deleteDoc(doc(db, "pets", pet.id));

        // 🗑 Delete all related health records
        if (records[pet.id]?.length) {
          for (const rec of records[pet.id]) {
            await deleteDoc(doc(db, "healthRecords", rec.id));
            if (rec.fileURL) {
              try {
                const recFileRef = ref(storage, rec.fileURL);
                await deleteObject(recFileRef);
              } catch (e) {
                console.warn("⚠️ Health record file missing");
              }
            }
          }
        }

        // 🧹 Update local state
        setPets((prev) => prev.filter((p) => p.id !== pet.id));
        const newRecords = { ...records };
        delete newRecords[pet.id];
        setRecords(newRecords);

        alert("✅ Pet deleted successfully!");
      } catch (err) {
        console.error("❌ Failed to delete pet:", err);
        alert("❌ Failed to delete pet.");
      }
    }}
    className="border border-red-400 text-red-500 rounded-full px-3 py-1 text-sm hover:bg-red-500 hover:text-white transition"
  >
    🗑 Delete
  </button>
</div>

      </div>
    </div>
  ))}
</section>


            {/* 🔥 SOCIAL TABS (Posts / Followers / Following) */}
            <section className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
              {/* Tab Navigation */}
              <div className="flex border-b border-gray-200">
                {["posts", "followers", "following"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setSocialTab(tab)}
                    className={`flex-1 py-3 text-sm font-medium capitalize transition ${
                      socialTab === tab
                        ? "border-b-2 border-[#8B6A43] text-[#8B6A43]"
                        : "text-[#111827] hover:text-[#8B6A43]"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              <div className="p-6 min-h-[200px]">
                {loadingSocial ? (
                  <div className="text-center text-gray-500 text-sm py-8">
                    Loading...
                  </div>
                ) : (
                  <>
                    {socialTab === "posts" && (
                      <div>
                        {posts.length > 0 ? (
                          <div className="grid md:grid-cols-3 gap-4">
                            {posts.map((post) => (
                              <div
                                key={post.id}
                                className="relative aspect-square rounded-lg overflow-hidden border border-gray-200 hover:opacity-90 transition cursor-pointer"
                              >
                                <Image
                                  src={post.imageUrl || "/placeholder.jpg"}
                                  alt={post.caption || "Post"}
                                  fill
                                  className="object-cover"
                                />
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-2">
                                  <p className="text-white text-xs font-medium truncate">
                                    {post.caption || "No caption"}
                                  </p>
                                  <div className="flex gap-3 text-white text-xs mt-1">
                                    <span>❤️ {post.likes || 0}</span>
                                    <span>💬 {post.comments || 0}</span>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        ) : (
                          <div className="text-center text-gray-500 text-sm py-8">
                            No posts yet. Start sharing your pet moments!
                          </div>
                        )}
                      </div>
                    )}

                    {socialTab === "followers" && (
                      <div>
                        {followers.length > 0 ? (
                          <div className="space-y-3">
                            {followers.map((follower: any) => (
                              <div
                                key={follower.id}
                                className="flex items-center gap-3 p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition"
                              >
                                <div className="relative w-12 h-12">
                                  <Image
                                    src={
                                      follower.photoURL ||
                                      "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=400"
                                    }
                                    alt={follower.displayName || "User"}
                                    fill
                                    className="rounded-full object-cover"
                                  />
                                </div>
                                <div className="flex-1">
                                  <p className="font-medium text-sm text-[#111827]">
                                    {follower.displayName ||
                                      `${follower.firstName} ${follower.lastName}`}
                                  </p>
                                  <p className="text-xs text-[#111827]">
                                    {follower.email}
                                  </p>
                                </div>
                              </div>
                            ))}
                          </div>
                        ) : (
                          <div className="text-center text-gray-500 text-sm py-8">
                            No followers yet.
                          </div>
                        )}
                      </div>
                    )}

                    {socialTab === "following" && (
                      <div>
                        {following.length > 0 ? (
                          <div className="space-y-3">
                            {following.map((user: any) => (
                              <div
                                key={user.id}
                                className="flex items-center gap-3 p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition"
                              >
                                <div className="relative w-12 h-12">
                                  <Image
                                    src={
                                      user.photoURL ||
                                      "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=400"
                                    }
                                    alt={user.displayName || "User"}
                                    fill
                                    className="rounded-full object-cover"
                                  />
                                </div>
                                <div className="flex-1">
                                  <p className="font-medium text-sm text-[#111827]">
                                    {user.displayName ||
                                      `${user.firstName} ${user.lastName}`}
                                  </p>
                                  <p className="text-xs text-[#111827]">
                                    {user.email}
                                  </p>
                                </div>
                              </div>
                            ))}
                          </div>
                        ) : (
                          <div className="text-center text-gray-500 text-sm py-8">
                            Not following anyone yet.
                          </div>
                        )}
                      </div>
                    )}
                  </>
                )}
              </div>
            </section>
          </>
        )}
      </div>
      {/* 🔥 EDIT PET MODAL */}
{editPetModal && selectedPet && (
  <Modal
    title={`Edit ${selectedPet.name}'s Profile`}
    onClose={() => {
      setEditPetModal(false);
      setPetPhotoFile(null);
      setPetPhotoPreview("");
    }}
    onSave={savePetEdit}
  >
    <div className="text-center mb-4">
      <div className="relative w-24 h-24 mx-auto mb-2">
        <Image
          src={
            petPhotoPreview ||
            selectedPet.photoURL ||
            "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400"
          }
          alt="Pet Preview"
          fill
          className="rounded-full object-cover border-2 border-[#8B6A43]"
        />
      </div>
      <input
        type="file"
        id="editPetPhoto"
        accept="image/*"
        className="hidden"
        onChange={(e) => {
          if (e.target.files?.[0]) {
            setPetPhotoFile(e.target.files[0]);
            setPetPhotoPreview(URL.createObjectURL(e.target.files[0]));
          }
        }}
      />
      <button
        type="button"
        onClick={() => document.getElementById("editPetPhoto")?.click()}
        className="text-sm text-[#8B6A43] hover:underline"
      >
        Change Photo
      </button>
    </div>

    <Input
      label="Name"
      value={editPet.name}
      onChange={(e) => setEditPet({ ...editPet, name: e.target.value })}
    />
    <Input
      label="Breed"
      value={editPet.breed}
      onChange={(e) => setEditPet({ ...editPet, breed: e.target.value })}
    />
    <div>
      <label className="block text-sm font-medium text-[#111827] mb-1">
        Sex
      </label>
      <select
        value={editPet.sex}
        onChange={(e) => setEditPet({ ...editPet, sex: e.target.value })}
        className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#8B6A43]/30"
      >
        <option value="">Select</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>
    </div>
    <Input
      label="Birth Date"
      type="date"
      value={editPet.birthDate}
      onChange={(e) =>
        setEditPet({ ...editPet, birthDate: e.target.value })
      }
    />
  </Modal>
)}

      {addRecordModal && selectedPetForRecord && (
  <Modal
    title={`Add Health Record – ${selectedPetForRecord.name}`}
    onClose={() => {
      setAddRecordModal(false);
      setNewRecord({ title: "", type: "", date: "", notes: "", file: null }); // 🔥 file: null 추가
    }}
    onSave={addHealthRecord}
  >
    <Input
      label="Title"
      value={newRecord.title}
      onChange={(e) =>
        setNewRecord({ ...newRecord, title: e.target.value })
      }
    />
    <Input
      label="Type"
      value={newRecord.type}
      onChange={(e) =>
        setNewRecord({ ...newRecord, type: e.target.value })
      }
      placeholder="e.g., Vaccination, Checkup, Surgery"  // 🔥 추가
    />
    <Input
      label="Date"
      type="date"
      value={newRecord.date}
      onChange={(e) =>
        setNewRecord({ ...newRecord, date: e.target.value })
      }
    />
    {/* 🔥 Notes를 textarea로 변경 */}
    <div>
      <label className="block text-sm font-medium text-[#111827] mb-1">
        Notes
      </label>
      <textarea
        value={newRecord.notes}
        onChange={(e) =>
          setNewRecord({ ...newRecord, notes: e.target.value })
        }
        className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#8B6A43]/30"
        rows={3}
        placeholder="Additional notes..."
      />
    </div>

    {/* 🔥 파일 업로드 추가 */}
    <div>
      <label className="block text-sm font-medium text-[#111827] mb-1">
        Attach File (optional)
      </label>
      <input
        type="file"
        accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
        onChange={(e) => {
          if (e.target.files?.[0]) {
            setNewRecord({ ...newRecord, file: e.target.files[0] });
          }
        }}
        className="w-full text-sm text-[#111827] file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#8B6A43]/10 file:text-[#8B6A43] hover:file:bg-[#8B6A43]/20"
      />
      {newRecord.file && (
        <p className="text-xs text-[#111827] mt-1">
          Selected: {newRecord.file.name}
        </p>
      )}
    </div>
  </Modal>
)}
{/* 🐶 ADD PET MODAL */}
{addPetModal && (
  <Modal
    title="Add New Pet"
    onClose={() => setAddPetModal(false)}
    onSave={addNewPet}
  >
    {/* 🐾 사진 업로드 섹션 */}
    <div className="text-center mb-4">
      <div className="relative w-24 h-24 mx-auto mb-2">
        <Image
          src={
            newPet.photo
              ? URL.createObjectURL(newPet.photo)
              : "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400"
          }
          alt="Pet Preview"
          fill
          className="rounded-full object-cover border-2 border-[#8B6A43]"
        />
      </div>
      <input
        type="file"
        id="addPetPhoto"
        accept="image/*"
        className="hidden"
        onChange={(e) =>
          setNewPet({ ...newPet, photo: e.target.files?.[0] || null })
        }
      />
      <button
        type="button"
        onClick={() => document.getElementById("addPetPhoto")?.click()}
        className="text-sm text-[#8B6A43] hover:underline"
      >
        Change Photo
      </button>
    </div>

    {/* 🐾 이름 */}
    <Input
      label="Name"
      value={newPet.name}
      onChange={(e) => setNewPet({ ...newPet, name: e.target.value })}
    />

    {/* 🐾 품종 */}
    <div>
      <label className="block text-sm font-medium text-[#111827] mb-1">
        Breed
      </label>
      <select
        value={newPet.breed}
        onChange={(e) => setNewPet({ ...newPet, breed: e.target.value })}
        className="w-full border border-gray-300 rounded-lg p-2 text-[#111827] focus:outline-none focus:ring-2 focus:ring-[#8B6A43]/30"
      >
        <option value="">Select Breed</option>
        {AKC_BREEDS.map((b) => (
          <option key={b} value={b}>
            {b}
          </option>
        ))}
      </select>

    </div>

    {/* 🐾 성별 */}
    <div>
      <label className="block text-sm font-medium text-[#111827] mb-1">
        Sex
      </label>
      <select
        value={newPet.sex}
        onChange={(e) => setNewPet({ ...newPet, sex: e.target.value })}
        className="w-full border border-gray-300 rounded-lg p-2 text-[#111827] focus:outline-none focus:ring-2 focus:ring-[#8B6A43]/30"
      >
        <option value="">Select</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>
    </div>

    {/* 🐾 생일 */}
    <Input
      label="Birth Date"
      type="date"
      value={newPet.birthDate}
      onChange={(e) => {
        const today = new Date().toISOString().split("T")[0];
        if (e.target.value > today) {
          alert("⚠️ Future dates are not allowed.");
          return;
        }
        setNewPet({ ...newPet, birthDate: e.target.value });
      }}
    />
  </Modal>
)}



    </main>
  );
}

/* === Reusable Components === */
function Modal({
  title,
  children,
  onClose,
  onSave,
}: {
  title: string;
  children: React.ReactNode;
  onClose: () => void;
  onSave: () => void;
}) {
  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-2xl w-[90%] max-w-md shadow-lg">
        <h3 className="text-xl font-semibold text-[#8B6A43] mb-4 text-center">
          {title}
        </h3>
        <div className="space-y-3 mb-4">{children}</div>
        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-full border border-gray-300 hover:bg-gray-50 transition"
          >
            Cancel
          </button>
          <button
            onClick={onSave}
            className="px-4 py-2 rounded-full bg-[#8B6A43] text-white hover:bg-[#B58963] transition"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

function Input({
  label,
  value,
  onChange,
  type = "text",
  placeholder = ""
}: {
  label: string;
  value: string;
  type?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-[#111827] mb-1">
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#8B6A43]/30"
      />
    </div>
  );
}
