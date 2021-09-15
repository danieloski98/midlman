import React from 'react'
import { EditorState, RawDraftContentState} from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'; 


const EditorConvertToHTML = (props: any) => {
  const [editorState, setEditorState] = React.useState(EditorState.createEmpty());
  
  
  const onEditorStateChange: any = (editorState: any) => {
      setEditorState(editorState);
      // console.log(this.state.editorState);
    };
      
      return (
        <div className='w-full flex flex-col' >
          <Editor
            editorStyle={{ width: "100%", border: "1px solid #E2E8F0", height: "300px", borderRadius: '5px', paddingLeft: '15px', paddingTop:'1px', paddingRight: '15px', paddingBottom: '10px'}}
            wrapperStyle={{width: "100%", height: '300px'}}
            onChange={(data: RawDraftContentState) => props.editing(data.blocks[0].text)}
            editorState={editorState}  
            onEditorStateChange={onEditorStateChange} /> 
        </div>
      );
}

export default EditorConvertToHTML