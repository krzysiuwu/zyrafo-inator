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

	const onClickHandler = e => {
		forceUpdate()
	}
	return (
		<div className="App">
			<header className="App-header">ŻYRAFO-INATOR</header>
			<main className="Container">
				<Giraffe key={forceUpdateValue}/>
				<button type="button" className="Button" onClick={onClickHandler} >Nowa żyrafa</button>
			</main>
		</div>
	);
}

export default App;