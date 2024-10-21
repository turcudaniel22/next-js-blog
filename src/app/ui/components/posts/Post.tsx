import Link from "next/link";
import React from "react";

export default function Component({
  id,
  title,
  content,
  date,
}: {
  id: string;
  title: string;
  content: string;
  date: string;
}) {
  return (
    <div
      key={id}
      className="border border-purple-300 rounded-md  bg-purple-800 p-4 my-4"
    >
      <Link href={`/blog/post/${id}`}>
        <h2>{title}</h2>
      </Link>
      <p className="text-black">{date}</p>
      <p>{content}</p>
    </div>
  );
}
