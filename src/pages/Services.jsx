import React from 'react';
import { animationThree } from '../animations';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Image from '../images/img-3.jpg';
import {motion} from 'framer-motion';

const Services = () => {
    return (
        <motion.div initial='out' animate='end' exit='out' variants={animationThree}>
            <Header />
            <Hero image={Image} title="Look at this Bird" desc="can you belive this?"/>
            
        </motion.div>
    )
}

export default Services
