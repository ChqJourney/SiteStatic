import { AppWrapper, useAppContext } from "../../context/appContext";
import { Toast } from "../common/toast";
import { Footer } from "./footer";
import Header from "./header";
import { Modal } from "./modal";

function Layout({ children, menus }) {
  const { state, dispatch } = useAppContext();
  const setMsgList = (list) => dispatch({ type: "set_msgList", value: list });
  return (
    // <AppWrapper>

    <div className="flex flex-col h-screen justify-between">
      <Toast
        toastlist={state?.dynamic?.msgList}
        location="upleft"
        setList={setMsgList}
      />

      <Modal
        isOpen={state.dynamic.modalOpen} 
        handleClose={()=>dispatch({ type: "handle_modal", value:{status:false} })}
      >
        {state.dynamic.modalChild}
      </Modal>
      <Header menus={menus} />
      <main className="mb-auto">{children}</main>
      <Footer />
    </div>
    // </AppWrapper>
  );
}
export default Layout;
