import Post from "@/app/ui/components/posts/Post";
import { connectToDB, getPosts } from "@/app/lib/data";
import { JSX } from "react";
import Link from "next/link";
import { Button } from "@/app/ui/components/button";
import { auth } from "../../../../auth.config";

export default async function Page() {
  const client = await connectToDB();
  const posts = await getPosts();
  const session = await auth();
  return (
    <>
      {client && <p className="text-green-500">Connected to database</p>}
      {session && (
        <Link href="/blog/post/insert">
          <Button className="outline outline-1  border-purple-700 text-purple-700 hover:bg-purple-700 hover:text-black my-5 py-2 px-4 rounded">
            New +
          </Button>
        </Link>
      )}

      <div>Posts</div>

      {posts?.map(
        (
          post: JSX.IntrinsicAttributes & {
            id: string;
            title: string;
            content: string;
            date: string;
          }
        ) => (
          <Post key={post.id} {...post} />
        )
      )}
    </>
  );
}
