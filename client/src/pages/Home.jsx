import PostList from "../components/PostList";

export default function HomePage() {
  return (
    <>
      <div className="w-full shadow h-16 px-8 flex items-center fixed z-10 bg-white">
        <div className="uppercase font-bold text-2xl">YAPPER</div>
      </div>

      <div className="grid grid-cols-[50rem,1fr] max-w-[80rem] mx-auto h-[300vh] pt-16">
        <div className="p-4">
          <PostList />
        </div>
        <div className="p-4 ">
          <div className="shadow w-full h-48 sticky top-20">Friends List</div>
        </div>
      </div>
    </>
  );
}
