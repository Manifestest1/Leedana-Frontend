import { Box, TextField } from '@mui/material'
import React from 'react';
import styles from './Input.module.scss';


const Input = (props) => {
  return (
    <Box className={styles.inputWrapper}>
      <label className={styles.inputLabel}>{props.icon} {props.labelName}</label>
      <TextField
          type={props.type}
          id={props.inputId}
          placeholder={props.placeholderName}
        />
    </Box>
  )
}

export default Input
