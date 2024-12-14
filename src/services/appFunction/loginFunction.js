import { gapi } from 'gapi-script';

export const initializeGoogleAPI = (CLIENT_ID, callback) => {
  gapi.load('client:auth2', () => {
    gapi.auth2.init({
      client_id: CLIENT_ID,
      scope: 'openid profile email',
    }).then(callback)
      .catch((error) => {
        console.error('Error initializing Google API client:', error);
      });
  });
};

export const handleGoogleLogin = async (login_with_google) => {
  const auth2 = gapi.auth2.getAuthInstance();
  try 
  {
    const googleUser = await auth2.signIn({
      scope: 'openid profile email',
      prompt: 'select_account',
    });
    const profile = googleUser.getBasicProfile();
    const payload = { password: '12345678' };
    await login_with_google(profile.getEmail(), profile.getName(), payload.password, profile.getId());
  } 
  catch (error) 
  {
    console.error('Error signing in with Google:', error);
  }
};
