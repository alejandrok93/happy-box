import React from 'react';

import './styles.css';

import Step from './Step';
import StepWithSubtext from './StepWithSubtext';

//Import icons
import cajasIcon from '../img/cajas-icono.png';
import designIcon from '../img/design-icono.png';

const ComoFunciona = props => {
	return (
		<section className="como-funciona-container">
			<h1 id="como-funciona">Como funciona?</h1>
			<div className="steps-wrapper">
				<Step text="Elige la caja que más te guste" icon={cajasIcon} />
				<Step text="Personaliza tu caja" reversed={true} icon={designIcon} />
				<StepWithSubtext
					text="Personaliza objetos en interior"
					subtext="Aplica para cajas con taza, copa, vaso, y termo"
				/>
				<Step text="Ingresa los datos de entrega" />
				<Step text="Realiza el pago" reversed={true} />
				<Step text="Recibe tu happy box" />
			</div>
		</section>
	);
};

export default ComoFunciona;
