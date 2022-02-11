import { handleAuth,handleLogin } from '@auth0/nextjs-auth0';
import auth0 from './auth0'

export default auth0.handleAuth({
    async login(req, res) {
        try {
          await handleLogin(req, res, {
            authorizationParams: {
              audience: 'https://47.104.61.109/api', // or AUTH0_AUDIENCE
              // Add the `offline_access` scope to also get a Refresh Token
              scope: 'openid profile email offline_access read:post write:post' // or AUTH0_SCOPE
            }
          });
          console.log('login done')
        } catch (error) {
          res.status(error.status || 400).end(error.message);
        }
      }
});

