import "./styles/App.css";
import Voronoi from "./voronoi";
import { useEffect, useRef } from "react";

function App() {
	console.log(Voronoi());
	const svg = useRef(null);
	useEffect(() => {
		if (svg.current) {
			svg.current.appendChild(Voronoi());
		}
	}, []);
	return (
		<div className="App">
			<header className="App-header">ŻYRAFO-INATOR</header>
			<main>
				<div ref={svg} id="ddd" />
			</main>
		</div>
	);
}

export default App;
