import React from 'react';

import './styles.css';

const CajaInfo = props => {
	return (
		<div className="caja-info-container">
			<div className="caja-info">
				<span className="close">X</span>
				<h1>Que Incluye?</h1>
				<ul>
					<li>Membresia para ver Netflix por un mes</li>
				</ul>
			</div>
		</div>
	);
};

export default CajaInfo;
