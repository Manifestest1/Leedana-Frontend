import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import { Link } from 'react-router-dom'
import styles from "../../../assets/styles/Login.module.scss";
import Logo from "../../../assets/images/logo.svg";
import {ReactComponent as User} from "../../../assets/images/icon/user-icon.svg"
import {ReactComponent as Admin} from "../../../assets/images/icon/user-setting-icon.svg"
import { useNavigate  } from 'react-router-dom';


const ChooseLogin = () => {

    const navigate = useNavigate();

    const handleUserLogin = () => {
        navigate('/login');
    }

    const handleAdminLogin = () => {
        navigate('/admin-login');
    }

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
                            <Typography variant="h1" component={'h1'} className={`title text-white`} mb={3}>Welcome to LEEDANA</Typography>
                            <Typography variant="body" component={'p'} className={`text-white`}>Join Leedana today to access expert consultations, educational training courses, advanced farm management and forecasting tools, and enhance your market visibility through our farm network.</Typography>
                        </Box>
                        <Box className={styles.bottomText}>
                            <Typography variant="body" component={'p'} className={`text-white`} mt={10}>© 2024 Leedana. All rights reserved.</Typography>
                        </Box>
                    </Box> 
                </Box>
            </Box>
            <Box className={styles.loginRight}>
                <Box className={styles.loginRightInner}>
                    <Box>
                        <Box className={styles.RightTitleWrapper}>
                            <Typography variant="h2" component={'h2'} className={`theme-black-color title`}>Choose the Login method</Typography>
                        </Box>
                        <Box mt={3.5}>
                            <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'} spacing={3}>
                                <Button onClick={handleUserLogin} className={styles.loginUserButton} startIcon={<User />}>User</Button>
                                <Typography variant="body" component={'p'}>Or</Typography>
                                <Button onClick={handleAdminLogin} className={styles.loginUserButton} startIcon={<Admin />}>Admin</Button>
                            </Stack>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    </Box>
  );
};

export default ChooseLogin;
