import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import FloatingChatButton from "./Components/floatingChatButton";
const Navbar = lazy(() => import("./Components/navbar"));
const SearchForm = lazy(() => import("./Components/searchForm"));
const Checkout = lazy(() => import("./Components/checkout"));
const BookingSummary = lazy(() => import("./Components/bookingSummary"));

function App() {
	return (
		<div className="bg-offWhite">
			<BrowserRouter>
				<Navbar />
				<FloatingChatButton />
				<Suspense fallback={<div>Loading...</div>}>
					<Routes>
						<Route path="/" element={<SearchForm />} />
					</Routes>
				</Suspense>
				<Suspense fallback={<div>Loading...</div>}>
					<Routes>
						<Route
							path="/booking-summary/checkout"
							element={<Checkout />}
						/>
					</Routes>
				</Suspense>
				<Suspense fallback={<div>Loading...</div>}>
					<Routes>
						<Route path="/booking-summary" element={<BookingSummary />} />
					</Routes>
				</Suspense>
			</BrowserRouter>
		</div>
	);
}

export default App;
