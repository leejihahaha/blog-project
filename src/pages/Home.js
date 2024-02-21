import React, { useContext, useEffect, useState } from "react";
import Banner from "../components/Banner";
import { PostStateContext } from "../App";
import PostList from "../components/PostList";

export default function Home() {
  const postList = useContext(PostStateContext);
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(postList);
  }, [data, postList]);

  return (
    <div>
      <Banner />
      <PostList postList={data} />
    </div>
  );
}
