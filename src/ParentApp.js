import "./ParentApp.css";
import ClassApp from "./ClassAppSrc/ClassApp";
import HooksApp from "./HooksAppSrc/HooksApp";

function ParentApp() {
	return (
		<div className="parent-app">
			<div className="parent-title-bar">
				<h1 className="parent-column parent-title-left">CLASS</h1>
				<h1 className="parent-column parent-title-right">HOOKS</h1>
			</div>
			<div className="parent-column parent-left-side">
				<ClassApp />
			</div>
			<div className="parent-column parent-right-side">
				<HooksApp />
			</div>
		</div>
	);
}

export default ParentApp;
