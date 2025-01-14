import { motion, useScroll, useTransform } from "framer-motion";
import { NavigationMenuDemo } from "./NavigationButton";

export default function Creative() {
  const { scrollYProgress } = useScroll();
  const creativeTranslateY = useTransform(scrollYProgress, [0.5, 1], [1, 0]);
  const creativeWidth = useTransform(
    scrollYProgress,
    [0.4, 0.56],
    ["5%", "33%"]
  );
  const tiltAngle = useTransform(scrollYProgress, [0.25, 0.7], [-35, 10]);
  const tiltText = useTransform(scrollYProgress, [0.25, 0.7], [-50, -10]);

  return (
    <div className="max-w-screen-2xl rounded-t-3xl w-full  mx-auto bg-transparent">
      <div className="w-full">
        {/* creative section */}
        <div className="w-10/12 mx-auto">
          <motion.div
            initial={{ y: -100 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full pt-28"
          >
            <h1 className="text-[#292929] text-[60px] mx-auto leading-none font-bold mt-14 text-center font-clash pt-[50px]">
              Designs that speak louder than words
            </h1>
            <h2 className="text-[#292929] text-[30px] mx-auto leading-none text-center mt-5">
              From bold ideas to beautiful executions, we craft visuals that
              inspire
            </h2>
          </motion.div>
          {/* <div className="w-full flex justify-center mt-14">
            <button className="text-[16px] font-normal px-4 py-2 bg-[#292929] rounded-md font-clash text-white">
              Explore Creativity
            </button>
          </div> */}
          <div className="mt-5 w-full">
            <NavigationMenuDemo />
          </div>
          <div className="w-full flex justify-center gap-2 mt-2 mb-10  ">
            <motion.img
              className="w-1/12 rounded-lg"
              src="/images/4611023cdfc1d96c5bc7486cdc08ada9.png"
              alt=""
              style={{
                transform: `translateY(${creativeTranslateY}px)`,
                width: creativeWidth, // Dynamic width based on scroll
              }}
            />
            <motion.img
              className="w-1/12 rounded-lg"
              src="/images/1696858826722.jpg"
              alt=""
              style={{
                transform: `translateY(${creativeTranslateY}px)`,
                width: creativeWidth, // Dynamic width based on scroll
              }}
            />
            <motion.img
              className="w-1/12 rounded-lg"
              src="/images/original-eb6e8ee8227e5464dce39146e8e7da54.png"
              alt=""
              style={{
                transform: `translateY(${creativeTranslateY}px)`,
                width: creativeWidth, // Dynamic width based on scroll
              }}
            />
          </div>
        </div>
        {/* Tech section */}
        <motion.div
          className="w-10/12 mx-auto bg-blue-200 rounded-3xl"
          style={{
            rotate: tiltAngle, // Apply the rotation effect
          }}
        >
          <motion.div
            className="w-full pt-28"
            style={{
              rotate: tiltText, // Apply the rotation effect
            }}
          >
            <h1 className="text-[#292929] text-[80px] mx-auto leading-none font-bold mt-14 text-center">
              Code with clarity
            </h1>
            <h2 className="text-[#292929] text-[40px] mx-auto leading-none text-center mt-5">
              Smart solutions for every problem
            </h2>
          </motion.div>
          <motion.div
            className="w-full flex justify-center mt-14"
            style={{
              rotate: tiltText, // Apply the rotation effect
            }}
          >
            <button className="text-[16px] font-normal px-4 py-2 bg-[#292929] rounded-md text-white">
              Discover Tech
            </button>
          </motion.div>
          <motion.div
            style={{
              rotate: tiltText, // Apply the rotation effect
            }}
            className="w-11/12 mx-auto bg-red-300 h-[450px] flex flex-wrap my-5 shadow-lg rounded-xl"
          >
            <div className="w-1/3 h-[150px] bg-white rounded-tl-xl flex justify-center items-center">
              <h1>hello</h1>
            </div>
            <div className="w-1/3 h-[150px] flex justify-center items-center bg-blue-400">
              <h1>hello</h1>
            </div>
            <div className="w-1/3 h-[150px] flex justify-center items-center bg-white rounded-tr-xl">
              <h1>hello</h1>
            </div>
            <div className="w-1/3 h-[150px] flex justify-center items-center bg-blue-400">
              <h1>hello</h1>
            </div>
            <div className="w-1/3 h-[150px] flex justify-center items-center bg-white">
              <h1>hello</h1>
            </div>
            <div className="w-1/3 h-[150px] flex justify-center items-center bg-blue-400">
              <h1>hello</h1>
            </div>
            <div className="w-1/3 h-[150px] flex justify-center items-center bg-white rounded-bl-xl">
              <h1>hello</h1>
            </div>
            <div className="w-1/3 h-[150px] flex justify-center items-center bg-blue-400">
              <h1>hello</h1>
            </div>
            <div className="w-1/3 h-[150px] flex justify-center items-center bg-white rounded-br-xl">
              <h1>hello</h1>
            </div>
          </motion.div>
        </motion.div>
        {/* Film making Section */}
        <div className="w-10/12 mx-auto bg-gray-200 rounded-3xl">
          <div className="w-full pt-28">
            <h1 className="text-[#292929] text-[80px] mx-auto leading-none font-bold mt-14 text-center">
              Stories you’ll want to replay.
            </h1>
            <h2 className="text-[#292929] text-[40px] mx-auto leading-none text-center mt-5">
              crafting moments, and leaving an impact.
            </h2>
          </div>
          <div className="w-full flex justify-center mt-14">
            <button className="text-[16px] font-normal px-4 py-2 bg-[#292929] rounded-md text-white">
              Watch the Reel
            </button>
          </div>
          <div className="w-full h-[500px]"></div>
        </div>
      </div>
    </div>
  );
}
