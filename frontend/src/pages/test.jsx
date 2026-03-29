import { useState } from "react";
import { createClient } from "@supabase/supabase-js";

// Supabase config
const url = "https://jlrgcfnuthykgttxvtvo.supabase.co";
const key =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpscmdjZm51dGh5a2d0dHh2dHZvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ3NDIwMzEsImV4cCI6MjA5MDMxODAzMX0.g7uSt_Hq2x0-n-YpIsxtJtW7l-rnSGPqcAikdOFPNxo";

const supabase = createClient(url, key);

export default function Testpage() {
  const [file, setFile] = useState(null);

  // Upload file function
  async function uploadMedia(uploadFile) {
    if (!uploadFile) return;

    const fileName = `${Date.now()}-${uploadFile.name}`;

    const { data, error } = await supabase.storage
      .from("mybucket") // <-- Change to your bucket name
      .upload(fileName, uploadFile);

    if (error) throw error;

    // Get public URL
    const { data: publicUrl } = supabase.storage
      .from("mybucket")
      .getPublicUrl(fileName);

    return publicUrl.publicUrl;
  }

  // Handle upload button
  async function handleUpload() {
    try {
      const url = await uploadMedia(file);
      console.log("Uploaded File URL:", url);
      alert("Uploaded Successfully!");
    } catch (error) {
      console.log(error);
      alert("Upload failed!");
    }
  }

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center gap-4">
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button
        onClick={handleUpload}
        className="px-4 py-2 bg-blue-600 text-white rounded"
      >
        Upload
      </button>
    </div>
  );
}