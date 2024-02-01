import { Child } from "./Child";

const Parent = () => {
	return (
		<div>
			<Child color='red' onClick={() => console.log(`Clicked!`)}>
				Hi there!
			</Child>
		</div>
	);
};

export default Parent;
