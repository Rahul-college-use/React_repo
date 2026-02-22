import React from "react";
import {MoveRight} from 'lucide-react' 

const images = [
  "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600",
  "https://images.unsplash.com/photo-1587614298171-a223667e51c2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1661590867485-c67026a70bc7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHdvcmtpbmclMjBwcm9mZXNzaW9uYWx8ZW58MHx8MHx8fDA%3D",
  "https://plus.unsplash.com/premium_photo-1661757403301-ae68e1f1b827?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cHJvZmVzc2lvbmFsfGVufDB8fDB8fHww",
];

const Right_sider = () => {
  return (
    <div className="h-screen w-[65%] md:w-[70%] p-4 flex overflow-x-auto gap-4 scroll-smooth hide-scrollbar">

      {images.map((img, index) => (
        <div
          key={index}
          className="relative min-w-[300px]  h-[90%] rounded-3xl overflow-hidden shadow-lg"
        >
          {/* Image */}
          <img
            src={img}
            alt="card"
            className="w-full h-full object-cover"
          />

          {/* Center Text */}
          <div className="absolute inset-0 flex justify-center items-center text-gray-200 bg-black/40 tracking-normal">
            <p className="p-4">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet suscipit veniam alias velit, at explicabo! {index + 1}
            </p>
          </div>

          {/* Bottom Button */}
          <div className="absolute bottom-0 w-full p-4 flex flex-row items-center ">
            <button className="bg-blue-600 px-3 py-1 rounded hover:bg-blue-700 text-white mx-.3">
              Read More
            </button>
            <button className="bg-blue-600 px-3 py-2 flex items-center h-4 rounded-full hover:bg-blue-700 text-white" ><MoveRight size={16} strokeWidth={1.75} /></button>
          </div>

        </div>
      ))}

    </div>
  );
};
export default Right_sider;