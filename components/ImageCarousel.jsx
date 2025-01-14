import React, { useRef } from "react";
import { motion, useAnimation } from "framer-motion";

const InfiniteImageCarousel = () => {
  const images = [
    "/images/4611023cdfc1d96c5bc7486cdc08ada9.png",
    "/images/1696858826722.jpg",
    "/images/original-eb6e8ee8227e5464dce39146e8e7da54.png",
  ];

  const carouselRef = useRef(null);
  const controls = useAnimation();

  const handleDragEnd = (_, info) => {
    const containerWidth = carouselRef.current.offsetWidth;
    const totalWidth = containerWidth * images.length;

    if (info.offset.x > 0) {
      // Dragged too far to the right (first image)
      controls.set({ x: -totalWidth / 2 });
    } else if (info.offset.x < -totalWidth / 2) {
      // Dragged too far to the left (last image)
      controls.set({ x: 0 });
    }
  };

  return (
    <div className="w-full flex justify-center mt-2 mb-10 overflow-hidden relative">
      <motion.div
        ref={carouselRef}
        drag="x"
        dragConstraints={{ left: -Infinity, right: Infinity }}
        dragElastic={0.1}
        animate={controls}
        onDragEnd={handleDragEnd}
        className="cursor-grab active:cursor-grabbing flex gap-4"
      >
        {/* Render Images (Duplicated for Seamless Loop) */}
        {[...images, ...images].map((src, index) => (
          <motion.img
            key={index}
            className="w-1/12 rounded-lg"
            src={src}
            alt={`carousel-img-${index}`}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default InfiniteImageCarousel;
