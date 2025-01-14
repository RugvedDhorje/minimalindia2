// "use client";
// import { useRef } from "react";
// import { motion, useScroll, useTransform } from "framer-motion";
// import Creative from "./Creative";

// export default function Service() {
//   const circleRef = useRef(null);
//   const innerCircleRef = useRef(null);
//   //   const textRef = useRef(null);
//   const containerRef = useRef(null);

//   // Scroll progress
//   const { scrollYProgress } = useScroll();

//   // Map scroll progress to scale values for the circle
//   const circleScale = useTransform(scrollYProgress, [0.45, 1], [1, 150]); // Adjust start and end values as needed
//   const innerCircleScale = useTransform(scrollYProgress, [0.45, 1], [1, 5]); // Adjust start and end values as needed

//   //   const textScale = useTransform(scrollYProgress, [0.85, 1], [1, 40]); // Adjust start and end values as needed
//   return (
//     <div>
//       <div
//         // initial={{ y: -400 }}
//         // whileInView={{ y: 0 }}
//         // transition={{ duration: 1 }}
//         ref={containerRef}
//         className="max-w-screen-2xl w-full mx-auto rounded-t-3xl pb-40 overflow-hidden absolute z-20 bg-opacity-20 bg-white"
//       >
//         <h1 className="text-center text-[90px] font-bold text-gray-900 leading-none pt-[200px] pb-[150px]">
//           Embrace the future of <br /> urban mobility
//         </h1>
//         <div className="w-10/12 mx-auto flex flex-wrap mb-10 relative">
//           {/* Circle in the middle */}
//           <div className="absolute inset-0 flex items-center justify-center">
//             <motion.div
//               ref={circleRef}
//               style={{
//                 width: "60px",
//                 height: "60px",
//                 borderRadius: "50%",
//                 backgroundColor: "#15F5BA",
//                 scale: circleScale, // Bind circle scaling to scroll
//                 display: "flex",
//                 justifyContent: "center",
//                 alignItems: "center",
//               }}
//             >
//               <motion.div
//                 ref={innerCircleRef}
//                 style={{
//                   width: "30px",
//                   height: "30px",
//                   borderRadius: "50%",
//                   backgroundColor: "white",
//                   scale: innerCircleScale, // Bind circle scaling to scroll
//                 }}
//               ></motion.div>
//               {/* <motion.h1
//                 ref={textRef}
//                 style={{
//                   fontSize: "20px",
//                   fontWeight: "bold",
//                   color: "black",
//                   scale: textScale, // Bind text scaling to scroll
//                 }}
//               >
//                 minimal
//               </motion.h1> */}
//             </motion.div>
//           </div>

//           {/* Content Divs */}
//           <div className="w-1/2">
//             <div className="p-[100px] w-5/6 mx-auto border-r border-b border-gray-700 rounded-br-[70px]">
//               <h4 className="text-[30px] font-semibold ">
//                 Stress-free service
//               </h4>
//               <p className="text-[18px]">
//                 Unlock effortless mobility-from seamless registration to
//                 all-inclusive maintenance, we handle the details so you enjoy
//                 the ride.
//               </p>
//             </div>
//           </div>
//           <div className="w-1/2">
//             <div className="p-[100px] w-5/6 mx-auto">
//               <h4 className="text-[30px] font-semibold ">
//                 Stress-free service
//               </h4>
//               <p className="text-[18px]">
//                 Unlock effortless mobility-from seamless registration to
//                 all-inclusive maintenance, we handle the details so you enjoy
//                 the ride.
//               </p>
//             </div>
//           </div>
//           <div className="w-1/2">
//             <div className="p-[100px] w-5/6 mx-auto">
//               <h4 className="text-[30px] font-semibold ">
//                 Stress-free service
//               </h4>
//               <p className="text-[18px]">
//                 Unlock effortless mobility-from seamless registration to
//                 all-inclusive maintenance, we handle the details so you enjoy
//                 the ride.
//               </p>
//             </div>
//           </div>
//           <div className="w-1/2">
//             <div className="p-[100px] w-5/6 mx-auto border-l border-t border-gray-700 rounded-tl-[70px]">
//               <h4 className="text-[30px] font-semibold ">
//                 Stress-free service
//               </h4>
//               <p className="text-[18px]">
//                 Unlock effortless mobility-from seamless registration to
//                 all-inclusive maintenance, we handle the details so you enjoy
//                 the ride.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="max-w-screen-2xl w-full mx-auto rounded-t-3xl pb-40 relative ">
//         <Creative />
//       </div>
//     </div>
//   );
// }
// "use client";
// import { useRef } from "react";
// import { motion, useScroll, useTransform } from "framer-motion";
// import Creative from "./Creative";

