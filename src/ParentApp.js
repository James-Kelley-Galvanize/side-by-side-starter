import "./ParentApp.css";
import ClassApp from "./ClassAppSrc/ClassApp";
import HooksApp from "./HooksAppSrc/HooksApp";

function ParentApp() {
	return (
		<div className="parent-app">
			<div className="title-bar">
				<h1 className="column title-left">CLASS</h1>
				<h1 className="column title-right">HOOKS</h1>
			</div>
			<div className="column left-side">
				<ClassApp />
			</div>
			<div className="column right-side">
				<HooksApp />
			</div>
		</div>
	);
}

export default ParentApp;
