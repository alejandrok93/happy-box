import React from 'react';

import './styles.css';

import Step from './Step';

const ComoFunciona = props => {
	return (
		<section className="como-funciona-container">
			<h1 id="como-funciona">Como funciona?</h1>
			<div className="steps-wrapper">
				<Step text="Elige la caja que más te guste" />
				<div className="step reverse">
					<p className="main-text">Personaliza tu caja</p>
					<span> > </span>
					<div className="icon">
						<img src="./icono" alt="Icono caja" />
					</div>
				</div>
				<div className="step">
					<div className="text">
						<p className="main-text">Personaliza objetos en interior</p>
						<p className="subtext">
							Aplica para cajas con taza, copa, vaso, y termo
						</p>
					</div>
					<span> > </span>
					<div className="icon">
						<img src="./icono" alt="Icono caja" />
					</div>
				</div>
			</div>
		</section>
	);
};

export default ComoFunciona;
