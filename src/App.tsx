import "./App.css";
import Modal from "./Modal";
import Editor from "./Editor";

function App() {
	return (
		<div className="App">
			<Modal>
				<Editor />
			</Modal>
		</div>
	);
}

export default App;
