interface AuthPageProps {
  children: React.ReactNode;
  title: string;
}

export default function AuthLayout({ children, title }: AuthPageProps) {
  return (
    <div className="h-screen bg-neutral-100 pt-20">
      <div className="w-[40rem] p-4 shadow bg-white mx-auto">
        <p className="text-xl font-semibold mb-2">{title}</p>
        {children}
      </div>
    </div>
  );
}
