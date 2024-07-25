import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const authLogin = async (req, res) => {
  const userDB = [
    {
      email: "kenny@email.com",
      password: await bcrypt.hash("password", 10),
      role: "admin",
    },
  ];

  const { email, password } = req.body;

  if (!email || !password)
    return res.status(401).send("email and password required");

  const user = userDB.find((user) => user.email == email);

  if (!user) return res.status(401).send("user not found");

  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) return res.status(401).send("password incorrect");

  const accessToken = generateAccessToken(user);

  res.json({ accessToken: accessToken });
};

export const authRegister = (req, res) => {
  const { email, password } = req.body;

  if (!email || !password)
    return res.status(401).send("email and password required");

  res.send("register successfull");
};

function generateAccessToken(user) {
  return jwt.sign(
    { email: user.email, role: user.role },
    process.env.JWT_SECRET_KEY,
    { expiresIn: "30m" }
  );
}
