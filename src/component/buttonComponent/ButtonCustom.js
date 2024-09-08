import React from 'react';
import { Box, Button } from '@mui/material';
import styles from './Button.module.scss';

const ButtonCustom = (props) => {
  return (
    <Box className={styles.buttonWrapper}> 
      <Button className={styles.btnPrimary} variant={props.variant} startIcon={props.startIcon} endIcon={props.endIcon} onClick={props.onClick} type={props.type} >{props.value}</Button>
    </Box>
  )
}

export default ButtonCustom
