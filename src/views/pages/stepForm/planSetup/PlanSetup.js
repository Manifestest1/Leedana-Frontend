
import { Box } from '@mui/material';
import React from 'react'
import Setup from '../../../../component/stepFormComponent/Setup';
import PlanSelection from '../../../../component/stepFormComponent/PlanSelection';
import SetupWelcome from '../SetupWelcome';

const steps = [
    'Steps',
    'Plan Selection',
    'Business Information',
    'Billing Information',
    'Payment Information',
    'Review'
  ];

const PlanSetup = () => {

  
    const getStepContent = (step) => {
        switch (step) {
            case 0:
                return <Setup/>;
              case 1:
            case 0:
                return <PlanSelection />;
            case 1:
                return 'Enter your business information.';
            case 2:
                return 'Provide billing information.';
            case 3:
                return 'Enter payment information.';
            case 4:
                return 'Review and submit.';
            default:
                return 'Review';
            }
        };

    return (
        <>
            <SetupWelcome steps={steps} getStepContent={getStepContent} />
        </>
    )
}

export default PlanSetup
