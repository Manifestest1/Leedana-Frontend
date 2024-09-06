import { Box, Button, Checkbox, FormControlLabel, FormGroup, Link, Stack, Typography } from "@mui/material";
import React from "react";
import styles from "./Login.module.scss";
import Logo from "../../assets/images/logo.svg";
import {ReactComponent as User} from "../../assets/images/icon/user-icon.svg";
import {ReactComponent as Email} from "../../assets/images/icon/email.svg";
import {ReactComponent as Password} from "../../assets/images/icon/key.svg";
import {ReactComponent as Google} from '../../assets/images/icon/google-icon.svg'
import Input from "../inputComponent/Input";
import ButtonCustom from "../buttonComponent/ButtonCustom";

const SignUp = () => {
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
                    <Typography variant="body" component={'p'} className={`text-grey`}>Already have an account? <strong><Link href="#"> Login now. </Link> </strong>
                    </Typography>
                  </Box>
                  <Box mt={3.5}>
                    <Box mb={2}>
                      <Input type="text" labelName="Name" icon={<User />} />
                    </Box>
                    <Box mb={2}>
                      <Input type="email" labelName="Email" icon={<Email />} />
                    </Box>
                    <Box mb={1}>
                      <Input type="password" labelName="Password" icon={<Password />} />
                      <Stack direction={'row'} flexWrap={'wrap'} alignItems={'center'} spacing={0}>
                        <FormControlLabel control={<Checkbox />} label="I agree with" mr={1} />
                        <strong><Link href="#"> Terms & Conditions</Link></strong>
                      </Stack>
                    </Box>
                    <Box mb={1.5}>
                      <ButtonCustom variant="contained" value="Sign Up" />
                    </Box>
                    <Box>
                      <ButtonCustom variant="Outlined" value="Sign up with Google" startIcon={<Google />} />
                    </Box>
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

export default SignUp;
