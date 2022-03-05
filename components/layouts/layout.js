import { AppWrapper, useAppContext } from "../../context/appContext";
import { Toast } from "../common/toast";
import { Footer } from "./footer";
import Header from "./header";
import { Modal } from "./modal";

function Layout({ children, menus }) {
  const { state, dispatch } = useAppContext();
  const setMsgList = (list) => dispatch({ type: "set_msgList", value: list });
  console.dir(state?.dynamic?.modalChild)
  return (
    <div className={`flex flex-col relative h-screen justify-between ${state.dynamic.modalOpen&&"overflow-hidden"}`}>
      <Toast
        toastlist={state?.dynamic?.msgList}
        location="upleft"
        setList={setMsgList}
      />

      <Modal
        isOpen={state.dynamic.modalOpen} postion={state.dynamic.modalPostion} 
        handleClose={()=>dispatch({ type: "handle_modal", value:{status:false} })}
      >
        {state?.dynamic?.modalChild}
      </Modal>
      <Header menus={menus} />
      <main className="mb-0 overflow-x-auto">{children}</main>
      <Footer />
    </div>
  );
}
export default Layout;
