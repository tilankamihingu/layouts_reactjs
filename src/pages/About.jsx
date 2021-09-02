import { motion } from 'framer-motion';
import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero';
import Image from '../images/img-2.jpg';

import {animationTwo} from '../animations';

const About = () => {
    return (
        <motion.div initial='out' animate='in' exit='out' variants={animationTwo}>
            <Header />
            <Hero image={Image} title="Beautiful views" desc="Never Seen Before" />
        
        </motion.div>
    );
};

export default About
