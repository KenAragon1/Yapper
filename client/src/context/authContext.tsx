import { createContext, ReactNode, useState } from "react";

interface UserProps {
  token: string;
  email: string;
  username: string;
}

interface AuthContextProps {
  login: () => void;
  logout: () => void;
  user: UserProps | null;
}

export const AuthContext = createContext<AuthContextProps | undefined>(
  undefined
);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<UserProps | null>(null);

  function login() {
    setUser({
      token: "token",
      email: "token",
      username: "token",
    });
  }

  function logout() {
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
