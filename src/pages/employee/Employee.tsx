import { useParams } from "react-router-dom";

export default function Empolyee() {
	const params = useParams<{ employeeId: string }>();
	console.log(params);
	return (
		<div>
			<h1>Empolyee page {params.employeeId}</h1>
		</div>
	);
}
