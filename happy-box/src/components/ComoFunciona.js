import React from 'react';

import './styles.css';

import Step from './Step';
import StepWithSubtext from './StepWithSubtext';

//Import icons
import cajasIcon from '../img/cajas-icono.png';
import personalizaIcon from '../img/personaliza-icono.png';
import designIcon from '../img/design-icono.png';
import ingresaIcon from '../img/ingresa-icono.png';
import pagaIcon from '../img/paga-icono.png';

const ComoFunciona = props => {
	return (
		<section className="como-funciona-container">
			<h1 id="como-funciona">Como funciona?</h1>
			<div className="steps-wrapper">
				<Step text="Elige la caja que más te guste" icon={cajasIcon} />
				<Step
					text="Personaliza tu caja"
					reversed={true}
					icon={personalizaIcon}
				/>
				<StepWithSubtext
					text="Personaliza objetos en interior"
					subtext="Aplica para cajas con taza, copa, vaso, y termo"
					icon={designIcon}
				/>
				<Step text="Ingresa los datos de entrega" icon={ingresaIcon} />
				<Step text="Realiza el pago" reversed={true} icon={pagaIcon} />
				<Step text="Recibe tu happy box" />
			</div>
		</section>
	);
};

export default ComoFunciona;
