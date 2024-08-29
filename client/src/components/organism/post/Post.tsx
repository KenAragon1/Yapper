import LikeButton from "../../molecules/LikeButton/LikeButton";

export interface PostProps {
  id: number;
  title: string;
  body: string;
}

export default function Post({ title, body }: PostProps) {
  return (
    <div className="rounded shadow p-4 bg-white w-[40rem] grid gap-2 cursor-pointer">
      <p className="text-xl font-semibold">{title}</p>
      <p className="text-neutral-600 line-clamp-2">{body}</p>
      <div className="h-40 bg-neutral-500"></div>
      <div>
        <LikeButton />
      </div>
    </div>
  );
}
