import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "../components/Button";
import { removePost } from "../api/firebase";

export default function PostsDetail() {
  const navigate = useNavigate();
  const {
    state: {
      post: { id, image, title, content, createdAt },
    },
  } = useLocation();

  console.log(`${id}번 포스트입니다`);

  //edit페이지로 넘어가기
  const handleGoEdit = () => {
    navigate(`/posts/edit/${id}`);
  };

  const handleDelete = () => {
    if (window.confirm("정말 삭제하시겠습니까")) {
      removePost(id);
      navigate("/", { replace: true });
    }
  };

  return (
    <section className="mt-28 px-10 md:px-[20%]">
      <div className="flex flex-col items-center text-center  px-[20px] md:px-[35%]">
        <img
          className="rounded-xl md:w-auto md:h-auto"
          src={image}
          alt={title}
        />

        <div className="mt-7">
          <Button text={"삭제"} color={"red"} onClick={handleDelete} />
          <Button text={"수정"} onClick={handleGoEdit} />
        </div>
        <p className="mt-10">
          {new Date(createdAt)?.toLocaleDateString("ko", {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
          })}
        </p>

        <h2 className="mt-2">{title}</h2>
        <div className="w-[120%] md:w-[200%]">
          <p className="mt-6 font-light text-gray-500 mb-10">{content}</p>
        </div>
      </div>
    </section>
  );
}
