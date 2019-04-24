import React, { Component } from 'react';

import './App.css';

//Import images
import cajasImg from './img/cajas.png';

//Import Components
import ComoFunciona from './components/ComoFunciona';
import EligeTuCaja from './components/EligeTuCaja';
import Nav from './components/Nav';
import CajaInfo from './components/CajaInfo';

class App extends Component {
	constructor() {
		super();
		this.state = { scrolling: false };
	}

	render() {
		console.log(this.state);
		return (
			<div className="container">
				<div className="hero-image-container">
					{/* <img className="logo" src="./logo" alt="Happy Box logo" /> */}
					<Nav />
					<div className="main-content">
						<div className="left">
							<div className="hero-text">
								<h1>Unbox Happiness!</h1>
								<p>
									Sorprende a esa persona espceial con un regalo fuera de lo
									común
								</p>
							</div>
							<div className="cta-button">
								<p>
									<a href="#opciones">Descubre opciones ahora!</a>
								</p>
							</div>
						</div>
						<div className="right">
							<img
								className="hero-image"
								src={cajasImg}
								alt="Ejemplo de cajas"
							/>
						</div>
					</div>
				</div>

				<ComoFunciona />
				<EligeTuCaja />
				<CajaInfo />
			</div>
		);
	}
}

export default App;
