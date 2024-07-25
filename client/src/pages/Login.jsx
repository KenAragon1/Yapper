import { FaUser } from "react-icons/fa";

export default function LoginPage() {
  return (
    <>
      <div className="w-full min-h-screen grid grid-cols-[32rem,1fr]">
        <div>
          <form action="" className="p-4">
            <div className="flex items-center ">
              <label className="w-14 h-14 flex items-center justify-center bg-neutral-800 rounded-l-lg">
                <FaUser size={15} className="fill-neutral-50" />
              </label>
              <input
                type="text"
                className="box-border border border-neutral-200 bg-neutral-200 h-14 flex-grow p-2 focus:border-neutral-800 rounded-r-lg"
                placeholder="username"
              />
            </div>
          </form>
        </div>
        <div className="bg-black"></div>
      </div>
    </>
  );
}
