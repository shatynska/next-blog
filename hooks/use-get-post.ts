import { useEffect, useState } from "react";

import { siteConfig } from "@/config/site";
import { Post } from "@/types/post";

type Properties = {
  postId: number;
};

export function useGetPost({ postId }: Properties) {
  const [post, setPost] = useState<Post | null>(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${siteConfig.baseApiUrl}/posts/${postId}`)
      .then((res) => res.json())
      .then((data) => {
        setPost(data);
        setLoading(false);
      });
  }, []);

  return {
    isLoading,
    post,
  };
}
