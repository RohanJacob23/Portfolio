import React from "react";
import blob_vector from "../images/blob_Vector.png";

function Content() {
  return (
    <div className="content relative h-5/6 pt-32 px-3 md:px-0 md:pt-52 md:pl-20">
      <img
        src={blob_vector}
        alt=""
        className="absolute z-10 md:w-[55rem] left-0 top-[4rem] min-[375px]:top-[2rem] md:top-12"
      />
      <div className="md:w-[40rem] relative z-20 ">
        <div className="content-title font-gugi text-5xl text-center md:text-start md:text-7xl w-full">
          <h1>
            Nice to meet you
            <br />
            I'm
            <span className="text-blue"> Rohan Jacob</span>
          </h1>
        </div>
      </div>
      <div className="font-itim text-white text-xl text-center md:text-start md:w-[40rem] mt-5 z-20 relative">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum,
          sapiente aliquam? Ducimus, asperiores nobis vel unde possimus
          voluptatibus adipisci ad corrupti molestiae dignissimos temporibus
          culpa illum alias explicabo facere vitae.
        </p>
      </div>
    </div>
  );
}

export default Content;
