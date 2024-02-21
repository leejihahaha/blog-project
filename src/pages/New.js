import React, { useState } from "react";
import { Button } from "../components/Button";
import { useNavigate } from "react-router-dom";

export default function New() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  //달력

  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
  };
  const onChange = () => {};
  return (
    <form onSubmit={onSubmit} className="max-w-sm md:max-w-xl mx-auto mt-10">
      <div className="flex justify-between mb-16">
        <Button
          onClick={() => navigate(-1)}
          text={"뒤로가기"}
          color={"default"}
          size={"sm"}
        />
        <Button text={"제출"} color={"blue"} size={"sm"} />
      </div>
      <div className="mb-10">
        <label htmlFor="title" className="block mb-1 text-lg font-medium">
          제목
        </label>
        <input
          className="rounded-md border border-gray-400 w-full p-2.5"
          type="text"
          name="title"
          id="title"
          required
          onChange={onChange}
          value={title}
        />
      </div>
      <div>
        <label htmlFor="content" className="block mb-1 text-lg font-medium">
          내용
        </label>
        <textarea
          className="resize-none h-96 md:h-96 rounded-md border border-gray-400 w-full p-2.5"
          name="content"
          id="content"
          required
          onChange={onChange}
          value={content}
        />
      </div>
    </form>
  );
}
