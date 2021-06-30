import { createContext, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Shipment from "./components/Shipment/Shipment";

export const categoryContext = createContext();

function App() {
	const [category, setCategory] = useState("");

	return (
		<categoryContext.Provider value={[category, setCategory]}>
			<div className="app-w">
				<h1>This is app.js : {category}</h1>
				<Header />
				<Home />
				<Shipment />
			</div>
		</categoryContext.Provider>
	);
}

export default App;
