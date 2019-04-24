import React from 'react';

const Caja = props => {
	return (
		<div className="caja">
			<img src={props.img} alt={props.alt} />
		</div>
	);
};

export default Caja;
