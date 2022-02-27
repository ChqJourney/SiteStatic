import dynamic from "next/dynamic";

export const initialState = {
  static: { number: 0, theme: "normal" },
  dynamic: {
      msgList:[]
  },
};
export const AppReducer = (state, action) => {
  switch (action.type) {
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