// export default function Service() {
//   const circleRef = useRef(null);
//   const innerCircleRef = useRef(null);

//   // Scroll progress
//   const { scrollYProgress } = useScroll();

//   // Map scroll progress to scale values for the circle
//   const circleScale = useTransform(scrollYProgress, [0.41, 1], [1, 150]);
//   const innerCircleScale = useTransform(scrollYProgress, [0.41, 1], [1, 5]);

//   // Reveal Creative Div
//   const creativeOpacity = useTransform(scrollYProgress, [0.4, 0.5], [0, 1]);
//   const creativeTranslateY = useTransform(scrollYProgress, [0.3, 1], [1, 0]);

//   return (
//     <div className="relative">
//       {/* Fixed Circle Animation Section */}
//       <div className="fixed inset-0 z-20 flex items-center justify-center  bg-white">
//         <motion.div
//           ref={circleRef}
//           style={{
//             width: "60px",
//             height: "60px",
//             borderRadius: "50%",
//             backgroundColor: "#15F5BA",
//             scale: circleScale,
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//           }}
//         >
//           <motion.div
//             ref={innerCircleRef}
//             style={{
//               width: "30px",
//               height: "30px",
//               borderRadius: "50%",
//               backgroundColor: "white",
//               scale: innerCircleScale,
//             }}
//           ></motion.div>
//         </motion.div>
//       </div>

//       {/* Content Section */}
//       <div className="max-w-screen-2xl w-full mx-auto pt-[200px] relative z-30">
//         <h1 className="text-center text-[90px] font-bold text-gray-900 leading-none pt-[200px] pb-[150px]">
//           Embrace the future of <br /> urban mobility
//         </h1>
//         <div className="w-10/12 mx-auto flex flex-wrap mb-10">
//           {/* Grid Content */}
//           <div className="w-1/2">
//             <div className="p-[100px] w-5/6 mx-auto border-r border-b border-gray-700 rounded-br-[70px]">
//               <h4 className="text-[30px] font-semibold ">
//                 Stress-free service
//               </h4>
//               <p className="text-[18px]">
//                 Unlock effortless mobility—from seamless registration to
//                 all-inclusive maintenance, we handle the details so you enjoy
//                 the ride.
//               </p>
//             </div>
//           </div>
//           <div className="w-1/2">
//             <div className="p-[100px] w-5/6 mx-auto">
//               <h4 className="text-[30px] font-semibold ">
//                 Stress-free service
//               </h4>
//               <p className="text-[18px]">
//                 Unlock effortless mobility—from seamless registration to
//                 all-inclusive maintenance, we handle the details so you enjoy
//                 the ride.
//               </p>
//             </div>
//           </div>
//           <div className="w-1/2">
//             <div className="p-[100px] w-5/6 mx-auto">
//               <h4 className="text-[30px] font-semibold ">
//                 Stress-free service
//               </h4>
//               <p className="text-[18px]">
//                 Unlock effortless mobility—from seamless registration to
//                 all-inclusive maintenance, we handle the details so you enjoy
//                 the ride.
//               </p>
//             </div>
//           </div>
//           <div className="w-1/2">
//             <div className="p-[100px] w-5/6 mx-auto border-l border-t border-gray-700 rounded-tl-[70px]">
//               <h4 className="text-[30px] font-semibold ">
//                 Stress-free service
//               </h4>
//               <p className="text-[18px]">
//                 Unlock effortless mobility—from seamless registration to
//                 all-inclusive maintenance, we handle the details so you enjoy
//                 the ride.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Revealed Creative Section */}
//       <motion.div
//         style={{
//           opacity: creativeOpacity,
//           transform: `translateY(${creativeTranslateY}px)`,
//         }}
//         className="max-w-screen-2xl w-full mt-[-700px] mx-auto relative z-40"
//       >
//         <Creative />
//       </motion.div>
//     </div>
//   );
// }
"use client";
import { SetStateAction, useEffect, useRef, useState } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import Creative from "./Creative";

