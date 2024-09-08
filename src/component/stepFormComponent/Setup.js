import React, { useState } from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import styles from './PlanInner.module.scss';
// import {ReactComponent as Simulations} from '../../assets/images/icon/simulations-icon.svg';
// import {ReactComponent as Market} from '../../../assets/images/icon/market-icon.svg';
// import {ReactComponent as Brain} from '../../../assets/images/icon/brain-icon.svg';

import ButtonCustom from '../buttonComponent/ButtonCustom';


const Setup = () => {

    const setupCard = [
        {
            // icon: <Simulations/>,
            title: 'Run Simulations:',
            subTitle: 'Test different farming scenarios with our simulation tools. Optimize your resources, predict outcomes, and make data-driven decisions to maximize your yield and efficiency.',
        },
        {
            // icon: <Market/>,
            title: 'Get Market Exposure:',
            subTitle: "Showcase your farm's produce and practices on our network. Connect with buyers, partners, and other farmers to expand your reach and grow your business.",
        },
        {
            // icon: <Brain/>,
            title: 'Learn:',
            subTitle: 'Access a wealth of educational resources tailored to your needs. Stay ahead of industry trends, enhance your skills, and continuously improve your farming operations.',
        },
    ]

    const [activeStep, setActiveStep] = useState(0);

    const handleNext = () => {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
  return (
    <Box className={`${styles.setupWrapper} ${styles.stepContentWrapper}`}>
        <Container maxWidth={'md'}>
            <Box className={styles.titleWrapper}>
                <Typography variant='h2' component={'h2'} className={`title theme-black-color fw-800`} mb={1.5}>Welcome to <span className='text-primary'>LEEDANA</span></Typography>
                <Typography variant='body2' component={'p'} className='text-grey'>We're excited to help you manage your sandponic farm efficiently. We’ll need a couple of things in order to set up your account.</Typography>
            </Box>
            <Grid container spacing={6}>
                {setupCard.map((items, index) => (
                    <Grid item key={index} md={4}>
                        <Box className={styles.setupCard}>
                            <Box className={styles.setupIconWrapper}>
                                {items.icon}
                            </Box>
                            <Box className={styles.cardTitle}>
                                <Typography variant='h6' component={'h6'} className={`title fw-700 theme-black-color`}>{items.title}</Typography>
                                <Typography variant='body2' component={'p'} className={`text-grey`}>{items.subTitle}</Typography>
                            </Box>
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Container>
    </Box>  
  ) 
}

export default Setup
