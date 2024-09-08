import instance from "../auth/axios";

export const getUserList = () => {
    return instance.get('/user-list'); 
  };