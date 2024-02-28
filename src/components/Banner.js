import React from "react";

export default function Banner() {
  return (
    <section className="h-96 pt-20 relative flex justify-center">
      <div className="w-[95%] h-full  bg-cover bg-banner opacity-80 rounded-xl rounded-br-[88px]"></div>
      <div className="absolute w-full top-40 text-center text-gray-50 drop-shadow-2xl">
        <h2 className="text-5xl mr-6 md:text-6xl">Hello! My Blog</h2>
        <h2 className="text-xl mr-6 md:text-xl mt-6">One picture a day</h2>
      </div>
    </section>
  );
}
