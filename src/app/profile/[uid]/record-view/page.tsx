"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { db, storage } from "@/lib/firebase";
import {
  collection,
  addDoc,
  getDocs,
  query,
  where,
  Timestamp,
  orderBy,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

export default function RecordViewPage() {
  const { uid } = useParams();
  const [records, setRecords] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [file, setFile] = useState<File | null>(null);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Vaccination");

  useEffect(() => {
    if (!uid) return;
    const fetchRecords = async () => {
      const q = query(
        collection(db, "healthRecords"),
        where("userId", "==", uid),
        orderBy("createdAt", "desc")
      );
      const snap = await getDocs(q);
      const list = snap.docs.map((d) => ({ id: d.id, ...d.data() }));
      setRecords(list);
      setLoading(false);
    };
    fetchRecords();
  }, [uid]);

  const handleUpload = async () => {
    if (!uid || !file || !title) {
      alert("Please fill in title and choose a file!");
      return;
    }

    const storageRef = ref(storage, `healthRecords/${uid}/${Date.now()}-${file.name}`);
    await uploadBytes(storageRef, file);
    const url = await getDownloadURL(storageRef);

    const data = {
      userId: uid,
      title,
      category,
      fileURL: url,
      createdAt: Timestamp.now(),
    };
    await addDoc(collection(db, "healthRecords"), data);
    alert("✅ File uploaded successfully!");

    setRecords((prev) => [{ id: Date.now(), ...data }, ...prev]);
    setTitle("");
    setFile(null);
  };

  if (loading)
    return (
      <main className="min-h-screen flex items-center justify-center bg-[#F9F6F1] text-[#8B6A43] text-lg">
        Loading records...
      </main>
    );

  return (
    <main className="min-h-screen bg-[#F9F6F1] py-10 px-6">
      <div className="max-w-2xl mx-auto bg-white rounded-2xl p-8 shadow-md">
        <h1 className="text-2xl font-semibold text-[#111827] text-center mb-2">
          Pet Health Records
        </h1>
        <p className="text-sm text-center text-gray-500 mb-8">
          Vet access portal for <span className="text-[#8B6A43]">{uid}</span>
        </p>

        {/* === Upload Section === */}
        <div className="border border-[#E5E7EB] rounded-xl p-4 mb-10">
          <h2 className="text-lg font-medium text-[#8B6A43] mb-3">
            Upload New Record
          </h2>

          <input
            type="text"
            placeholder="Record title (e.g., Vaccination)"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-2 mb-3"
          />

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-2 mb-3"
          >
            <option value="Vaccination">Vaccination</option>
            <option value="Checkup">Checkup</option>
            <option value="Surgery">Surgery</option>
            <option value="Others">Others</option>
          </select>

          {/* ✅ File Upload Box */}
          <div
            onClick={() => document.getElementById("fileInput")?.click()}
            className="w-full border-2 border-dashed border-[#B58963] rounded-xl py-6 text-center cursor-pointer mb-3 hover:bg-[#F9F6F1] transition"
          >
            {file ? (
              <p className="text-[#8B6A43] font-medium">{file.name}</p>
            ) : (
              <p className="text-gray-500">📤 Click to upload file (PDF, JPG, PNG)</p>
            )}
          </div>

          <input
            id="fileInput"
            type="file"
            accept=".pdf,.jpg,.jpeg,.png"
            onChange={(e) => setFile(e.target.files?.[0] || null)}
            className="hidden"
          />

          <button
            onClick={handleUpload}
            className="w-full py-2 rounded-full bg-[#8B6A43] text-white hover:bg-[#B58963] transition"
          >
            Upload Record
          </button>
        </div>

        {/* === Grouped Record List === */}
        {["Vaccination", "Checkup", "Surgery", "Others"].map((cat) => {
          const catRecords = records.filter((r) => r.category === cat);
          return (
            <div key={cat} className="mb-8">
              <h2 className="text-lg font-semibold text-[#8B6A43] mb-3">
                {cat}
              </h2>
              {catRecords.length > 0 ? (
                <ul className="space-y-3">
                  {catRecords.map((r) => (
                    <li
                      key={r.id}
                      className="border border-gray-200 rounded-lg p-3 hover:bg-gray-50 flex items-center justify-between"
                    >
                      <div>
                        <p className="font-medium text-[#111827]">{r.title}</p>
                        <a
                          href={r.fileURL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-[#8B6A43] hover:underline mt-1 block"
                        >
                          📎 View File
                        </a>
                      </div>
                      <button
                        onClick={async () => {
                          if (confirm("Delete this record?")) {
                            await deleteDoc(doc(db, "healthRecords", r.id));
                            setRecords((prev) =>
                              prev.filter((rec) => rec.id !== r.id)
                            );
                          }
                        }}
                        className="text-sm text-black hover:underline ml-4"
                      >
                        Delete
                      </button>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-sm text-gray-400 italic">
                  No {cat.toLowerCase()} records yet.
                </p>
              )}
            </div>
          );
        })}
      </div>
    </main>
  );
}
