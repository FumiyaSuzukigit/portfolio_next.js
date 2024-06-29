import Link from "next/link";

interface Post {
  id: string;
  title: string;
  updatedAt: string;
  authorId: string;
}

async function fetchPosts() {
  const response = await fetch(
    "https://article-post.vercel.app/api/posts/all",
    {
      cache: "no-store",
    }
  );
  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }
  return response.json();
}

export default async function PostsList() {
  const posts: Post[] = await fetchPosts();

  const displayedPosts = posts.slice(0, 3);

  return (
    <div className="max-w-[50rem]">
      {displayedPosts.map((post) => (
        <div key={post.id}>
          <Link
            href={`https://article-post.vercel.app/post/${post.id}`}
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
