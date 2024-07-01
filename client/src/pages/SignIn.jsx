import { Alert, Button, Label, Spinner, TextInput } from "flowbite-react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function SignIn() {
	const navigate = useNavigate();
	const [formData, setFormData] = useState({});
	const [errorMessage, setErrorMessage] = useState(null);
	const [loading, setLoading] = useState(false);
	const handleChange = (text) => {
		setFormData({ ...formData, [text.target.id]: text.target.value.trim() });
		console.log(formData);
	};
	const handleSubmit = async (e) => {
		setLoading(true);
		e.preventDefault();
		if (!formData.email || !formData.password) {
			return setErrorMessage("Fill out all the fields!");
		}
		try {
			const res = await fetch("/api/auth/signin", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(formData),
			});
			const data = res.json();
			navigate("/");
		} catch (error) {
			setErrorMessage(error);
			setLoading(false);
		}
	};
	return (
		<div className="min-h-screen mt-20 mx-2">
			<div className="flex max-w-3xl mx-auto flex-col md:flex-row md:items-center">
				{/* left Container */}
				<div className="flex-1 gap-5">
					<Link to="/" className=" font-semibold dark:text-white text-4xl">
						<span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
							Sahand's
						</span>
						Blog
					</Link>
					<p className="text-sm mt-5">
						You can sign up with your email and password.
					</p>
				</div>
				{/* Right Container */}
				<div className="flex-1">
					<form className="flex flex-col gap-4" onSubmit={handleSubmit}>
						<div>
							<Label value="Your Email" />
							<TextInput
								type="email"
								placeholder="email"
								id="email"
								onChange={handleChange}
							/>
						</div>
						<div>
							<Label value="Your Password" />
							<TextInput
								type="password"
								placeholder="Password"
								id="password"
								onChange={handleChange}
							/>
						</div>
						<Button
							gradientDuoTone="purpleToPink"
							outline
							type="submit"
							disabled={loading}
						>
							{loading ? (
								<>
									<Spinner size="sm" />
									<span className="pl-4">Loading</span>
								</>
							) : (
								"SIGN IN"
							)}
						</Button>
					</form>
					<div className="flex gap-2 text-sm mt-5">
						<span>Don't have an Account?</span>
						<Link to="/sign-up" className="text-blue-500">
							Sign Up
						</Link>
					</div>
					{errorMessage && (
						<Alert className="mt-5" color="failure">
							{errorMessage}
						</Alert>
					)}
				</div>
			</div>
		</div>
	);
}
