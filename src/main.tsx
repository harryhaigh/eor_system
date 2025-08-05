import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home.tsx";
import NotFoundPage from "./pages/NotFoundPage.tsx";
import AddEmployee from "./pages/employee/AddEmployee.tsx";
import Employee from "./pages/employee/Employee.tsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
		errorElement: <NotFoundPage />,
	},
	{
		path: "/addEmployee",
		element: <AddEmployee />,
	},
	{
		path: "/employee/:employeeId",
		element: <Employee />,
	},
]);

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>
);
