import React, { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export default function Carousel({ slides }) {
  let [current, setCurrent] = useState(0);

  let previousSlide = () => {
    if (current === 0) setCurrent(slides.length - 1);
    else setCurrent(current - 1);
  };

  let nextSlide = () => {
    if (current === slides.length - 1) setCurrent(0);
    else setCurrent(current + 1);
  };

  return (
    <div className=" overflow-hidden relative w-full h-full">
      <div
        className={`flex transition ease-out duration-400`}
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((i) => {
          return <img key={i} src={i} alt="" />;
        })}
      </div>

      <div className="absolute top-0 h-full w-full justify-between items-center flex text-white px-1 text-3xl">
        <button onClick={previousSlide}>
          <IoIosArrowBack />
        </button>
        <button onClick={nextSlide}>
          <IoIosArrowForward />
        </button>
      </div>
    </div>
  );
}
