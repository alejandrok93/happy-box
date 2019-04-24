import React from 'react';

import Caja from './Caja.js';

//Import images
import netflixBox from '../img/netflix-box.png';
import wineBox from '../img/wine-lovers-box.png';
import spaBox from '../img/spa-box.png';
import drinksBox from '../img/drinks-box.png';
import cheersBox from '../img/cheers-box.png';
import breakfastBox from '../img/breakfast-box.png';

const EligeTuCaja = props => {
	return (
		<section className="cajas-container">
			<h1 id="cajas">Elige tu happy box</h1>
			<div className="cajas-wrapper">
				<Caja
					toggleBoxInfo={props.toggleBoxInfo}
					img={netflixBox}
					alt="Netflix box"
				/>
				<Caja
					toggleBoxInfo={props.toggleBoxInfo}
					img={wineBox}
					alt="Wine lovers box"
				/>
				<Caja img={spaBox} alt="Spa box" />
				<Caja img={drinksBox} alt="Drinks box" />
				<Caja img={cheersBox} alt="Cheers box" />
				<Caja img={breakfastBox} alt="Breakfast box" />
			</div>
		</section>
	);
};

export default EligeTuCaja;
