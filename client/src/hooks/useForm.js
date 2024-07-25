import { useState } from "react";

export function useForm(initialData) {
  const [data, setData] = useState(initialData);

  function handleChange(e) {
    const { name, value } = e.target;
    console.log(data);
    setData((prev) => ({ ...prev, [name]: value }));
  }

  return { data, handleChange };
}
