import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home.tsx";
import NotFoundPage from "./pages/NotFoundPage.tsx";
import AddEmployee from "./pages/employee/AddEmployee.tsx";
import Employee from "./pages/employee/Employee.tsx";
import Login from "./pages/Login.tsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
		errorElement: <NotFoundPage />,
		children: [
			{
				path: "/login",
				element: <Login />,
			},
			{
				path: "/addEmployee",
				element: <AddEmployee />,
			},
			{
				path: "/employee/:employeeId",
				element: <Employee />,
			},
		],
	},
]);

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>
);
