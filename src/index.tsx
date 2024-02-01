import ReactDOM from "react-dom/client";
import GuestList from "./state/GuestList";
import UserSearch from "./state/UserSearch";
import EventComponent from "./events/EventComponent";

// 2) Get a reference to the div with ID root
const el = document.getElementById("root");

// 3) Tell React to take control of that element
const root = (ReactDOM as any).createRoot(el!);

const App = () => {
	return (
		<div>
			<EventComponent />;
		</div>
	);
};

root.render(<App />);
