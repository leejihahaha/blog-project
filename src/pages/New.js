import React, { useEffect, useState } from "react";
import { Button } from "../components/Button";
import { useNavigate, useParams } from "react-router-dom";
import { uploadImage } from "../api/uploader";
import { addPost, updatePost } from "../api/firebase";

// const DEFAULT_IMAGE_URL = "기본 이미지 URL을 여기에 입력하세요";

export default function New({ isEdit, originData }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [file, setFile] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (isEdit) {
      setTitle(originData.title);
      setContent(originData.content);
      setFile(originData.image);
    }
  }, [isEdit, originData]);

  const onSubmit = (e) => {
    e.preventDefault();
    setIsUploading(true);
    // 이미지 파일이 선택되었는지 확인
    if (file) {
      //사진을 클라우드에 업로드하고 URL 획득
      uploadImage(file)
        .then((url) => {
          // Firebase에 새 사진 파일 추가
          if (isEdit) {
            // 수정 모드일 때는 기존 포스트 업데이트
            updatePost(id, title, content, url).then(() => {
              navigate("/", { replace: true });
            });
          } else {
            addPost(id, title, content, url).then(() => {
              navigate("/", { replace: true });
            });
          }
        })
        .finally(() => setIsUploading(false));
    } else {
      //  수정 모드에서 이미지를 변경하지 않은 경우, 기존 이미지를 계속 사용
      if (isEdit) {
        updatePost(id, title, content, originData.image || "").then(() => {
          navigate("/", { replace: true });
        });
      } else {
        addPost(id, title, content, "").then(() => {
          navigate("/", { replace: true });
        });
      }
    }
  };

  //파일선택시
  const onChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "file") {
      setFile(files && files[0]);
      return;
    }

    if (name === "title") {
      setTitle(value);
    } else if (name === "content") {
      setContent(value);
    }
  };

  return (
    <section className="w-full py-8 dark:text-gray-100 dark:bg-slate-800 duration-100">
      <form onSubmit={onSubmit} className="max-w-sm  mx-auto">
        <div className="backdrop-blur-sm  flex justify-end md:justify-center mb-16 p-4 fixed top-[73px] right-[20px] w-full md:right-1 z-5">
          <Button
            text={isEdit ? "수정완료" : isUploading ? "게시중..." : "제출"}
            color={"blue"}
            disabled={isUploading}
          />
        </div>
        <div className="mt-40">
          {file ? ( // isEdit가 false인 경우에만 새로운 파일 선택 입력란 아래에 미리 보여줌
            <img
              className="w-96 mx-auto mt-10 md:mt-40"
              src={typeof file === "string" ? file : URL.createObjectURL(file)}
              alt="local file"
            />
          ) : (
            isEdit &&
            originData && ( // isEdit가 true이고 이전 데이터가 있는 경우에만 이전 이미지 데이터를 보여줌
              <img
                className="w-96 mx-auto mt-10 md:mt-40"
                src={originData.image}
                alt="original"
              />
            )
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
            className="mb-5  dark:bg-neutral-600  block w-full min-w-0 flex-auto rounded border border-solid border-gray-300 bg-clip-padding px-3 py-[0.32rem] text-base font-normal transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600  dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary"
            type="file"
            accept="image/*"
            name="file"
            onChange={onChange}
            {...(!isEdit && { required: true })}
          />
        </div>

        <div className="mb-10">
          <label htmlFor="title" className="block mb-1 text-lg font-medium">
            제목
          </label>
          <input
            className="rounded-md border  dark:text-black border-gray-400 w-full p-2.5"
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
            className="resize-none  dark:text-black h-96 md:h-96 rounded-md border border-gray-400 w-full p-2.5"
            name="content"
            id="content"
            required
            onChange={onChange}
            value={content}
          />
        </div>
      </form>
    </section>
  );
}
