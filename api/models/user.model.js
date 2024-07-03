import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
	{
		userName: {
			type: String,
			required: true,
			unique: true,
		},
		email: {
			type: String,
			required: true,
			unique: true,
		},
		password: {
			type: String,
			required: true,
		},
		profilePhoto: {
			type: String,
			default:
				"https://www.google.com/url?sa=i&url=https%3A%2F%2Fpngtree.com%2Ffreepng%2Fmuslim-boy-profile-photo_8973295.html&psig=AOvVaw19hwVBekkpcT85HwGOP9Vb&ust=1720002962614000&source=images&cd=vfe&opi=89978449&ved=0CA8QjRxqFwoTCKC4yL6UiIcDFQAAAAAdAAAAABAE",
		},
	},
	{ timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
