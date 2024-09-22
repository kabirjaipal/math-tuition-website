"use client";
import { useState } from "react";
import galleryImages from "@/settings/galleryImages";
import { FaTimes } from "react-icons/fa";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openModal = (src: string) => {
    setSelectedImage(src);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section id="gallery" className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-extrabold text-oceanblue sm:text-5xl mb-8">
          Gallery
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="rounded-lg overflow-hidden shadow-md shadow-slate-500 transform duration-300 transition-all hover:scale-95 cursor-pointer"
              onClick={() => openModal(image.src)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover"
                loading="lazy" // Lazy load images
              />
              <p className="text-gray-700 px-4 py-2">{image.description}</p>
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="relative">
            <button
              className="absolute top-4 right-4 text-white text-3xl"
              onClick={closeModal}
            >
              <FaTimes size={40} />
            </button>
            <img
              src={selectedImage}
              alt="Full Screen"
              className="max-w-full max-h-screen"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
