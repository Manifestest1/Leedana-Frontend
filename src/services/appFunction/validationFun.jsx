import * as Yup from 'yup';

// Define the validation schema using Yup

// Login Validation
export const loginValidationSchema = Yup.object({
    email: Yup.string()
      .required('Email is required')
      .email('Invalid email address'),
    password: Yup.string()
      .required('Password is required')
      .min(6, 'Password must be at least 6 characters long'), 
});

// Signup Validation
export const signupValidationSchema = Yup.object({ 
    full_name: Yup.string()
      .required('Name is required'),
    email: Yup.string()
      .required('Email is required')
      .email('Invalid email address'),
    password: Yup.string()
      .required('Password is required')
      .min(6, 'Password must be at least 6 characters long'), 
});