/* eslint-disable react/display-name */
// HOC/withAuth.jsx
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

function verifyToken(token,rtoken){

}

export default function withAuth (WrappedComponent) {
  return (props) => {
    const Router = useRouter();
    const [verified, setVerified] = useState(false);

    useEffect( () => {
      const {accessToken,refreshToken} = localStorage.getItem("user");
      // if no accessToken was found,then we redirect to "/" page.
      if (!accessToken) {
        Router.replace("/");
      } else {
        // we call the api that verifies the token.
        const data =  verifyToken(accessToken,refreshToken);
        // if token was verified we set the state.
        if (data.verified) {
          setVerified(data.verified);
        } else {
          // If the token was fraud we first remove it from localStorage and then redirect to "/"
          localStorage.removeItem("accessToken");
          Router.replace("/login");
        }
      }
    }, []);

    if (verified) {
      return <WrappedComponent {...props} />;
    } else {
      return null;
    }
  };
};

