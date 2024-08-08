interface ButtonProps extends React.HtmlHTMLAttributes<HTMLButtonElement> {
  children?: string | React.ReactNode;
}

export default function Button({ children, ...props }: ButtonProps) {
  return (
    <button className="" {...props}>
      {children}
    </button>
  );
}
