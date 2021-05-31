import React from 'react'
import { EditorState} from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'; 


export default class EditorConvertToHTML extends React.Component {
    state = {
      editorState: EditorState.createEmpty(),
    }
  
    onEditorStateChange: any = (editorState: any) => {
      this.setState({
        editorState,
      });
    };
  
    render() {
      const { editorState } = this.state;
      return (
        <div className='w-full flex flex-col' >
          <Editor
            editorStyle={{ width: "100%", border: "1px solid #E2E8F0", height: "130px", borderRadius: '5px', paddingLeft: '15px'}}
            wrapperStyle={{width: "100%"}}
            
            editorState={editorState}  
            onEditorStateChange={this.onEditorStateChange} /> 
        </div>
      );
    }
}