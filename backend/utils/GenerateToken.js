import jwt from "jsonwebtoken";

const generateTokenAndSetCookie = async (userId, res) => {
  const token = jwt.sign({ userId }, process.env.TOKEN, { expiresIn: "24h" });

  res.cookie("jwt", token, {
    maxage: 24 * 60 * 60 * 1000,
    httponly: true,
    sameSite: "strict",
  });
};

export default generateTokenAndSetCookie;
