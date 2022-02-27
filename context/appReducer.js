import dynamic from "next/dynamic";

export const initialState = {
  static: { user: {}, theme: "normal" },
  dynamic: {
      msgList:[],
      modalOpen:false,
      modalChild:{}
  },
};
export const AppReducer = (state, action) => {
  switch (action.type) {
    
    case 'handle_modal':{
      return {
        ...state,
        dynamic:{
          ...state.dynamic,
          modalOpen:action.value.status,
          modalChild:action.value.child
        }
      }
    }
    case "add_number": {
      return {
        ...state,
        static: {
          ...state.static,
          number: action.value + state.static.number,
        },
      };
    }
    case "init_stored": {
      return {
        ...state,
        static: action.value,
      };
    }
    case "send_msg":{
        return {
            ...state,
            dynamic:{
                ...state.dynamic,
                msgList:[...state.dynamic.msgList,action.value]
            }
        }
    }
    case "set_msgList":{
        return {
            ...state,
            dynamic:{
                ...state.dynamic,
                msgList:[...action.value]
            }
        }
    }
  }
};
