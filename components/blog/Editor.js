import { createReactEditorJS } from "react-editor-js";
import { EDITOR_JS_TOOLS } from "./EditorConstants";


const CustomEditor = () => {
  const Editor=createReactEditorJS()
    
    return (

        <Editor tools={EDITOR_JS_TOOLS} />

    );
}

export default CustomEditor;