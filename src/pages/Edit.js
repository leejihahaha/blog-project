import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getPost } from "../api/firebase";
import New from "./New";

export default function Edit() {
  // const navigate = useNavigate();
  // const [originData, setOriginData] = useState();
  // const { id } = useParams();
  // const { data: posts } = useQuery({
  //   queryKey: ["posts"],
  //   queryFn: getPost,
  // });
  // console.log(id);
  // console.log(posts);

  //수정하려는 포스트 찾기!
  // useEffect(() => {
  //   const targetPost = posts.find((it) => parseInt(it.id) === parseInt(id));
  //   // console.log(targetPost);

  //   if (targetPost) {
  //     setOriginData(targetPost);
  //   } else {
  //     navigate("/", { replace: true });
  //   }
  // }, [id, posts]);

  return <div>{/* <New isEdit={true} /> */}</div>;
}
