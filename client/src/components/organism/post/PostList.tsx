import Post, { PostProps } from "./Post";

export default function PostList() {
  const posts: Array<PostProps> = [
    {
      id: 1,
      title: "hello world",
      body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur ullam blanditiis, voluptas perferendis ipsam qui ratione!",
    },
    {
      id: 2,
      title: "hello world",
      body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur ullam blanditiis, voluptas perferendis ipsam qui ratione!",
    },
    {
      id: 3,
      title: "hello world",
      body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur ullam blanditiis, voluptas perferendis ipsam qui ratione!",
    },
    {
      id: 4,
      title: "hello world",
      body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur ullam blanditiis, voluptas perferendis ipsam qui ratione!",
    },
    {
      id: 5,
      title: "hello world",
      body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur ullam blanditiis, voluptas perferendis ipsam qui ratione!",
    },
  ];

  return (
    <div className="grid gap-4">
      {posts.map((post) => (
        <Post key={post.id} {...post} />
      ))}{" "}
    </div>
  );
}
