import { AppWrapper, useAppContext } from "../../context/appContext";
import { Toast } from "../common/toast";
import { Footer } from "./footer";
import Header from "./header";

function Layout({ children,menus }) {
  const { state, dispatch } = useAppContext();
  const setMsgList = (list) => dispatch({type:"set_msgList",value:list});
  return (
    // <AppWrapper>

    <div className="flex flex-col h-screen justify-between">
    <Toast toastlist={state?.dynamic?.msgList} location="upleft" setList={setMsgList} />
      <Header menus={menus}/>
      <main className="mb-auto">{children}</main>
      <Footer />
    </div>
    // </AppWrapper>
  );
}
export default Layout;
