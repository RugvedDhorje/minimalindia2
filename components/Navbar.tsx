// const Navbar = () => {
//   return (
//     <div className="max-w-screen-2xl pt-5">
//       <div className="w-6/12 mx-auto flex shadow-lg items-center bg-white py-3 rounded-2xl">
//         <div className="w-1/3 ml-6">
//           {/* <img src="/logo.png" alt="" className="h-[3.5vw]" /> */}
//           <h2 className="text-black font-extralight text-[30px]">
//             MINIMAL INDIA
//           </h2>
//         </div>
//         <div className="flex w-2/3 justify-evenly items-center">
//           <li className="list-none text-[16px] font-normal uppercase text-[#4B4B4B]">
//             Home
//           </li>
//           <li className="list-none text-[16px] font-normal uppercase text-[#4B4B4B]">
//             tech
//           </li>
//           <li className="list-none text-[16px] font-normal uppercase text-[#4B4B4B]">
//             Design
//           </li>

//           <li className="list-none text-[16px] font-normal uppercase text-[#4B4B4B]">
//             film
//           </li>
//           <button className="text-[16px] font-normal uppercase px-4 py-2 bg-[#292929] rounded-md text-white">
//             Get In Touch
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-8 w-full z-60 flex justify-center">
      <div className="bg-white shadow-md rounded-lg px-8 py-5 flex justify-between items-center w-6/12 ">
        <div className="text-2xl font-bold text-gray-800">
          <Link href={"/Home"}>
            <h2 className="text-black font-extralight text-[30px] cursor-pointer">
              MINIMAL INDIA
            </h2>
          </Link>
        </div>
        <ul className="flex space-x-6 cursor-pointer">
          <li className="list-none text-[16px] font-normal uppercase text-[#4B4B4B] hover:text-gray-900 transition">
            Home
          </li>
          <li className="list-none text-[16px] font-normal uppercase text-[#4B4B4B] hover:text-gray-900 transition">
            Tech
          </li>
          <li className="list-none text-[16px] font-normal uppercase text-[#4B4B4B] hover:text-gray-900 transition">
            Design
          </li>
          <li className="list-none text-[16px] font-normal uppercase text-[#4B4B4B] hover:text-gray-900 transition">
            Film
          </li>
        </ul>
        <button className="text-[16px] font-normal uppercase px-4 py-2 bg-[#292929] rounded-md text-white">
          Get In Touch
        </button>
      </div>
    </nav>
  );
}
