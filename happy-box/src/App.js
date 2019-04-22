import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//Import images
import cajasImg from './img/cajas.png';

//Import Components
import ComoFunciona from './components/ComoFunciona';
import Nav from './components/Nav';

class App extends Component {
	render() {
		return (
			<div className="container">
				<div className="hero-image-container">
					<img className="logo" src="./logo" alt="Happy Box logo" />
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
				<Nav />
			</div>
		);
	}
}

export default App;
