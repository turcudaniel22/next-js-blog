import React from "react";
import { posts } from "@/app/lib/placeholder-data";
import Component from "@/app/ui/components/posts/Post";

const Posts = () => {
  return (
    <>
      <div>Posts</div>

      {posts.map((post) => (
        <Component
          id={post.id}
          title={post.title}
          content={post.content}
          date={post.date}
        />
      ))}
    </>
  );
};

export default Posts;
