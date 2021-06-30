import React, { useContext } from "react";
import { categoryContext } from "../../App";
import "./Shipment.css";

const Shipment = () => {
	const [count, setCount] = useContext(categoryContext);

	return (
		<div className="shipment">
			<h1>This is Shipment</h1>
		</div>
	);
};

export default Shipment;
