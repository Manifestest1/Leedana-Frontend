import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
});

instance.interceptors.request.use(
  function (config) {
    const accessToken = localStorage.getItem('_token');
    const adminToken = localStorage.getItem('admin_token');
    if (accessToken) 
    {
      config.headers['Authorization'] = `Bearer ${accessToken}`;
    }
    if(adminToken)
    {
      config.headers['Authorization'] = `Bearer ${adminToken}`;
    }
    return config;
  },
  function (error)  
  {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  function (response) {
    return response;
  },
  async function (error) {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const response = await axios.post('/refresh-token', {
          refreshToken: localStorage.getItem('_refreshToken'),
        });
        localStorage.setItem('_token', response.data.access_token);
        return instance(originalRequest);
      } catch (error) {
        console.error('Token refresh failed:', error);
        localStorage.removeItem('_token');
        localStorage.removeItem('user');
        localStorage.removeItem('loggedIn');
        return Promise.reject(error);
      }
    }
    return Promise.reject(error);
  }
);

export default instance;
