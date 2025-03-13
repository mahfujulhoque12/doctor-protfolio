"use client";
import React, { useState } from "react";
import thumb from "/public/video/thumb.jpg";
import Image from "next/image";
import { FaPlay } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const VideoRight = () => {
  const url = "https://www.youtube.com/embed/tKjvVf0a50c";
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeUrl, setActiveUrl] = useState<string | null>(null);

  const openModal = (videoUrl: string) => {
    setActiveUrl(videoUrl);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setActiveUrl(null);
    setIsModalOpen(false);
  };

  return (
    <div>
      <div onClick={() => openModal(url)}>
        <div className="p-4 relative z-10 shadow-md border rounded-lg hover:shadow-lg transition-shadow duration-300 mb-2 cursor-pointer">
          <Image
            src={thumb}
            alt="video img"
            width={700}
            height={300}
            className="rounded-md object-cover w-full h-[350px]"
          />
          <div className="absolute top-[45%] left-[45%] w-12 h-12 bg-[#52CBCB] rounded-full flex items-center justify-center">
            <FaPlay className="text-white" size={24} />
          </div>
        </div>
      </div>
      {isModalOpen && activeUrl && (
        <div className="fixed inset-0 z-50 flex justify-center items-center">
          {/* Background overlay */}
          <div
            className="absolute inset-0 bg-black opacity-50"
            onClick={closeModal}
          ></div>
          {/* Modal content */}
          <div
            className="relative bg-white p-4 rounded-lg shadow-lg max-w-3xl w-full z-50"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-1 right-1 text-gray-700 hover:text-gray-900"
              onClick={closeModal}
            >
              <IoClose />
            </button>
            <iframe
              width="100%"
              height="400"
              className="rounded-md"
              src={activeUrl}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoRight;
