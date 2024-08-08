import Button from "../../components/Button";
import Input from "../../components/Input";

export function Login() {
  return (
    <div>
      <p>Login</p>
      <form action="">
        <Input label="Email" />
        <Input label="Password" />

        <Button>login</Button>
      </form>
    </div>
  );
}
