import { Box, Checkbox, FormControlLabel, FormGroup, Stack, Typography } from "@mui/material";
import { Link } from 'react-router-dom'
import React,{ useState,useContext } from 'react'
import styles from "../../../assets/styles/Login.module.scss";
import Logo from "../../../assets/images/logo.svg";
import {ReactComponent as User} from "../../../assets/images/icon/user-icon.svg";
import {ReactComponent as Email} from "../../../assets/images/icon/email.svg";
import {ReactComponent as Password} from "../../../assets/images/icon/key.svg";
import {ReactComponent as Google} from '../../../assets/images/icon/google-icon.svg'
import Input from "../../../component/inputComponent/Input";
import ButtonCustom from "../../../component/buttonComponent/ButtonCustom";
import AuthContext from "../../../services/auth/AuthContext";
import { useFormik } from 'formik';
import { signupValidationSchema } from '../../../services/appFunction/validationFun'

const initialValues = { 
  full_name: "",
  email: "",
  password: ""
};

const Register = () => {
  
  const { register } = useContext(AuthContext);
  const [signupError, setSignupError] = useState('');

     // Register Function
    const { values,errors,touched,handleBlur,handleChange,handleSubmit} = useFormik({
      initialValues: initialValues,
      validationSchema: signupValidationSchema,
      onSubmit: async (value) => {
        const error = await register(values.full_name, values.email, values.password);
        if (error) 
        {
          setSignupError("Email id already exist!.");
        } 
        else 
        {
          console.log("Credential success.");
        }
      }
    })
 

  return (
    <Box className={styles.loginWrapper}>
      <Box className={styles.loginInner}>
        <Box className={styles.loginLeft}>
          <Box className={styles.loginLeftInner}>
            <Box className={styles.logoLeftContentWrapper}>
              <Box className={styles.logo}>
                <img src={Logo} alt="Logo" />
              </Box>
              <Box className={styles.leftTitleWrapper}>
                <Typography
                  variant="h1"
                  component={"h1"}
                  className={`title text-white`}
                  mb={3}
                >
                  Welcome to LEEDANA
                </Typography>
                <Typography
                  variant="body"
                  component={"p"}
                  className={`text-white`}
                >
                  Join Leedana today to access expert consultations, educational
                  training courses, advanced farm management and forecasting
                  tools, and enhance your market visibility through our farm
                  network.
                </Typography>
              </Box>
              <Box className={styles.bottomText}>
                <Typography
                  variant="body"
                  component={"p"}
                  className={`text-white`} 
                  mt={10}
                >
                  © 2024 Leedana. All rights reserved.
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box className={styles.loginRight}>
          <Box className={styles.loginRightInner}>
            <FormGroup>
              <Box className={styles.RightTitleWrapper}>
                <Box>
                  <Box className={styles.titleWrapper}>
                    <Typography variant="h2" component={'h2'} className={`title theme-black-color`} mb={2}>Sign Up</Typography> 
                    <Typography variant="body" component={'p'} className={`text-grey`}>Already have an account? <strong><Link to="/login"> Login now. </Link> </strong>
                    </Typography>
                    {signupError && <Typography color="error">{signupError}</Typography>}
                  </Box>
                  <Box mt={3.5}>
                    <form onSubmit={handleSubmit}>
                      <Box mb={2}>
                        <Input type="text" labelName="Name" icon={<User />} name="full_name" value={values.full_name} onChange={handleChange} onBlur={handleBlur}/>
                        {errors.full_name && touched.full_name ? <Typography color="error">{errors.full_name}</Typography> : null}
                      </Box>
                      <Box mb={2}>
                      <Input type="email" name="email" labelName="Email" icon={<Email />} value={values.email} onChange={handleChange} onBlur={handleBlur}/>
                      {errors.email && touched.email ? <Typography color="error">{errors.email}</Typography> : null}
                      </Box>
                      <Box mb={1}>
                      <Input type="password" name="password" labelName="Password" icon={<Password />} value={values.password} onChange={handleChange} onBlur={handleBlur}/>
                      {errors.password && touched.password ? <Typography color="error">{errors.password}</Typography> : null }
                        <Stack direction={'row'} flexWrap={'wrap'} alignItems={'center'} spacing={0}>
                          <FormControlLabel control={<Checkbox />} label="I agree with" mr={1} />
                          <strong><Link href="#"> Terms & Conditions</Link></strong>
                        </Stack>
                      </Box>
                      <Box mb={1.5}>
                        <ButtonCustom variant="contained" value="Sign Up" type="submit"/>
                      </Box>
                      <Box>
                        <ButtonCustom variant="Outlined" value="Sign up with Google" startIcon={<Google />} />
                      </Box>
                    </form>
                  </Box>
                </Box>
              </Box>
            </FormGroup>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Register;
