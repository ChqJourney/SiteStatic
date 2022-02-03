import "../styles/globals.css";
import {appWithTranslation} from 'next-i18next'
import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps }) {
    if(process.env.NODE_ENV==='production'){

        console.log=()=>{}
    }

    return (
        <SessionProvider session={pageProps.session}>
            <Component {...pageProps}  />
        </SessionProvider>
    );
  
}

export default appWithTranslation(MyApp);
