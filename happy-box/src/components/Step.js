import React from 'react';

const Step = props => {
	return (
		<div className="step">
			<p className="main-text">{props.text}</p>
			<span>></span>
			<div className="icon">
				<img src={props.img} alt="Icono caja" />
			</div>
		</div>
	);
};

export default Step;
