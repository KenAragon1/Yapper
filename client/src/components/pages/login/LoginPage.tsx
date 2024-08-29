import { Link } from "react-router-dom";
import AuthLayout from "../../layouts/AuthLayout";
import Form from "./Form";

export default function LoginPage() {
  return (
    <AuthLayout title="Login">
      <Form />
      <p>
        Don't have an account?{" "}
        <Link to={"/register"} className="underline">
          Register
        </Link>
      </p>
    </AuthLayout>
  );
}
