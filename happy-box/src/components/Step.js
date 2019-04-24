import React from 'react';

// import icono from '../img/caja-icono.png';

const Step = props => {
	const reversed = props.reversed ? 'reverse' : '';
	console.log(reversed);
	return (
		<div className={`step ${reversed}`}>
			<p className="main-text">{props.text}</p>
			<span>></span>
			<div className="icon">
				<img className="icon-img" src={props.icon} alt="Icono caja" />
			</div>
		</div>
	);
};

export default Step;
