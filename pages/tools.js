import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useContext, useState } from "react";
import { SpinButton } from "../components/common/spinButton";
import { generateToast, Toast } from "../components/common/toast";
import { spinnerCore } from "../components/iconInSVG/commonSVG";
import { ToolCard } from "../components/layouts/toolcard";
import { AppContext, useAppContext } from "../context/appContext";
import tools from "../public/site/tools.json";

function Tools() {
  const {state,dispatch}=useAppContext()
  function simulateNetworkRequest() {
    return new Promise((resolve) => setTimeout(resolve, 2000));
  }
  
  return (
    <div className="container mx-auto mt-12 h-full flex flex-col">
      <div className="grid grid-cols-4 gap-4">
        {tools.map((m) => (
          <ToolCard key={m.id} tool={m} />
        ))}
      </div>
     

      <button
        className="btn-color w-48 my-4"
        onClick={() => dispatch({ type: "add_number", value: 1 })}
      >
        add
      </button>
      <div>{state?.static?.number}</div>


      <button
        className="btn-primary w-48 my-4"
        onClick={() =>
          dispatch({
            type: "send_msg",
            value: generateToast("success", "blog by reducer",state?.dynamic?.msgList),
          })
        }
      >
        Show by reducer
      </button>
    </div>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "footer", "header"])),
    },
  };
}
export default Tools;
