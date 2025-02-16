import React from "react";
import { useNavigate } from "react-router-dom";

const PostCard = React.memo(({ post }) => {
  const navigate = useNavigate();
  const { id, image, title, content, createdAt } = post;
  console.log("렌더링!");

  return (
    <li
      onClick={() => {
        navigate(`/posts/${id}`, { state: { post: post } });
      }}
      className="shadow-xl md:flex w-[80%] md:w-[40%] items-start cursor-pointer content-center mt-10 p-3 border rounded-xl border-gray-400 transition-all hover:scale-105"
    >
      <img
        className="rounded-xl w-[350px] h-[300px] md:w-[250px] md:h-[200px]"
        src={image}
        alt={title}
      />

      <div className="mt-4 md:ml-5 md:mt-0 overflow-hidden text-center md:text-start">
        <div className="mb-3 ">
          {new Date(createdAt)?.toLocaleDateString("ko", {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
          })}
        </div>
        <h3 className="font-semibold">{title}</h3>
        <p className="mt-5 font-normal">{content.slice(0, 25)}</p>
      </div>
    </li>
  );
});
export default PostCard;
