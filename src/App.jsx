import Voronoi from "./voronoi";

import "./styles/App.css";

function App() {
	var svg = Voronoi()

	return (
		<div className="App">
			<header className="App-header">ŻYRAFO-INATOR</header>
			<main className="Container">
			<svg dangerouslySetInnerHTML={{__html: svg.innerHTML}} className="ddd" />
			</main>
		</div>
	);
}

export default App;