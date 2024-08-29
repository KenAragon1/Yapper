interface ButtonProps extends React.HtmlHTMLAttributes<HTMLButtonElement> {
  children?: string | React.ReactNode;
  className?: string;
  variant?: "primary" | "ghost";
}

export default function Button({
  children,
  className,
  variant = "primary",
  ...props
}: ButtonProps) {
  const buttonVariants = {
    primary: "bg-slate-900 hover:bg-slate-700",
    ghost: "text-black hover:bg-neutral-100",
  };
  return (
    <button
      className={`flex justify-center items-center gap-1 text-white px-4 py-2 ${buttonVariants[variant]} transition-colors duration-150 focus-within:border-white ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
