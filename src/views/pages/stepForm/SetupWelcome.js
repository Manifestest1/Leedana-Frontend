import React, { useState } from 'react';
import { Stepper, Step, StepLabel, Button, Box, Container } from '@mui/material';
import styles from "../../../assets/styles/StepForm.module.scss";
import ButtonCustom from '../../../component/buttonComponent/ButtonCustom';
import Setup from '../../../component/stepFormComponent/Setup'; // Make sure to import
import PlanSelection from '../../../component/stepFormComponent/PlanSelection';

const SetupWelcome = () => {
    const steps = [
        'Steps',
        'Plan Selection', 
        'Business Information',
        'Billing Information',
        'Payment Information',
        'Review'
    ];

    const getStepContent = (step) => { 
        switch (step) {
            case 0:
                return <Setup />;
            case 1:
                return <PlanSelection />;
            case 2:
                return 'Enter your business information.';
            case 3:
                return 'Provide billing information.';
            case 4:
                return 'Enter payment information.';
            case 5:
                return 'Review and submit.';
            default:
                return 'Review';
        }
    };

    const [activeStep, setActiveStep] = useState(0);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    return (
        <Box className={styles.stepFormWrapper}>
            <Box className={styles.stepFormHeader}>
                <Container maxWidth={'lg'}>
                    <Stepper activeStep={activeStep} alternativeLabel>
                        {steps.map((label) => (
                            <Step key={label} className={styles.stepFormLabel}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                </Container>
            </Box>
            <Box className={styles.stepFormBody}>
                <Box>{getStepContent(activeStep)}</Box>
                
                <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 6, marginBottom: 2 }}>
                    {activeStep !== 0 && (
                        <>
                            <Button onClick={handleBack} sx={{ mr: 1 }}>
                                Back
                            </Button>
                            <Button
                                variant="contained"
                                onClick={handleNext}
                            >
                                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                            </Button>
                        </>
                    )}
                    {activeStep === 0 && (
                        <Box sx={{ maxWidth: '245px', margin: 'auto', width: '100%' }}>
                            <ButtonCustom variant="contained" value="Start Setup" onClick={handleNext} />
                        </Box>
                    )}
                </Box>
            </Box>
        </Box>
    );
};

export default SetupWelcome;
