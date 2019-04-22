import React from 'react';

const Step = props => {
	const reversed = props.reversed ? 'reverse' : '';
	return (
		<div className={`step ${reversed}`}>
			<p className="main-text">{props.text}</p>
			<span>></span>
			<div className="icon">
				<img src={props.img} alt="Icono caja" />
			</div>
		</div>
	);
};

export default Step;
