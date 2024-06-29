"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

interface Post {
  id: string;
  title: string;
  updatedAt: string;
  authorId: string;
}

export default function PostsList() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await fetch(
          "https://article-post.vercel.app/api/posts/all"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch");
        }
        const data: Post[] = await response.json();
        setPosts(data);
        setLoading(false);
      } catch (error) {
        setError(error as Error);
        setLoading(false);
      }
    }

    fetchPosts();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Failed to load posts</p>;

  const displayedPosts = posts.slice(0, 3);

  return (
    <div className="max-w-[50rem]">
      {displayedPosts.map((post) => (
        <div key={post.id}>
          <Link
            href={`/post/${post.id}`}
            className="truncate underline text-blue-500 hover:text-blue-800"
          >
            {post.title}
          </Link>
          <p className="text-muted-foreground text-sm mt-2">
            {new Date(post.updatedAt).toLocaleDateString()}
          </p>
          <hr className="my-2" />
        </div>
      ))}
      {posts.length > 3 && (
        <div className="text-center">
          <Link
            href="https://article-post.vercel.app/post/postList"
            className="underline text-blue-500 hover:text-blue-800"
          >
            記事一覧ページへ
          </Link>
        </div>
      )}
    </div>
  );
}
