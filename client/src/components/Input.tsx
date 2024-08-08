interface InputProps extends React.HtmlHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export default function Input({ label, ...props }: InputProps) {
  return (
    <div className="grid">
      {label && <label>{label}</label>}
      <input {...props} className="border border-red-500 text-sm p-2" />
    </div>
  );
}
