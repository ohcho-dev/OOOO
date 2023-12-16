"use client";
import ImgUploader from "@/components/ImageUploader";
import FileUpDown from "@/components/fileUpDown";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function ImageUpload() {
  const router = useRouter();
  const [submitImage, setSubmitImage] = useState<Blob | null>(null);
  const handleImage = (file: Blob | null) => {
    setSubmitImage(file);
  };
  return (
    <div className="h-[100svh]">
      <div className="pt-20">
        <ImgUploader onChangeImage={handleImage} />
      </div>
      <button
        className="w-full bg-[#FFE695] h-[6rem] absolute bottom-0"
        onClick={() => router.push("/promotion/pledge/result")}
      >
        다음 단계
      </button>
    </div>
  );
}
