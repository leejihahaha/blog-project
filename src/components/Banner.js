import React from "react";
import bannerImage from "../assets/small.webp";

export default function Banner() {
  return (
    <section className="h-96 pt-20 relative flex justify-center">
      <img
        alt="pic1"
        src={bannerImage}
        className="w-[800px] h-full opacity-80 rounded-xl rounded-br-[88px]"
      />
      <div className="absolute w-full top-40 text-center drop-shadow-2xl">
        {/* <h2 className="text-5xl mr-6 md:text-6xl underline decoration-sky-500">
          My Record
        </h2> */}
        <h2 className="text-5xl mr-6 md:text-3xl mt-10 text-white">
          One Day, One photo
        </h2>
      </div>
    </section>
  );
}
