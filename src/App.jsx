import { lazy } from "react";
import "./App.css";

const Navbar = lazy(() => import("./Components/navbar"));
const SearchForm = lazy(() => import("./Components/searchForm"));

function App() {
	return (
		<div>
			<Navbar />
			<SearchForm />
		</div>
	);
}

export default App;
