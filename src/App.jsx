import Voronoi from "./voronoi";
import Button from "./components/Button"
import { useEffect, useRef } from "react";

import "./styles/App.css";

function App() {
	const svg = useRef(null);
	useEffect(() => {
		if (svg.current) {
			svg.current.appendChild(Voronoi());
		}
	}, []);
	return (
		<div className="App">
			<header className="App-header">ŻYRAFO-INATOR</header>
			<main className="Container">
				<div ref={svg} className="ddd" />
				<Button text="Nowa żyrafa"/>
			</main>
		</div>
	);
}

export default App;
