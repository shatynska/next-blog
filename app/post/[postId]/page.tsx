"use client";

import { useGetPost } from "@/hooks/use-get-post";

type Properties = {
  params: { postId: number };
};

export default function Post({ params: { postId } }: Properties) {
  const { post, isLoading } = useGetPost({ postId });

  if (isLoading) return <p>Loading...</p>;
  if (!post) return <p>No post</p>;

  return (
    <section className="max-w-[36rem]">
      <h1 className="text-xl font-semibold"> {post.title}</h1>
      <p className="pt-12">{post.body}</p>
    </section>
  );
}
