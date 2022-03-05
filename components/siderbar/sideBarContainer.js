import { useAppContext } from "../../context/appContext";
import { siderMenus } from "../../pages/tutorial";
import { MenuList } from "./menuList"
import { SearchElement } from "./searchelement"
import { SiderBar } from "./siderbar"

export const SideBarContainer=({theme})=>{
    const {state, dispatch } = useAppContext();
    return (
        <>
      {!state.dynamic.modalOpen&&<button
        onClick={() =>
          dispatch({
            type: "handle_modal",
            value: { status: true, postion: "left",child:<SiderBar menus={siderMenus} theme={theme} isStatic={true}/>},
            
          })
        }
        className="absolute left-2 flex top-0 lg:hidden ring items-center justify-center rounded-lg w-10 h-10"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 8h16M4 16h16"
          />
        </svg>
      </button>}
      <SiderBar menus={siderMenus} theme={theme}/>
    </>
    )
}