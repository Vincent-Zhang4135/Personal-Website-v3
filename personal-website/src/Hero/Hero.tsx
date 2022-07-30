import React from 'react';
import V from './Letters/V'
import './Hero.css'


const Hero = (): JSX.Element => {
	return (
		<>
			<div className="navbar-space"></div>
			<section>
				<div className="container">
					<V />
				</div>
			</section>
		</>
	)
}

export default Hero;