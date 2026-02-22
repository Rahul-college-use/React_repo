import React from "react";
import Top from "./top";
import Bottom from "./bottom";

const Left_sider = () => {
    return (

      <div className="h-screen w-[30%] md:w-[30%] p-10 flex flex-col justify-between ">
         <Top/>
         <Bottom/>
      </div>

    );
};

export default Left_sider;