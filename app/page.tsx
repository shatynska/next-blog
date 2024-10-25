"use client";
import { Button } from "@nextui-org/button";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import { useRouter } from "next/navigation";

import { useGetPosts } from "@/hooks/use-get-posts";
export default function Home() {
  const router = useRouter();

  const { posts, isLoading } = useGetPosts();

  if (isLoading) return <p>Loading...</p>;
  if (!posts) return <p>No posts</p>;

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
      {posts.map((post) => (
        <Card key={post.id}>
          <CardHeader>
            <span className="line-clamp-1 text-lg font-semibold">
              {post.title}
            </span>
          </CardHeader>
          <CardBody className="text-sm">
            <span className=" line-clamp-2">{post.body}</span>
          </CardBody>
          <CardFooter className="flex w-full justify-end">
            <Button
              size="sm"
              type="button"
              onClick={() => router.push(`post/${post.id}`)}
            >
              details
            </Button>
          </CardFooter>
        </Card>
      ))}
    </section>
  );
}
