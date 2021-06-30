import React, { useContext } from "react";
import { categoryContext } from "../../App";
import "./CategoryDetail.css";

const CategoryDetail = (props) => {
	const [category] = useContext(categoryContext);
	return (
		<div className="CategoryDetail">
			<h3>This is Category Detail</h3>
			<h3>Category: {category}</h3>
			<h3>Name: {props.product.name}</h3>
		</div>
	);
};

export default CategoryDetail;
