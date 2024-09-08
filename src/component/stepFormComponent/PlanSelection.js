import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import styles from './PlanInner.module.scss';
import PrimiumCrad from '../../../component/card/PrimiumCrad';

const PlanSelection = () => {
  return (
    <Box className={`${styles.PlanSelectionW} ${styles.stepContentWrapper}`}>
        <Container maxWidth={'lg'}>
            <Box className={styles.titleWrapper}>
                <Typography variant='h2' component={'h2'} className={`title theme-black-color fw-800`} mb={1.5}>Plan Selection</Typography>
                <Typography variant='body2' component={'p'} className='text-grey'>Choose one of our subscription plans below.</Typography>
            </Box>
            <Grid container spacing={4.5}>
                <Grid item md={4}>
                    <Box>
                        <PrimiumCrad />
                    </Box>
                </Grid>
            </Grid>
        </Container>
    </Box>
  )
}

export default PlanSelection
