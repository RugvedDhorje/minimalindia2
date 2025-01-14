"use client";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

interface SpotlightButtonProps {
  text: string; // Prop for the text to be displayed
}

const SpotlightButton: React.FC<SpotlightButtonProps> = ({ text }) => {
  const btnRef = useRef<HTMLButtonElement | null>(null);
  const spanRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!btnRef.current || !spanRef.current) return;

      const { width } = btnRef.current.getBoundingClientRect();
      const offset = e.offsetX;
      const left = `${(offset / width) * 100}%`;

      spanRef.current.animate({ left }, { duration: 250, fill: "forwards" });
    };

    const handleMouseLeave = () => {
      if (!spanRef.current) return;

      spanRef.current.animate(
        { left: "50%" },
        { duration: 100, fill: "forwards" }
      );
    };

    const buttonElement = btnRef.current;

    if (buttonElement) {
      buttonElement.addEventListener("mousemove", handleMouseMove);
      buttonElement.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (buttonElement) {
        buttonElement.removeEventListener("mousemove", handleMouseMove);
        buttonElement.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  return (
    <motion.button
      whileTap={{ scale: 0.985 }}
      ref={btnRef}
      className="relative w-full max-w-xs overflow-hidden rounded-lg bg-slate-950 px-4 py-3 text-lg font-medium text-white"
    >
      <span className="pointer-events-none relative z-10 mix-blend-difference">
        {text}
      </span>
      <span
        ref={spanRef}
        className="pointer-events-none absolute left-[50%] top-[50%] h-32 w-32 -translate-x-[50%] -translate-y-[50%] rounded-full bg-slate-100"
      />
    </motion.button>
  );
};
export default SpotlightButton;
