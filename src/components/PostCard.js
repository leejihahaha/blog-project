import React from "react";
import { useNavigate } from "react-router-dom";

export default function PostCard({
  post,
  post: { id, image, title, content, createdAt },
}) {
  const navigate = useNavigate();
  return (
    <li
      onClick={() => {
        navigate(`/posts/${id}`, { state: { post } });
      }}
      className="shadow-xl md:flex md:w-[40%] items-start cursor-pointer content-center mt-10 p-3 border rounded-xl border-gray-400 transition-all hover:scale-105"
    >
      <img
        className="rounded-xl w-[350px] h-[300px] md:w-[250px] md:h-[200px]"
        src={image}
        alt={title}
      />

      <div className="mt-4 md:ml-5 md:mt-0">
        <div className="mb-3">{createdAt}</div>
        <h3 className="font-semibold">{title}</h3>
        <p className="mt-11 font-thin line-clamp-1">{content.slice(0, 24)}</p>
      </div>
    </li>
  );
}