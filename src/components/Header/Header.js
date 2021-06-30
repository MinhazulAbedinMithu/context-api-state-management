import React, { useContext } from "react";
import { categoryContext } from "../../App";
import "./Header.css";

const Header = () => {
	const [category, setCategory] = useContext(categoryContext);
	return (
		<div className="header">
			<h1>This is Header</h1>
			<h2>Category: {category}</h2>
			<button onClick={() => setCategory("Laptop")}>Laptop</button>
			<button onClick={() => setCategory("Phone")}>Phone</button>
			<button onClick={() => setCategory("Camera")}>Camera</button>
		</div>
	);
};

export default Header;
