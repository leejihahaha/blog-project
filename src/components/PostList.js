import React, { useState } from "react";
import PostItem from "./PostItem";

const sortOptionList = [
  { value: "latest", name: "최신순" },
  { value: "oldest", name: "오래된 순" },
];
//정렬기능
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

export default function PostList({ postList }) {
  const [sortType, setSortType] = useState("latest");

  const getProcessedPostList = () => {
    const compare = (a, b) => {
      if (sortType === "latest") {
        return parseInt(b.date) - parseInt(a.date);
      } else {
        return parseInt(a.date) - parseInt(b.date);
      }
    };
    const copyList = JSON.parse(JSON.stringify(postList));
    const sortedList = copyList.sort(compare);
    return sortedList;
  };
  return (
    <div className="px-[5%] md:px-[20%]">
      <ControlMenu
        value={sortType}
        onChange={setSortType}
        optionList={sortOptionList}
      />
      {getProcessedPostList().map((it) => (
        <PostItem key={it.id} {...it} />
      ))}
    </div>
  );
}

PostList.defaultProps = {
  postList: [],
};
