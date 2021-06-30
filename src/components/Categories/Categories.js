import React, { useContext, useEffect, useState } from "react";
import "./Categories.css";
import CategoryDetail from "../CategoryDetail/CategoryDetail";
import { categoryContext } from "../../App";

const fakeData = [
	{ name: "Asus", category: "Laptop" },
	{ name: "Lenovo", category: "Laptop" },
	{ name: "Razer", category: "Laptop" },

	{ name: "OnePlus", category: "Phone" },
	{ name: "SamSung", category: "Phone" },
	{ name: "Apple", category: "Phone" },

	{ name: "Sony", category: "Camera" },
	{ name: "Canon", category: "Camera" },
	{ name: "Nikkon", category: "Camera" },
];

const Categories = () => {
	const [category] = useContext(categoryContext);
	const [products, setProducts] = useState([]);

	useEffect(() => {
		const sameProducts = fakeData.filter(
			(pd) => pd.category.toLowerCase() === category.toLowerCase()
		);
		setProducts(sameProducts);
	}, [category]);

	return (
		<div className="categories">
			<h2>This is Categories</h2>
			{products.map((pd) => (
				<CategoryDetail product={pd}></CategoryDetail>
			))}
		</div>
	);
};

export default Categories;
