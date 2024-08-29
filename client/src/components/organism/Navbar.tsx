import Input from "../ui/Input";

export default function Navbar() {
  return (
    <header className="bg-white shadow py-2 px-4 mb-4 fixed w-full">
      <div className="flex items-center justify-between">
        <div className="text-xl font-bold uppercase italic">Yapper</div>
        <div>
          <Input
            className="rounded-lg px-4 w-[20rem]"
            placeholder="Search..."
          />
        </div>
        <div>Menus</div>
      </div>
    </header>
  );
}
