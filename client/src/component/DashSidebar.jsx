import { Sidebar } from "flowbite-react";
import React, { useState, useEffect } from "react";
import { HiArrowSmRight, HiUser } from "react-icons/hi";
import { Link, useLocation } from "react-router-dom";
export default function DashSidebar() {
	const location = useLocation();
	const [tab, setTab] = useState("");
	useEffect(() => {
		const urlParams = new URLSearchParams(location.search);
		const tabFormUrl = urlParams.get("tab");
		if (tabFormUrl) {
			setTab(tabFormUrl);
		}
	}, [location.search]);
	return (
		<Sidebar>
			<Sidebar.Items>
				<Sidebar.ItemGroup>
					<Link to="/dashboard?tab=profile">
						<Sidebar.Item
							active={tab === "profile"}
							icon={HiUser}
							label={"User"}
							labelColor="dark"
						>
							Profile
						</Sidebar.Item>
					</Link>
					<Sidebar.Item icon={HiArrowSmRight} className="cursor-pointer">
						Sign Out
					</Sidebar.Item>
				</Sidebar.ItemGroup>
			</Sidebar.Items>
		</Sidebar>
	);
}
