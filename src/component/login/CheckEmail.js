import { Box, Button, Checkbox, FormControlLabel, FormGroup, Link, Stack, Typography } from "@mui/material";
import React from "react";
import styles from "./Login.module.scss";
import Logo from "../../assets/images/logo.svg";
import {ReactComponent as BackArrow} from "../../assets/images/icon/back-arrow.svg";
import {ReactComponent as Admin} from "../../assets/images/icon/user-setting-icon.svg";
import {ReactComponent as Email} from "../../assets/images/icon/email.svg";
import {ReactComponent as Password} from "../../assets/images/icon/key.svg";
import {ReactComponent as Google} from '../../assets/images/icon/google-icon.svg'
import Input from "../inputComponent/Input";
import ButtonCustom from "../buttonComponent/ButtonCustom";

const CheckEmail = () => {
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
                    <Button className={`btn-text text-primary ${styles.topBtn}`} startIcon={<BackArrow/>} variant="text">Back</Button>
                    
                  </Stack>
                </Box>
                <Box>
                  <Box className={styles.titleWrapper}>
                    <Typography variant="h2" component={'h2'} className={`title theme-black-color`} mb={2}>Check your email</Typography>
                    <Typography variant="body" component={'p'} className={`text-grey`}>We have sent the code to <strong>levine90@gmail.com</strong>
                    </Typography>
                  </Box>
                  <Box mt={3.5}>
                    <Box mb={2}>
                      <Input type="text" labelName="Enter The Code" />
                    </Box>
                    
                    <Box mb={1}>
                      <ButtonCustom variant="contained" value="Verify" />
                    </Box>
                    <Box textAlign={'center'}>
                        <strong><Link href="#">Send Again</Link></strong>
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

export default CheckEmail;

