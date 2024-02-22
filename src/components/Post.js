import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getPost } from "../api/firebase";
import PostCard from "./PostCard";

export default function Post() {
  const {
    isPending,
    data: posts,
    error,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: getPost,
  });

  return (
    <>
      {isPending && (
        <p className="flex font-semibold justify-center items-center pb-5">
          Loading...
        </p>
      )}
      {error && <p>{error}</p>}
      <ul className="flex flex-col items-center">
        {posts && posts.map((post) => <PostCard key={post.id} post={post} />)}
      </ul>
    </>
  );
}
