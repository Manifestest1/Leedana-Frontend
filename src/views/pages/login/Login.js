import { Box, Button, Checkbox, FormControlLabel, FormGroup, Stack, Typography } from "@mui/material";
import { useNavigate,Link  } from 'react-router-dom';
import React,{ useContext,useEffect,useState } from 'react'
import styles from "../../../assets/styles/Login.module.scss";
import Logo from "../../../assets/images/logo.svg";
import {ReactComponent as BackArrow} from "../../../assets/images/icon/back-arrow.svg";
import {ReactComponent as Admin} from "../../../assets/images/icon/user-setting-icon.svg";
import {ReactComponent as Email} from "../../../assets/images/icon/email.svg";
import {ReactComponent as Password} from "../../../assets/images/icon/key.svg";
import {ReactComponent as Google} from '../../../assets/images/icon/google-icon.svg';
import Input from "../../../component/inputComponent/Input";
import ButtonCustom from "../../../component/buttonComponent/ButtonCustom";
import AuthContext from "../../../services/auth/AuthContext";
import { initializeGoogleAPI, handleGoogleLogin } from '../../../services/appFunction/loginFunction';
import { useFormik } from 'formik';
import { loginValidationSchema } from '../../../services/appFunction/validationFun'

const initialValues = {
  email: "",
  password: ""
};

const Login = () => { 

  const CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID; 
  const navigate = useNavigate();
  const { login,login_with_google } = useContext(AuthContext);
  const [loginError, setLoginError] = useState('');
  
  // User Login
  const { values,errors,touched,handleBlur,handleChange,handleSubmit} = useFormik({
    initialValues: initialValues,
    validationSchema: loginValidationSchema,
    onSubmit: async (value) => {
      const error = await login(values.email, values.password);
      if (error) 
      {
        setLoginError("Credential Not Match!.");
      } 
      else 
      {
        console.log("Credential success.");
      }
    }
  })

  // Back Function
  const handleBack = () => { 
      navigate('/');
  }

  // Login With Google
  useEffect(() => {
    initializeGoogleAPI(CLIENT_ID, () => {
      console.log('Google API client initialized');
    });
  }, [CLIENT_ID]);

  const googleLogin = async () => 
  {
    await handleGoogleLogin(login_with_google);
  };
    
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
                <Box mb={2}>
                  <Stack direction={'row'} alignContent={'center'} justifyContent={'space-between'} spacing={2}>
                    <Button onClick={handleBack} className={`btn-text text-primary ${styles.topBtn}`} startIcon={<BackArrow/>} variant="text">Back</Button>
                    <Button className={`btn-text ${styles.topBtn}`} startIcon={<Admin/>} variant="text">User</Button>
                  </Stack>
                </Box>
                <Box>
                  <Box className={styles.titleWrapper}>
                    <Typography variant="h2" component={'h2'} className={`title theme-black-color`} mb={2}>Login</Typography>
                    <Typography variant="body" component={'p'} className={`text-grey`}>Don’t have an account? <strong><Link to="/register"> Create a new account now. </Link> </strong>
                      It’s FREE! Takes less than a minute.
                    </Typography>
                    {loginError && <Typography color="error">{loginError}</Typography>}
                  </Box>
                  <Box mt={3.5}> 
                    <form onSubmit={handleSubmit}>
                      <Box mb={2}>
                        <Input type="email" name="email" labelName="Email" icon={<Email />} value={values.email} onChange={handleChange} onBlur={handleBlur}/>
                        {errors.email && touched.email ? <Typography color="error">{errors.email}</Typography> : null}
                      </Box>
                      <Box mb={1}>
                        <Input type="password" name="password" labelName="Password" icon={<Password />} value={values.password} onChange={handleChange} onBlur={handleBlur}/>
                        {errors.password && touched.password ? <Typography color="error">{errors.password}</Typography> : null }
                        <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
                          <FormControlLabel control={<Checkbox />} label="Remember me" />
                          <Link to="/password-reset">Forgot password?</Link>
                        </Stack>
                      </Box>
                      <Box mb={1.5}>
                        <ButtonCustom variant="contained" value="Login" type="submit"/>
                      </Box>
                      <Box>
                        <ButtonCustom variant="Outlined" value="Login with Google" startIcon={<Google />} onClick={googleLogin}/>
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

export default Login;
