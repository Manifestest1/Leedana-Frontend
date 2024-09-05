import { Box, TextField } from '@mui/material'
import React from 'react'

const Input = (props) => {
  return (
    <Box>
      <TextField
          type={props.type}
          id={props.inputId}
          placeholder={props.placeholderName}
        />
    </Box>
  )
}

export default Input
