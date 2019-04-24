import React from 'react';

// import icono from '../img/caja-icono.png';

import flecha from '../img/flecha-derecha.png';

console.log(flecha);
const Step = props => {
	const reversed = props.reversed ? 'reverse' : '';
	console.log(reversed);
	return (
		<div className={`step ${reversed}`}>
			<p className="main-text">{props.text}</p>
			<span class="flecha">
				<img src={props.flecha} alt="Icono flecha" />
			</span>
			<div className="icon">
				<img className="icon-img" src={props.icon} alt="Icono caja" />
			</div>
		</div>
	);
};

export default Step;
