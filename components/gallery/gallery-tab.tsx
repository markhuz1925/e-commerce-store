"use client";

import { cn } from "@/lib/utils";
import { Image as ImageType } from "@/types";
import Image from "next/image";
import { useState } from "react";

export default function Gallery({ images }: { images: ImageType[] }) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const thumbnailClick = (index: number) => {
    setSelectedImageIndex(index);
  };

  return (
    <div className="flex flex-row gap-5">
      <div className="flex flex-col gap-3">
        {images.map((image, index) => (
          <div
            key={image.id}
            onClick={() => thumbnailClick(index)}
            className={cn(
              "cursor-pointer",
              selectedImageIndex === index ? "border border-blue-500" : ""
            )}
          >
            <Image
              src={image.url}
              width={60}
              height={60}
              className="object-cover object-center rounded-md aspect-square"
              alt=""
            />
          </div>
        ))}
      </div>
      <div className="aspect-square w-full">
        <div className="aspect-square relative h-full w-full sm:rounded-lg overflow-hidden">
          <Image
            src={images[selectedImageIndex].url}
            fill
            className="object-cover object-center"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
