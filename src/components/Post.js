import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getPost } from "../api/firebase";
import PostCard from "./PostCard";

const sortOptionList = [
  { value: "latest", name: "최신순" },
  { value: "oldest", name: "오래된 순" },
];

const ControlMenu = React.memo(({ value, onChange, optionList }) => {
  return (
    <select
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-[30%] md:w-[20%]"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      {optionList.map((it, idx) => (
        <option key={idx} value={it.value}>
          {it.name}
        </option>
      ))}
    </select>
  );
});

export default function Post() {
  const [sortType, setSortType] = useState("latest");

  const {
    isPending,
    data: posts,
    error,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: getPost,
  });

  // useEffect(() => {
  //   console.log(posts);
  // }, [posts]);

  const getProcessedPostList = () => {
    const compare = (a, b) => {
      if (sortType === "latest") {
        return parseInt(b.postNumber) - parseInt(a.postNumber);
      } else {
        return parseInt(a.postNumber) - parseInt(b.postNumber);
      }
    };
    const copyList = JSON.parse(JSON.stringify(posts));
    const sortedList = copyList.sort(compare);
    return sortedList;
  };

  return (
    <>
      {isPending && (
        <p className="flex font-semibold justify-center items-center pb-5">
          Loading...
        </p>
      )}
      {error && <p>{error}</p>}
      <ControlMenu
        value={sortType}
        onChange={setSortType}
        optionList={sortOptionList}
      />
      <ul className="flex flex-col items-center">
        {posts &&
          getProcessedPostList().map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
      </ul>
    </>
  );
}
