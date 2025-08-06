import { Outlet } from "react-router-dom";
import LeftSideBar from "../components/navigation/LeftSideBar";

export default function Home() {
	return (
		<div className="app-container">
			<div>
				<LeftSideBar />
			</div>
			<main>
				<Outlet />
			</main>
		</div>
	);
}
