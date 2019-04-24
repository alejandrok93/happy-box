import React from 'react';

const Caja = props => {
	return (
		<div onClick={props.toggleBoxInfo} className="caja">
			<img src={props.img} alt={props.alt} />
		</div>
	);
};

export default Caja;
