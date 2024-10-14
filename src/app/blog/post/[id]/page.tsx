import React from "react";
import { posts } from "@/app/lib/placeholder-data"; // Ensure this exports the posts array
import Post from "@/app/ui/components/posts/Post";

export default function Page({ params }: { params: { id: string } }) {
  // Find the post by the ID from the URL parameters
  const post = posts.find((post) => post.id === params.id);

  // If the post is not found, you might want to show a 404 page or a message
  if (!post) {
    return <div>Post not found</div>; // You can replace this with a 404 page
  }

  return (
    <>
      <div>Post</div>
      <Post {...post} /> {/* Spread the post properties */}
    </>
  );
}
