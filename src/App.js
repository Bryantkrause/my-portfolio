import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Portfolio from "./pages/Portfolio";

const App = () => {
	return (
		<div>
			<Router>
				<Switch>
					<Portfolio />
				</Switch>
			</Router>
		</div>
	);
};

export default App;
