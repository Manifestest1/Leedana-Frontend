import React, { useState } from 'react';
import { Stepper, Step, StepLabel, Button, Typography, Box, Container } from '@mui/material';
import styles from "./StepForm.module.scss"
import ButtonCustom from '../buttonComponent/ButtonCustom';


const StepForm = ({steps, getStepContent}) => {
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
        
        
        <Box sx={{ display: 'flex', justifyContent: 'center',marginTop: 6, marginBottom: 2 }}>
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
          {activeStep == 0 && (
              <Box sx={{maxWidth: '245px', margin: 'auto', width: '100%'}}>
             
                <ButtonCustom variant="contained" value="Start Setup" onClick={handleNext} />
              </Box>
          )}
         
        </Box>
      </Box>
      
    </Box>
  );
};

export default StepForm;
