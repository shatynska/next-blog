import { useEffect, useState } from "react";

import { siteConfig } from "@/config/site";
import { Post } from "@/types/post";

export function useGetPosts() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${siteConfig.baseApiUrl}/posts`)
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
        setLoading(false);
      });
  }, []);

  return {
    isLoading,
    posts,
  };
}