export default function Service() {
  const circleRef = useRef(null);
  const innerCircleRef = useRef(null);
  const [aboveDivOpacity, setAboveDivOpacity] = useState(1);

  // Simulate a motion value for example
  const motionValue = useSpring(0.5, { stiffness: 200 });
  // Scroll progress
  const { scrollYProgress } = useScroll();

  // Map scroll progress to scale values for the circle
  const circleScale = useTransform(scrollYProgress, [0.42, 1], [1, 150]);
  const innerCircleScale = useTransform(scrollYProgress, [0.42, 1], [1, 5]);

  // Opacity control for the "above div"
  // const aboveDivOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  // Reveal Creative Div
  const creativeOpacity = useTransform(scrollYProgress, [0.5, 0.52], [0, 1]);
  const creativeTranslateY = useTransform(scrollYProgress, [0.5, 1], [1, 0]);
  const creativeWidth = useTransform(
    scrollYProgress,
    [0.41, 0.55],
    ["50%", "100%"]
  );
  useEffect(() => {
    const unsubscribe = motionValue.on(
      "change",
      (latest: SetStateAction<number>) => {
        setAboveDivOpacity(latest); // Update state with the numeric value
      }
    );

    return () => unsubscribe(); // Cleanup on unmount
  }, [motionValue]);

  return (
    <div className="relative">
      {/* Fixed Circle Animation Section */}
      <div
        style={{ opacity: aboveDivOpacity }}
        className="fixed inset-0 z-10 flex items-center justify-center bg-white"
      >
        {/* "Above Div" */}
      </div>

      <div className="fixed inset-0 z-30 flex items-center justify-center">
        <motion.div
          ref={circleRef}
          style={{
            width: "60px",
            height: "60px",
            borderRadius: "50%",
            backgroundColor: "#15F5BA",
            scale: circleScale,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <motion.div
            ref={innerCircleRef}
            style={{
              width: "30px",
              height: "30px",
              borderRadius: "50%",
              backgroundColor: "white",
              scale: innerCircleScale,
            }}
            className="z-20"
          ></motion.div>
        </motion.div>
      </div>

      {/* Content Section */}
      <div className="max-w-screen-2xl w-full mx-auto pt-[200px] relative z-10">
        <h1 className="text-center text-[90px] font-bold text-gray-800 leading-none pt-[200px] pb-[150px]">
          Embrace the future of <br /> urban mobility
        </h1>
        <div className="w-10/12 mx-auto flex flex-wrap mb-10">
          {/* Grid Content */}
          <div className="w-1/2">
            <div className="p-[100px] w-5/6 mx-auto border-r border-b border-gray-700 rounded-br-[70px]">
              <motion.h4
                initial={{ x: -100 }}
                whileInView={{ x: 0 }}
                transition={{ duration: 0.3 }}
                className="text-[30px] font-semibold "
              >
                Designs that speak louder than words
              </motion.h4>
              <motion.p
                initial={{ x: -100 }}
                whileInView={{ x: 0 }}
                transition={{ duration: 0.3 }}
                className="text-[18px]"
              >
                From bold ideas to beautiful executions, we craft visuals that
                inspire
              </motion.p>
            </div>
          </div>
          <div className="w-1/2">
            <div className="p-[100px] w-5/6 mx-auto">
              <motion.h4
                initial={{ x: 100 }}
                whileInView={{ x: 0 }}
                transition={{ duration: 0.3 }}
                className="text-[30px] font-semibold "
              >
                Code with clarity
              </motion.h4>
              <motion.p
                initial={{ x: 100 }}
                whileInView={{ x: 0 }}
                transition={{ duration: 0.3 }}
                className="text-[18px]"
              >
                Smart solutions for every problem
              </motion.p>
            </div>
          </div>
          <div className="w-1/2">
            <div className="p-[100px] w-5/6 mx-auto">
              <motion.h4
                initial={{ x: -100 }}
                whileInView={{ x: 0 }}
                transition={{ duration: 0.3 }}
                className="text-[30px] font-semibold "
              >
                Stories you’ll want to replay.
              </motion.h4>
              <motion.p
                initial={{ x: -100 }}
                whileInView={{ x: 0 }}
                transition={{ duration: 0.3 }}
                className="text-[18px]"
              >
                crafting moments, and leaving an impact.
              </motion.p>
            </div>
          </div>
          <div className="w-1/2">
            <div className="p-[100px] w-5/6 mx-auto border-l border-t border-gray-700 rounded-tl-[70px]">
              <motion.h4
                initial={{ x: 100 }}
                whileInView={{ x: 0 }}
                transition={{ duration: 0.3 }}
                className="text-[30px] font-semibold "
              >
                Stress-free service
              </motion.h4>
              <motion.p
                initial={{ x: 100 }}
                whileInView={{ x: 0 }}
                transition={{ duration: 0.3 }}
                className="text-[18px]"
              >
                Unlock effortless mobility—from seamless registration to
                all-inclusive maintenance, we handle the details so you enjoy
                the ride.
              </motion.p>
            </div>
          </div>
        </div>
      </div>

      {/* Revealed Creative Section */}
      <motion.div
        style={{
          opacity: creativeOpacity,
          transform: `translateY(${creativeTranslateY}px)`,
          width: creativeWidth, // Dynamic width based on scroll
        }}
        className="max-w-screen-2xl w-full mt-[-400px] mx-auto relative z-40"
      >
        <div className="w-full">
          <Creative />
        </div>
      </motion.div>
    </div>
  );
}
