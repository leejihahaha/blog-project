import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { Button } from "../components/Button";

export default function PostsDetail() {
  const {
    state: {
      post: { id, image, title, content, createdAt },
    },
  } = useLocation();

  // const handleDelete = async () => {
  //   const confirm = window.confirm("해당 게시글을 삭제하시겠습니까?");
  //   if (confirm && post && post.id) {
  //     await deleteDoc(doc(db, "posts", post.id));
  //     toast.success("게시글을 삭제했습니다.");
  //     Navigate("/");
  //   }
  // };

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
        <p className="mt-10">
          {new Date(createdAt)?.toLocaleDateString("ko", {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
          })}
        </p>

        <h2 className="mt-2">{title}</h2>
        <p className="mt-6 font-light text-gray-500">{content}</p>
      </div>
    </section>
  );
}
