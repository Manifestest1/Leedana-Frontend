import { Box, Button, FormGroup,  List, ListItem,  Stack, Typography } from "@mui/material";
import React from "react";
import styles from "../../../assets/styles/Login.module.scss";
import Logo from "../../../assets/images/logo.svg";
import {ReactComponent as BackArrow} from "../../../assets/images/icon/back-arrow.svg";
import Input from "../../../component/inputComponent/Input";
import ButtonCustom from "../../../component/buttonComponent/ButtonCustom";

const CreatePassword = () => {

  
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
                    <Typography variant="h2" component={'h2'} className={`title theme-black-color`} mb={2}>Create New Password</Typography>
                    <Typography variant="body" component={'p'} className={`text-grey`}>This password should be different from the previous password
                    </Typography>
                  </Box>
                  <Box mt={3.5}>
                    <Box mb={2}>
                      <Input type="password" labelName="New Password" />
                    </Box>
                    <Box mb={2}>
                      <Input type="password" labelName="Confirm Password" />
                    </Box>
                    <Box mb={2}>
                      <Box className={`success-list-wrapper`}>
                        <List className={`list-success`}>
                          <ListItem>At least 8 characters</ListItem>
                          <ListItem>At least 1 number</ListItem>
                          <ListItem>Both upper and lower case letters</ListItem>
                        </List>
                      </Box>
                    </Box>
                    <Box >
                      <ButtonCustom variant="contained" value="Reset Password" />
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

export default CreatePassword;

