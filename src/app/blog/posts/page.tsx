import React from "react";
import { posts } from "@/app/lib/placeholder-data";
import Post from "@/app/ui/components/posts/Post";

const Posts = () => {
  return (
    <>
      <div>Posts</div>

      {posts.map((post) => (
        <Post key={post.id} {...post} />
      ))}
    </>
  );
};

export default Posts;
