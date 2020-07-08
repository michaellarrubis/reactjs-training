import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './assets/base.css';

import Header from './components/Header';
import Sidebar from './components/Sidebar';

import Top from './pages/Top';
import News from './pages/News';
import About from './pages/About';
import Category from './pages/Category';

function App() {
	const [headerTitle, setHeaderTitle] = useState('');

	const handleClickLink = (e) => {
		const { id } = e.target;
		setHeaderTitle(id);
	}

  	return (
    	<div className="app">
			<BrowserRouter>
				<Header title={headerTitle}/>

				<main className="content">
					<Sidebar clickLink={handleClickLink} />
					<Switch>
						<Route exact path="/" component={Top} />
						<Route exact path="/news" component={News} />
						<Route exact path="/about" component={About} />
						<Route exact path="/category/:categoryName" component={Category} />
					</Switch>
				</main>
			</BrowserRouter>
    	</div>
  	);
}

export default App;
