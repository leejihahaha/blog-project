import React from "react";

export default function Banner() {
  return (
    <section className="h-96 pt-20 relative flex justify-center">
      <img
        alt="pic1"
        src="https://images.unsplash.com/photo-1530250418330-cb2c35da5277?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        className="w-[800px] h-full  opacity-80 rounded-xl rounded-br-[88px]"
      />
      {/* <div className="w-[800px] h-full  bg-cover bg-banner opacity-80 rounded-xl rounded-br-[88px]"></div> */}
      <div className="absolute w-full top-40 text-center drop-shadow-2xl">
        <h2 className="text-5xl mr-6 md:text-6xl  text-gray-500">My Record</h2>
        <h2 className="text-xl mr-6 md:text-xl mt-10  text-gray-500">
          One picture a day
        </h2>
      </div>
    </section>
  );
}
