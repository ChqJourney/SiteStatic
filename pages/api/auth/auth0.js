import { initAuth0 } from '@auth0/nextjs-auth0';

export default initAuth0({
  secret: '3b15bf635411f7f50b24eaf26d6a636487940d4498c364d7f258c3e034e1a612',
  issuerBaseURL: 'https://photonee.us.auth0.com',
  baseURL: 'http://localhost:3000',
  clientID: 'MFSnTZzpvxl31X9ZxoyXm1EloKM8CSXu',
  clientSecret: 'ztk9E-v_Uh4eDS0dW32rztlMkwxbSGMWV24PZ58lc3bXlLCVdg_cVgRyVetbj1s7',
  authorizationParams:{
      response_type:'code id_token',
      scope:'openid profile read:post write:post'
  }
});