import { createClient } from "@supabase/supabase-js";

const url = "https://jlrgcfnuthykgttxvtvo.supabase.co";
const key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpscmdjZm51dGh5a2d0dHh2dHZvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ3NDIwMzEsImV4cCI6MjA5MDMxODAzMX0.g7uSt_Hq2x0-n-YpIsxtJtW7l-rnSGPqcAikdOFPNxo";
const supabase = createClient(url, key);

export const uploadMedia = async (file) => {
  return new Promise((resolve, reject) => {
    if (file == null) {
      reject("No file selected");
    } else {
      const timestamp = Date.now();
      const filename = timestamp + "-" + file.name;
      
      supabase.storage
        .from("images")
        .upload(filename, file, {
          upsert: false,
          cacheControl: "3600",
        })
        .then((response) => {
          console.log("Upload successful:", response);
          const publicUrl = supabase.storage
            .from("images")
            .getPublicUrl(filename).data.publicUrl;
          resolve(publicUrl);
        })
        .catch((error) => {
          console.error("Upload error:", error);
          reject(error);
        });
    }
  });
};

export default uploadMedia;
