import LeftSideBar from "./components/navigation/LeftSideBar";

function App() {
	return (
		<>
			<h1>Home page</h1>
			<div className="main-container">
				<section>
					<LeftSideBar />
				</section>
				<main></main>
			</div>
		</>
	);
}

export default App;
