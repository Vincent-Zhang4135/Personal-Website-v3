import React from 'react';
import { motion } from 'framer-motion';
import { Description } from '../interfaces';
import './Hero.css'

const DescrptionCard = (description: Description): JSX.Element => {
    return (
        <motion.div
            drag
            dragConstraints={{
                top: -50,
                left: -50,
                right: 50,
                bottom: 50,
            }
            }
            style={{
                top: description.topOffset,
                left: description.leftOffset,
            }}
            initial={{ opacity: 0.9 }}
            whileHover={{ opacity: 1 }}
            whileDrag={{ scale: 1.1 }}
            transition={{ duration: 0.5 }}
            className="description" >
            {description.desc}
        </motion.div >
    )
}

export default DescrptionCard