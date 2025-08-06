import { type FormEventHandler } from "react";

export default function Login() {
	const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
		const formData = new FormData(event.currentTarget);
		if (!formData.get("username")) {
			return;
		}

		event.preventDefault();
		console.log(formData.get("username"));
		const username = formData.get("username");

		for (let [key, value] of formData.entries()) {
			console.log(key, value);
		}
		localStorage.setItem("username", `${username}`);
		localStorage.setItem("eorLoggedIn", "true");
	};

	return (
		<div>
			<h1>Login page</h1>
			<form onSubmit={handleSubmit}>
				<p>
					<label htmlFor="username-input">Username:</label>
					<input id="username-input" type="text" name="username" />
				</p>
				<p>
					<label htmlFor="password-input">Password:</label>
					<input
						id="username-input"
						type="password"
						name="password"
					/>
				</p>
				<button type="submit">Submit</button>
			</form>
		</div>
	);
}
