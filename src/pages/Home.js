import React from "react";
import Banner from "../components/Banner";
import Post from "../components/Post";
// import { PostStateContext } from "../App";
// import PostList from "../components/PostList";

export default function Home() {
  // const postList = useContext(PostStateContext);
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   setData(postList);
  // }, [data, postList]);

  return (
    <div className="mt-20">
      <Banner />
      <Post />
      {/* <PostList postList={data} /> */}
    </div>
  );
}
