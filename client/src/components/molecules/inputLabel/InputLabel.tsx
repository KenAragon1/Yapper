import Input, { InputProps } from "../../ui/Input";

interface InputLabelProps extends InputProps {
  label: string;
}
export default function InputLabel({ label, ...props }: InputLabelProps) {
  return (
    <div className="grid">
      <label className="text-neutral-600">{label}</label>
      <Input {...props} />
    </div>
  );
}
