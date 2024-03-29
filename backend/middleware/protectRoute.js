import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

async function protectRoute(req, res, next) {
  try {
    const token = req.cookies.jwt;
    if (!token) {
      return res.status(401).json({ error: "Unauthorized no token provided" });
    }

    const decoded = jwt.verify(token, process.env.TOKEN);
    if (!decoded) {
      return res.status(401).json({ error: "Unauthorized Invalid Token" });
    }
    const user = await User.findById(decoded.userId).select("-password");
    if (!user) {
      return res.status(404).json({ error: "Unable to find the user" });
    }
    req.user = user;
    next();
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Error in middleware" });
  }
}

export default protectRoute;
