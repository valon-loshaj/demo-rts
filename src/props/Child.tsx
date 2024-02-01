import React from "react";

interface ChildProps {
	color: string;
	onClick: () => void;
	children?: React.ReactNode;
}

export const Child: React.FC<ChildProps> = ({ color, onClick, children }) => {
	return (
		<div>
			<h1>{color}</h1>
			<button onClick={onClick}>Click Me!</button>
		</div>
	);
};
