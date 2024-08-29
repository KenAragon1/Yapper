import { twMerge } from "tailwind-merge";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  variant?: "primary" | "error";
  placeholder?: string;
}

export default function Input({
  className,
  variant = "primary",
  ...props
}: InputProps) {
  const inputVariant = {
    primary: "",
    error: "border-red-500",
  };

  return (
    <input
      {...props}
      className={twMerge(
        `border outline-none border-neutral-200 p-2 rounded-sm ${inputVariant[variant]}`,
        `${className}`
      )}
    />
  );
}
