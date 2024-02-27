import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPostId } from "../api/firebase";
import New from "./New";

export default function Edit() {
  const { id } = useParams();
  const [originData, setOriginData] = useState();

  const { data: posts } = useQuery({
    queryKey: ["posts", id],
    queryFn: () => getPostId(id),
  });

  useEffect(() => {
    if (posts) {
      setOriginData(posts);
    }
  }, [id, posts]);

  return (
    <div>{originData && <New isEdit={true} originData={originData} />}</div>
  );
}
