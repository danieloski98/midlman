import React from 'react'
import { EditorState, RawDraftContentState, ContentState} from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'; 


const EditorConvertToHTML = (props: {editing?: Function, value?: string}) => {
  const content = ContentState.createFromText(props.value ? props.value:'');
  const [editorState, setEditorState] = React.useState(EditorState.createWithContent(content));

  React.useEffect(() => {
    const content = ContentState.createFromText(props.value as string || '')
    setEditorState(EditorState.createWithContent(content));
  }, [props.value])
  
  const onEditorStateChange: any = (State: EditorState) => {
      // setEditorState(editorState);
      // console.log(State)
      // console.log(this.state.editorState);
    };
      
      return (
        <div className='w-full flex flex-col' >
          <Editor
            editorStyle={{ width: "100%", border: "1px solid #E2E8F0", height: "300px", borderRadius: '5px', paddingLeft: '15px', paddingTop:'1px', paddingRight: '15px', paddingBottom: '10px'}}
            wrapperStyle={{width: "100%", height: '300px'}}
            onChange={(data: RawDraftContentState) => props.editing ? props.editing(data.blocks[0].text): null }
            editorState={editorState}  
            onEditorStateChange={onEditorStateChange} 
            tabIndex={2}
            /> 
        </div>
      );
}

export default EditorConvertToHTML