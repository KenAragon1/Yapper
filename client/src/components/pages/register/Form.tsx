import { FormEvent } from "react";

import Button from "../../ui/Button";
import useForm from "../../../hooks/useForm";
import InputLabel from "../../molecules/inputLabel/InputLabel";

export default function Form() {
  const { form, handleChange } = useForm({
    email: "",
    username: "",
    password: "",
  });

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    console.log(form);
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="grid gap-2">
        <InputLabel
          label="Email"
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <InputLabel
          label="Username"
          type="text"
          name="username"
          value={form.username}
          onChange={handleChange}
          required
        />
        <InputLabel
          label="Password"
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          required
        />
        <Button>Register</Button>
      </div>
    </form>
  );
}
