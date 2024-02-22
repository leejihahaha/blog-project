import React from "react";
import { useLocation } from "react-router-dom";
import { Button } from "../components/Button";

export default function PostsDetail() {
  const {
    state: {
      post: { id, image, title, content, createdAt },
    },
  } = useLocation();

  return (
    <section className="mt-28">
      <div className="flex flex-col items-center px-[20px] md:px-[35%]">
        <img
          className="rounded-xl md:w-auto md:h-auto"
          src={image}
          alt={title}
        />

        <div className="mt-7">
          <Button text={"삭제"} color={"red"} />
          <Button text={"수정"} />
        </div>
        <p className="mt-10">{createdAt}</p>

        <h2 className="mt-2">{title}</h2>
        <p className="mt-6 font-light text-gray-500">{content}</p>
      </div>
    </section>
  );
}
