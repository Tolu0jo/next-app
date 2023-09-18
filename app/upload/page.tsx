"use client";
import { CldUploadWidget, CldImage } from "next-cloudinary";
import { useState } from "react";

interface CloudinaryResult {
  public_id: string;
}
const UploadPage = () => {
  const [publicId, setPublicId] = useState("");

  return (
    <>
      {publicId && (
        <CldImage src={publicId} width={270} height={180} alt="img" />
      )}
      <CldUploadWidget
        uploadPreset="Teetony"
        options={{
          sources: [
            "local",
            "image_search",
            "google_drive",
            "instagram",
            "camera",
          ],
          multiple: false,
        }}
        onUpload={(result, widget) => {
          if (result.event !== "success") return;
          const info = result.info as CloudinaryResult;
          setPublicId(info.public_id);
        }}
      >
        {({ open }) => {
          function handleOnClick(e: any) {
            e.preventDefault();
            open();
          }
          return (
            <button className="btn btn-primary" onClick={handleOnClick}>
              Upload an Image
            </button>
          );
        }}
      </CldUploadWidget>{" "}
    </>
  );
};
export default UploadPage;
