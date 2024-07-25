export default function PostCard() {
  return (
    <div className="shadow w-full py-4 bg-white rounded grid gap-2">
      <div className="flex px-4 h-20 w-full gap-2">
        <div className="h-full aspect-square bg-neutral-500 rounded-full"></div>
        <div className="">
          <p className="text-lg font-semibold">usesrname</p>
          <p>Monday, 16 Jan 2004</p>
        </div>
      </div>

      <div className="px-4 grid gap-2">
        <p className="font-semibold text-lg">
          title Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
          accusantium repellat impedit.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio
          libero veniam laudantium cum cumque ratione voluptate molestias est
          tenetur eos, quia tempore ex officiis animi numquam nemo rem modi
          voluptates ipsam doloremque assumenda eligendi nulla porro. Corrupti
          placeat atque optio!
        </p>
      </div>
      <div className="w-full bg-neutral-500 text-center text-white h-96">
        image
      </div>
      <div className=" px-4">
        <hr className="my-2" />
        <div className="grid grid-cols-3 gap-2">
          <button className="hover:bg-neutral-200 py-2 rounded transition-colors duration-100">
            Like
          </button>
          <button className="hover:bg-neutral-200 py-2 rounded transition-colors duration-100">
            Comment
          </button>
          <button className="hover:bg-neutral-200 py-2 rounded transition-colors duration-100">
            Share
          </button>
        </div>
      </div>
    </div>
  );
}
