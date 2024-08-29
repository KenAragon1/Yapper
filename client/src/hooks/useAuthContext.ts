import { useContext } from "react";
import { AuthContext } from "../context/authContext";

export default function useAuthContext() {
  const user = useContext(AuthContext);

  if (user === undefined)
    throw new Error("useAuthContext must be used with a AuthContext");

  return user;
}
