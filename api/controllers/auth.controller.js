import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";
import jwt from "jsonwebtoken";
export const signup = async (req, res, next) => {
	const { userName, email, password } = req.body;

	if (
		!userName ||
		!email ||
		!password ||
		userName === "" ||
		email === "" ||
		password === ""
	) {
		// return res.status(400).json({ message: "All feilds are required" });
		next(errorHandler(400, "All Feilds are required"));
	}

	const hashedPassword = bcryptjs.hashSync(password, 10);

	try {
		const newUser = new User({ userName, email, password: hashedPassword });
		await newUser.save();
		res.send("signup successful");
	} catch (error) {
		next(error);
	}
};

export const signin = async (req, res, next) => {
	const { email, password } = req.body;

	if (!email || !password || email === "" || password === "") {
		// return res.status(400).json({ message: "All feilds are required" });
		next(errorHandler(400, "All Feilds are required"));
	}

	try {
		const validUser = await User.findOne({ email });
		if (!validUser) {
			return next(errorHandler(404, "User not Found!"));
		}
		const vaildPassword = bcryptjs.compareSync(password, validUser.password);
		if (!vaildPassword) {
			return next(errorHandler(400, "Invalid Password"));
		}
		const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
		const { password: pass, ...rest } = validUser._doc;

		res
			.status(200)
			.cookie("access_token", token, {
				httpOnly: true,
			})
			.json(rest);
	} catch (error) {
		next(error);
	}
};
