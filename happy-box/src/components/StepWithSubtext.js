import React from 'react';

const StepWithSubText = props => {
	const reversed = props.reversed ? 'reverse' : '';
	return (
		<div className={`step ${reversed}`}>
			<div className="text">
				<p className="main-text">{props.text}</p>
				<p className="subtext">{props.subtext}</p>
			</div>
			<span class="flecha">
				<img src={props.flecha} alt="Icono flecha" />
			</span>
			<div className="icon">
				<img className="icon-img" src={props.icon} alt="Icono caja" />
			</div>
		</div>
	);
};

export default StepWithSubText;
