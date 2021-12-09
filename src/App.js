import "./App.css";

import UserInput from "./UserInput.js";

function App() {
	return (
		<div className="App">
			<div className="App-content">
				<UserInput />

				<h3>Result content</h3>
				<div className="App-Result-content">
					<img id="App-Result-Image" alt="Result"></img>
				</div>
			</div>
		</div>
	);
}

export default App;
