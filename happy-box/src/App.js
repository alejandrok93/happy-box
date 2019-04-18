import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
	render() {
		return (
			<div className="container">
				<div className="background-image">
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
									<div className="cta-button">Descubre opciones ahora!</div>
								</div>
							</div>
							<div className="right">
								<img
									className="hero-image"
									src="./img/cajas.png"
									alt="Example boxes"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
