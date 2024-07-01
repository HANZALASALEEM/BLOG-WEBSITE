import { Footer } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";
import { BsFacebook, BsInstagram, BsGithub, BsDribbble } from "react-icons/bs";
export default function FooterCom() {
	return (
		<Footer container className="border border-t-8 border-teal-500">
			<div className="w-full mx-auto max-w-7xl">
				<div className="grid w-full sm:flex md:grid-cols-1 justify-between">
					<div className="mt-5">
						<Link
							to="/"
							className="self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white"
						>
							<span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
								Sahand's
							</span>
							Blog
						</Link>
					</div>
					<div className="grid grid-cols-2 gap-3 sm:mt-4 sm:grid-cols-3 sm:gap-6">
						<div>
							<Footer.Title title="About" />
							<Footer.LinkGroup col>
								<Footer.Link
									href="/about"
									target="_blank"
									rel="noopener noreferrer"
								>
									About Us
								</Footer.Link>
								<Footer.Link
									href="/projects"
									target="_blank"
									rel="noopener noreferrer"
								>
									Our Projects
								</Footer.Link>
							</Footer.LinkGroup>
						</div>
						<div>
							<Footer.Title title="About" />
							<Footer.LinkGroup col>
								<Footer.Link
									href="/about"
									target="_blank"
									rel="noopener noreferrer"
								>
									About Us
								</Footer.Link>
								<Footer.Link
									href="/projects"
									target="_blank"
									rel="noopener noreferrer"
								>
									Our Projects
								</Footer.Link>
							</Footer.LinkGroup>
						</div>
						<div>
							<Footer.Title title="About" />
							<Footer.LinkGroup col>
								<Footer.Link
									href="/about"
									target="_blank"
									rel="noopener noreferrer"
								>
									About Us
								</Footer.Link>
								<Footer.Link
									href="/projects"
									target="_blank"
									rel="noopener noreferrer"
								>
									Our Projects
								</Footer.Link>
							</Footer.LinkGroup>
						</div>
					</div>
				</div>
				<Footer.Divider />
				<div className="w-full sm:flex sm:items-center sm:justify-between">
					<Footer.Copyright
						href="#"
						by="Hanzala Saleem"
						year={new Date().getFullYear()}
					/>
					<div className="flex gap-6 mt-5 sm:mt-0 sm:justify-center">
						<Footer.Icon href="#" icon={BsFacebook} />
						<Footer.Icon href="#" icon={BsInstagram} />
						<Footer.Icon href="#" icon={BsGithub} />
						<Footer.Icon href="#" icon={BsDribbble} />
					</div>
				</div>
			</div>
		</Footer>
	);
}
