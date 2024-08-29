import MainLayout from "../../layouts/MainLayout";
import PostList from "../../organism/post/PostList";

export function Home() {
  return (
    <MainLayout>
      <div className="container mx-auto">
        <div className="">
          <PostList />
        </div>
        <div className=""></div>
      </div>
    </MainLayout>
  );
}
