import React from 'react';
import V from './Letters/V'
import I from './Letters/I'
import N from './Letters/N'
import C from './Letters/C'
import E from './Letters/E'
import T from './Letters/T'
import Z from './Letters/Z'
import H from './Letters/H'
import A from './Letters/A'
import G from './Letters/G'
import './Hero.css'


const Hero = (): JSX.Element => {
	return (
		<>
			<div className="navbar-space"></div>
			<section>
				<div className="container">
					<div className="hero">
						<span style={{ display: 'inline' }}><V /><I /><N /><C /><E /><N /><T /></span>
						<span className="space" style={{paddingLeft: 'calc(5vw + 20px)'}}></span><div className="break"></div>
						<span style={{ display: 'inline' }}><Z /><H /><A /><N /><G /></span>
					</div>
				</div>
			</section>
		</>
	)
}

export default Hero;