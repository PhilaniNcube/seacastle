"use client";

import { useState } from "react";
import Image from "next/image";
import { gallery } from "@/data/rooms";
import { Button } from "./ui/button";
// This would typically come from an API or database


export default function ImageGallery() {
  const [selectedGallery, setSelectedGallery] = useState(gallery[0]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Our Gallery</h1>

      <div className="flex space-x-4 mb-6">
        {gallery.map((item, index) => (
          <Button
            key={item.slug}
            onClick={() => setSelectedGallery(gallery[index])}
            className={`px-4 py-2 rounded-md ${
              selectedGallery.slug === item.slug
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
            }`}
          >
            {item.name}
          </Button>
        ))}
      </div>

      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
        {selectedGallery.images.map((image, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-lg shadow-lg mb-4"
          >
            <Image
              src={image.url}
              alt={`${selectedGallery.name} ${index + 1}`}
              width={image.orientation === "landscape" ? 400 : 300}
              height={image.orientation === "landscape" ? 300 : 400}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
              <h3 className="text-white text-xl font-thin ">
                {selectedGallery.name}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
