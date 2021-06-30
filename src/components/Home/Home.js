import React, { useContext } from "react";
import { categoryContext } from "../../App";
import Categories from "../Categories/Categories";
import "./Home.css";

const Home = () => {
	const category = useContext(categoryContext);

	return (
		<div className="home">
			<h1>This is Home</h1>
			<h2>Category: {category}</h2>
			<Categories />
		</div>
	);
};

export default Home;
