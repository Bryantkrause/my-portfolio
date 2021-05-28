import { createContext } from "react";
const PagesContext = createContext({
	portfolioVisited: false,
	togglePortfolio: () => {}
});

export default PagesContext;