"use client";

import useSWR from "swr";
import Link from "next/link";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function PostsList() {
  const { data: posts, error } = useSWR(
    "https://article-post.vercel.app/api/posts/all",
    fetcher
  );

  if (error) return <p>Failed to load posts</p>;
  if (!posts) return <p>Loading...</p>;

  const displayedPosts = posts.slice(0, 3);
  console.log(posts);

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
            href="/post/postList"
            className="underline text-blue-500 hover:text-blue-800"
          >
            記事一覧ページへ
          </Link>
        </div>
      )}
    </div>
  );
}
