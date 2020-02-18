import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Header from './components/Header';
import Footer from './components/Footer';
import Project from './components/Project';
import Page404 from './components/Page404';

// TODO //
// Spara API-resultat här snarare än på varje sida
// Inte bra att hämta hem varje gång about rendereas t.ex. 

const App = () => {

	return (
		<div className="App">
			<div className="wrapper">
				<Header />
				<div className="container">
				<main>
					<Switch>
						<Route exact path="/" render={() => <Home />} />
						<Route path="/about" render={() => <About />} />
						<Route path="/project/:id" render={() => <Project />} />
						<Route path="/contact" component={Contact} />
						<Route component={Page404} />
					</Switch>
				</main>
			</div>
			</div>
			<Footer />
		</div>
	);
};

export default App;
