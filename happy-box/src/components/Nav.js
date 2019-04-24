import React from 'react';

import './styles.css';

//Import images
import logo from '../img/logo.png';

const Nav = props => {
	// const onClick = e => {

	// }

	return (
		<div className="header">
			<img class="logo" alt="Happy Box logo" src={logo} />
			<nav className="header-nav">
				<ul>
					<li>
						<a className="nav-link" href="#home">
							Home
						</a>
					</li>
					<li>
						<a className="nav-link" href="#como-funciona">
							Como Funciona?
						</a>
					</li>
					<li>
						<a className="nav-link" href="#cajas">
							Cajas
						</a>
					</li>
					<li>
						<a className="nav-link" href="/pago">
							Pago
						</a>
					</li>
					<li>
						<a className="nav-link" href="/contact">
							Contacto
						</a>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default Nav;
