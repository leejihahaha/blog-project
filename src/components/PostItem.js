import React from "react";
import { Button } from "../components/Button";
import { useNavigate } from "react-router-dom";

export default function PostItem({ id, title, content, date }) {
  const strDate = new Date(parseInt(date)).toLocaleDateString();
  const navigate = useNavigate();
  const goDetail = () => {
    navigate(`/posts/${id}`);
  };
  const goEdit = () => {
    navigate(`/edit/${id}`);
  };
  return (
    <div className="cursor-pointer content-center mt-5 p-10 border rounded-xl border-gray-400">
      <div onClick={goDetail}>
        <div className="mb-4 text-gray-400">{strDate}</div>
        <h3 className="font-semibold">{title}</h3>
        <div className="mt-2  text-gray-400">{content.slice(0, 25)}</div>
      </div>
      <div onClick={goEdit} className="flex justify-end ">
        <Button text={"수정"} />
      </div>
    </div>
  );
}
