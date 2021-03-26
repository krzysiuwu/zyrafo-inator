import Giraffe from "./components/Giraffe";
import React, {useState} from "react";
import "./styles/App.css";

const useForceUpdate = () => {
	const [count, setCount] = useState(0)
	
	const increment = () => setCount(prevCount => prevCount + 1)
	return [increment, count]
}

function App() {
	const [forceUpdate, forceUpdateValue] = useForceUpdate()
	let [species, setSpecies] = useState(0)

	const onClickHandler = props => {
		setSpecies(species = props)
		forceUpdate()
	}

	return (
		<div className="App">
			<header className="App-header">ŻYRAFO-INATOR</header>
			<main className="Container">
				<Giraffe key={forceUpdateValue} species={species} />
				<div className="ButtonList">
					<button type="button" className="Button" onClick={() => onClickHandler(0)} >Żyrafa siatkowana</button>
					<button type="button" className="Button"  >Żyrafa zachodnioafrykańska</button>
				</div>
			</main>
		</div>
	);
}

export default App;