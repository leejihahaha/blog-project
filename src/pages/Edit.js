import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";
import { getPostId } from "../api/firebase";
import New from "./New";

export default function Edit() {
  const { id } = useParams();

  const {
    data: originData,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["posts", id],
    queryFn: () => getPostId(id),
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading data</div>;

  return (
    <div>{originData && <New isEdit={true} originData={originData} />}</div>
  );
}
