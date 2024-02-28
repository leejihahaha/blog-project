import React from "react";
import Banner from "../components/Banner";
import Post from "../components/Post";

export default function Home() {
  return (
    <div className=" dark:text-gray-100 dark:bg-slate-800 duration-100">
      <Banner />
      <Post />
    </div>
  );
}
