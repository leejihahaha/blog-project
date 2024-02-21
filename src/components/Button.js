import React from "react";

export const colors = {
  blue: "bg-sky-950",
  red: "bg-red-400",
  default: "bg-gray-500",
};

const contentSizes = {
  sm: "w-[20%]",
  md: "w-[50%]",
  lg: "w-full",
};

export function Button({ text, color, size, onClick }) {
  let textColor = colors[color];
  let contentSize = contentSizes[size];
  return (
    <button
      onClick={onClick}
      className={`bg-gray-500 text-sm text-white rounded-md px-3 py-2 ml-2 whitespace-nowrap ${textColor} ${contentSize}`}
    >
      {text}
    </button>
  );
}

// <Button color={"blue"} text={"완료"} onClick={() => alert("버튼클릭")} />
// <Button color={"red"} text={"삭제"} onClick={() => alert("버튼클릭")} />
// <Button
//   color={"default"}
//   text={"뒤로가기"}
//   onClick={() => alert("버튼클릭")}
// />
