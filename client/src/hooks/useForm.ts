import { useState } from "react";

export default function useForm<T>(initialValue: T) {
  const [form, setForm] = useState(initialValue);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  return { form, handleChange };
}
