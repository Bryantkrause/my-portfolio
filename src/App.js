import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PagesContext from "./utils/PagesContext";
import Portfolio from "./pages/Portfolio";

const App = () => {
	const [pagesState, setPagesState] = useState({
		portfolioVisited: false,
	});
	pagesState.togglePortfolio = () =>
		setPagesState({
			...pagesState,
			portfolioVisited: !pagesState.portfolioVisited,
		});
	return (
		<PagesContext.Provider value={pagesState}>
			<div>
				<Router>
					<Switch>
						<Portfolio />
					</Switch>
				</Router>
			</div>
		</PagesContext.Provider>
	);
};

export default App;
