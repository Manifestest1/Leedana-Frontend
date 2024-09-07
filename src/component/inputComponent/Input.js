import { Box, TextField, IconButton } from '@mui/material';
import React, { useState } from 'react';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import styles from './Input.module.scss';

const Input = (props) => {
  // State to handle password visibility
  const [showPassword, setShowPassword] = useState(false);

  // Toggle function for password visibility
  const handleClickShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <Box className={styles.inputWrapper}>
      <label className={styles.inputLabel}>
        {props.icon} {props.labelName}
      </label>
      <TextField
        type={props.type === 'password' ? (showPassword ? 'text' : 'password') : props.type}
        id={props.inputId}
        placeholder={props.placeholderName}
        InputProps={{
          endAdornment: props.type === 'password' && (
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              edge="end"
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          ),
        }}
      />
    </Box>
  );
}

export default Input;

