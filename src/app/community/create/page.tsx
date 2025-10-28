"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, Upload, MapPin } from "lucide-react";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { auth, db, storage } from "@/lib/firebase";

export default function CreatePostPage() {
  const router = useRouter();
  const user = auth.currentUser;

  const [caption, setCaption] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);
  const [selectedPlace, setSelectedPlace] = useState<any>(null);
  
  const autocompleteInputRef = useRef<HTMLInputElement>(null);
  const autocompleteRef = useRef<any>(null);

  // === Initialize Google Places Autocomplete ===
  useEffect(() => {
    if (!autocompleteInputRef.current) return;

    const loadGoogleMaps = () => {
      if (typeof window !== "undefined" && (window as any).google) {
        const autocomplete = new (window as any).google.maps.places.Autocomplete(
          autocompleteInputRef.current!,
          { types: ["establishment", "geocode"] }
        );

        autocomplete.addListener("place_changed", () => {
          const place = autocomplete.getPlace();
          if (place.place_id) {
            setSelectedPlace({
              name: place.name,
              formatted_address: place.formatted_address,
              place_id: place.place_id,
            });
          }
        });

        autocompleteRef.current = autocomplete;
      }
    };

    // Load Google Maps script if not already loaded
    if (!(window as any).google) {
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&libraries=places&language=en`;
      script.async = true;
      script.defer = true;
      script.onload = loadGoogleMaps;
      document.head.appendChild(script);
    } else {
      loadGoogleMaps();
    }
  }, []);

  // === Handle Image Selection ===
  function handleImageChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  }

  // === Handle Post Creation ===
  async function handleCreatePost() {
    if (!user) {
      alert("Please log in to create a post.");
      return;
    }

    if (!image) {
      alert("Please select an image.");
      return;
    }

    if (!caption.trim()) {
      alert("Please add a caption.");
      return;
    }

    setUploading(true);

    try {
      // Upload image to Firebase Storage
      const imageRef = ref(storage, `post-images/${Date.now()}_${image.name}`);
      await uploadBytes(imageRef, image);
      const imageUrl = await getDownloadURL(imageRef);

      // Create post in Firestore
      await addDoc(collection(db, "posts"), {
        caption: caption.trim(),
        imageUrl,
        userId: user.uid,
        username: user.displayName ?? "User",
        userAvatar: user.photoURL ?? null,
        likes: 0,
        likedBy: [],
        location: selectedPlace ? {
          name: selectedPlace.name,
          address: selectedPlace.formatted_address,
          placeId: selectedPlace.place_id,
        } : null,
        createdAt: serverTimestamp(),
      });

      alert("Post created successfully!");
      router.push("/community");
    } catch (error) {
      console.error("Error creating post:", error);
      alert("Failed to create post. Please try again.");
    } finally {
      setUploading(false);
    }
  }

  return (
    <main className="max-w-2xl mx-auto py-10 px-4 bg-[#F9F6F1] min-h-screen">
      {/* Header */}
      <div className="mb-6">
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 text-[#8B6A43] hover:underline mb-4"
        >
          <ArrowLeft size={18} /> Back to Community
        </button>
        <h1 className="text-3xl font-bold text-[#111827]">Create Post</h1>
        <p className="text-sm text-gray-600 mt-2">
          Share your pet moments with the community!
        </p>
      </div>

      {/* Form */}
      <div className="bg-white rounded-xl shadow p-6">
        {/* Image Upload */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-[#111827] mb-2">
            Upload Image
          </label>
          {imagePreview ? (
            <div className="relative">
              <img
                src={imagePreview}
                alt="Preview"
                className="w-full h-64 object-cover rounded-lg"
              />
              <button
                onClick={() => {
                  setImage(null);
                  setImagePreview(null);
                }}
                className="absolute top-2 right-2 bg-red-500 text-white px-3 py-1 rounded text-xs hover:bg-red-600"
              >
                Remove
              </button>
            </div>
          ) : (
            <label className="flex flex-col items-center justify-center w-full h-64 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
              <Upload size={48} className="text-gray-400 mb-2" />
              <p className="text-sm text-gray-500">Click to upload image</p>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
              />
            </label>
          )}
        </div>

        {/* Caption */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-[#111827] mb-2">
            Caption
          </label>
          <textarea
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
            placeholder="Write a caption for your post..."
            className="w-full border rounded-lg p-3 text-sm focus:outline-[#8B6A43] text-[#111827] resize-none"
            rows={4}
          />
        </div>

        {/* Location */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-[#111827] mb-2">
            <MapPin size={16} className="inline mr-1" />
            Location (Optional)
          </label>
          <input
            ref={autocompleteInputRef}
            type="text"
            placeholder="Search for a location..."
            className="w-full border rounded-lg p-3 text-sm focus:outline-[#8B6A43] text-[#111827]"
          />
          {selectedPlace && (
            <div className="mt-2 p-3 bg-gray-50 rounded-lg flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-[#111827]">{selectedPlace.name}</p>
                <p className="text-xs text-gray-500">{selectedPlace.formatted_address}</p>
              </div>
              <button
                onClick={() => {
                  setSelectedPlace(null);
                  if (autocompleteInputRef.current) {
                    autocompleteInputRef.current.value = "";
                  }
                }}
                className="text-xs text-red-500 hover:underline"
              >
                Remove
              </button>
            </div>
          )}
        </div>

        {/* Submit Button */}
        <button
          onClick={handleCreatePost}
          disabled={uploading}
          className={`w-full py-3 rounded-lg text-white font-medium ${
            uploading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-[#8B6A43] hover:bg-[#B58963]"
          }`}
        >
          {uploading ? "Creating Post..." : "Create Post"}
        </button>
      </div>
    </main>
  );
}