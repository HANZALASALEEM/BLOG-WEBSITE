import React from "react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import DashSidebar from "../component/DashSidebar";
import DashProfile from "../component/DashProfile";

export default function Dashboard() {
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
		<div className="min-h-screen flex flex-col md:flex-row">
			{/* Side Bar */}
			<div>
				<DashSidebar />
			</div>
			{/* Profile */}
			<div>{tab === "profile" && <DashProfile />}</div>
		</div>
	);
}
