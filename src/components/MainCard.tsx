"use client";

import { useCallback, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { useDropzone } from "react-dropzone";
import EditPage from "./EditPage";
import { validateMIMEType } from "validate-image-type";

interface CommandProps {
  onImageChange: (image: string, name: string) => void;
}

const MainCard: React.FC<CommandProps> = ({ onImageChange }) => {
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [imgName, setImgName] = useState<string | null>(null);

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      const file = acceptedFiles[0];

      const allowedMimeTypes = [
        "image/jpeg",
        "image/png",
        "image/gif",
        "image/svg+xml",
        "image/webp",
      ];

      if (!allowedMimeTypes.includes(file.type)) {
        alert("Please select a valid image file.");
        return;
      }

      setImgName(file.name);
      const reader = new FileReader();

      reader.onload = () => {
        if (typeof reader.result === "string") {
          setImagePreview(reader.result);

          onImageChange(reader.result, file.name);
        }
      };

      reader.readAsDataURL(file);
    },
    [onImageChange]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div>
      {imagePreview ? (
        <EditPage image={imagePreview} name={imgName} />
      ) : (
        // <Card className="md:w-[900px] lg:w-[900px] h-[500px] border-2 border-zinc-100 mt-20 drop-shadow-2xl mx-4  ">
        // <Card className="flex-center flex h-72 lg:w-[900px] lg:h-96 cursor-pointer flex-col gap-5 rounded-[16px] border border-dashed bg-purple-100/20 shadow-inner mt-4">
        <Card className="flex-center flex h-72   cursor-pointer flex-col gap-5 rounded-[16px] border border-dashed bg-purple-100/20 shadow-inner mt-4">
          <CardContent className="flex flex-col justify-center items-center h-full">
            <div
              {...getRootProps()}
              className={`dropzone ${isDragActive ? "active" : ""}`}
              style={{
                // border: "1px solid black",
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <input {...getInputProps()} />
              {isDragActive ? (
                <div className="flex flex-col justify-center items-center h-full">
                  <UploadImage />
                </div>
              ) : (
                <div className="text-center">
                  <Button
                    variant="outline"
                    className="bg-gradient-to-r from-purple-900 via-amber-900 to-yellow-500 text-zinc-50 hover:text-white text-2xl font-bold font-sans rounded-full border-0 p-6 hover:bg-gradient-to-r hover:from-purple-800 hover:via-amber-800 hover:to-yellow-400"
                  >
                    Upload Image
                  </Button>
                </div>
              )}
              <p className="mt-8 font-sans font-extrabold text-base text-zinc-400 mx-auto">
                Drag drop Image, or click to select Image
              </p>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default MainCard;

export function UploadImage() {
  return (
    <div>
      <Image
        src="/uploadFile.svg"
        alt="Upload-Image"
        width={100}
        height={100}
      />
    </div>
  );
}
