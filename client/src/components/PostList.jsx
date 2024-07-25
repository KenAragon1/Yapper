import PostCard from "./PostCard";

export default function PostList() {
  const posts = [1, 2, 3, 4, 5, 6];

  return (
    <div className="grid gap-2">
      {posts.map((post, index) => (
        <PostCard key={index + 1} />
      ))}
    </div>
  );
}
