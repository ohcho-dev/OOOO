import { useState, useRef, DragEvent, useEffect } from "react";

interface ImgUploaderProp {
  disabled?: boolean;
  onChangeImage: (file: Blob | null) => void;
}
const ImgUploader: React.FC<ImgUploaderProp> = ({
  disabled = false,
  onChangeImage,
}) => {
  const [fileURL, setFileURL] = useState<string>("");
  const [file, setFile] = useState<FileList | null>();
  const imgUploadInput = useRef<HTMLInputElement | null>(null);

  const onImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    if (event.target.files) {
      setFile(event.target.files);

      const newFileURL = URL.createObjectURL(event.target.files[0]);
      setFileURL(newFileURL);

      onChangeImage(event.target.files[0]);
    }
  };

  const handleOndragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleOndrop = (e: DragEvent<HTMLDivElement>) => {
    //prevent the browser from opening the image
    e.preventDefault();
    e.stopPropagation();
    //let's grab the image file
    let imageFile = e.dataTransfer.files;
    if (imageFile) {
      setFile(imageFile);
      const newFileURL = URL.createObjectURL(imageFile[0]);
      setFileURL(newFileURL);
      onChangeImage(imageFile[0]);
    }
  };

  const onImageRemove = (): void => {
    URL.revokeObjectURL("");
    setFileURL(""); // 렌더링 이미지 초기화
    setFile(null);
    onChangeImage(null);
  };

  return (
    <div onDragOver={handleOndragOver} onDrop={handleOndrop}>
      <img
        src={
          fileURL
            ? fileURL
            : "https://cdn-icons-png.flaticon.com/512/1555/1555492.png"
        }
        alt=""
        onClick={(event) => {
          event.preventDefault();
          if (imgUploadInput.current) {
            imgUploadInput.current.click();
          }
        }}
      ></img>
      {file && <button onClick={onImageRemove}>삭제</button>}
      <input
        type="file"
        id="img"
        accept="image/*"
        required
        ref={imgUploadInput}
        onChange={onImageChange}
      ></input>
      <div>
        {file && <input value={file[0].name || ""} onClick={onImageRemove} />}
      </div>
      {disabled && (
        <div
          style={{
            width: "100%",
            height: "300px",
            background: "rgba(0, 0, 0, 0.2)",
            position: "absolute",
            top: 0,
            left: 0,
          }}
        />
      )}
    </div>
  );
};

export default ImgUploader;
