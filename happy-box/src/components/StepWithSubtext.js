import React from 'react';

const StepWithSubText = props => {
	const reversed = props.reversed ? 'reverse' : '';
	return (
		<div className={`step ${reversed}`}>
			<div className="text">
				<p className="main-text">{props.text}</p>
				<p className="subtext">{props.subtext}</p>
			</div>
			<span>></span>
			<div className="icon">
				<img src={props.img} alt="Icono caja" />
			</div>
		</div>
	);
};

export default StepWithSubText;
