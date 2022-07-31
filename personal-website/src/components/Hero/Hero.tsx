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
import { motion } from 'framer-motion'
import './Hero.css'
import { Description } from '../../interfaces'
import DescriptionCard from './DescriptionCard';

const Hero = (): JSX.Element => {
	const descriptions: Description[] = [
		{
			desc: "UChicago Student",
			leftOffset: "18px",
			topOffset: "33px",
		},
		{
			desc: "System Administrator",
			leftOffset: "22px",
			topOffset: "18px",
		},
		{
			desc: "Fullstack developer",
			leftOffset: "31px",
			topOffset: "35px",
		},
		{
			desc: "UI/UX Enthusiast",
			leftOffset: "14px",
			topOffset: "11px",
		},
		{
			desc: "Software Engineer",
			leftOffset: "28px",
			topOffset: "24px",
		},
	]

	return (
		<>
			<div className="navbar-space"></div>
			<section>
				<div className="container">
					<motion.div
						initial={{ x: '80vw' }}
						animate={{ x: '5vw' }}
						transition={{ delay: 0, type: "spring", duration: 2, damping: 7 }}
						className="intro">
						hi, my name is...
					</motion.div>

					<div className="hero">
						<span style={{ display: 'inline' }}><V /><I /><N /><C /><E /><N /><T /></span>
						<span className="space" style={{ paddingLeft: 'calc(5vw + 20px)' }}></span><div className="break"></div>
						<span style={{ display: 'inline' }}><Z /><H /><A /><N /><G /></span>
					</div>

					<motion.div className="i-am-container"
						initial={{ opacity: 0, scale: 0.8 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ delay: 5, duration: 1 }}>
						<span>
							I am a:
						</span>
						<div className="stack">
							{
								descriptions.map((description, i) =>
									<DescriptionCard key={i} {...description} />
								)
							}
						</div>
					</motion.div>
				</div>
			</section >
		</>
	)
}

export default Hero;