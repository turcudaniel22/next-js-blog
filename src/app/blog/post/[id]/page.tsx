import { notFound } from "next/navigation";
import React from "react";
// import { posts } from "@/app/lib/placeholder-data"; // Ensure this exports the posts array
import Post from "@/app/ui/components/posts/Post";
import { getPosts } from "@/app/lib/data";

export default async function Page({ params }: { params: { id: string } }) {
  // Find the post by the ID from the URL parameters
  const posts = await getPosts();
  const post = posts?.find((post: { id: string }) => post.id === params.id);

  // If the post is not found, you might want to show a 404 page or a message
  if (!post) {
    notFound(); // You can replace this with a 404 page
  }

  return (
    <>
      <Post {...post} /> {/* Spread the post properties */}
    </>
  );
}
