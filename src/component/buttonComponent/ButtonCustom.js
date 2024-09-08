import React from 'react';
import { Box, Button } from '@mui/material';
import styles from './Button.module.scss';

const ButtonCustom = (props) => {
  return (
    <Box className={styles.buttonWrapper}>
      <Button className={styles.btnPrimary} disabled={props.disabled} variant={props.variant} startIcon={props.startIcon} endIcon={props.endIcon} onClick={props.onClick}>{props.value}</Button>
    </Box>
  )
}

export default ButtonCustom
