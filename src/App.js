import "./App.css";

import UserInput from "./UserInput.js";

function App() {
	return (
		<div className="App">
			<div className="App-content">
				<div className="App-Input-content">
					<UserInput />
				</div>

				<div className="App-Result-content">
					<h3>Result content</h3>
					<img id="App-Result-Image"></img>
				</div>
			</div>
		</div>
	);
}

export default App;
