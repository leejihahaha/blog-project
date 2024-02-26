import React, { useEffect, useState } from "react";
import { Button } from "../components/Button";
import { useNavigate, useParams, useRouteError } from "react-router-dom";
import { uploadImage } from "../api/uploader";
import { addPost, database, getPost } from "../api/firebase";
import { useQuery } from "@tanstack/react-query";
import { ref, update } from "firebase/database";
import { dblClick } from "@testing-library/user-event/dist/click";

export default function New() {
  const [post, setPost] = useState({});
  const [isEdit, setIsEdit] = useState(false);
  const [file, setFile] = useState();
  const [isUploading, setIsUploading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  console.log(id);

  const onSubmit = (e) => {
    e.preventDefault();
    setIsUploading(true);
    //제품사진을 클라우디너리에 업로드하고 url을 획득
    uploadImage(file) //
      .then((url) => {
        // console.log(url);
        //firebase에 새 사진파일 추가
        addPost(post, url);
        navigate("/");
      })
      .finally(() => setIsUploading(false));
  };

  const onChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "file") {
      setFile(files && files[0]);
      return;
    }

    setPost((post) => ({ ...post, [name]: value }));
  };
  return (
    <section className="w-full mt-40 md:mt-24">
      <form onSubmit={onSubmit} className="max-w-sm  mx-auto">
        <div className="backdrop-blur-sm md:bg-white flex justify-end md:justify-center mb-16 p-4 fixed top-[73px] right-0  w-[100%] md:w-[30%] z-5">
          <Button
            text={isUploading ? "게시중..." : "제출"}
            color={"blue"}
            size={"sm"}
            disabled={isUploading}
          />
        </div>
        <div className="mt-40">
          {file && (
            <img
              className="w-96 mx-auto mt-10 md:mt-40"
              src={URL.createObjectURL(file)}
              alt="local file"
            />
          )}
        </div>
        <div>
          <label
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-5 md:mt-10"
            htmlFor="file_input"
          >
            Upload file
          </label>
          <input
            className="mb-5 block w-full min-w-0 flex-auto rounded border border-solid border-gray-300 bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary"
            type="file"
            accept="image/*"
            name="file"
            onChange={onChange}
          />
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
            value={post.title || ""}
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
            value={post.content || ""}
          />
        </div>
      </form>
    </section>
  );
}
