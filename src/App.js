import React, { Component } from 'react';
import './App.css';
import Editor from './Editor';
import Previewer from './Previewer';
import { placeholder } from './placeholder';

class App extends Component {
  
  constructor(props){
    super(props)
    this.state = {
      value : placeholder,
      editorClass: 'editor-container',
      previewClass: 'previewer-container',
      editorMaximized: false,
      previewerMaximized: false
    }
    this.changeHandler = this.changeHandler.bind(this);
    this.editorToggle = this.editorToggle.bind(this);
    this.previewerToggle = this.previewerToggle.bind(this);
  }

  //Below function is failing the test since there is no value at load time, but I feel it is a cleaner way to get a text stream, instead of clustering the code with declared text
  /*componentDidMount(){
    const textAPI = fetch('https://gist.githubusercontent.com/nikhilpr23/afd36b8b99bcffd2083766967fa0f7c3/raw/b3c969c6c80f20df1f4e273627d24c07c5c013d4/randomUnmarkedText.txt');
    textAPI.then(res => res.text()).then((data) => this.setState({value: data}));
  }*/

  editorToggle(){
    (!this.state.editorMaximized ?
    this.setState({
      editorMaximized: !this.state.editorMaximized,
      editorClass: 'editor-container-maximized',
      previewClass: 'no-display'
    }) :
    this.setState({
      editorMaximized: !this.state.editorMaximized,
      editorClass: 'editor-container',
      previewClass: 'previewer-container'
    }))
  }

  previewerToggle(){
    (!this.state.previewerMaximized ?
    this.setState({
      previewerMaximized: !this.state.previewerMaximized,
      previewClass: 'previewer-container-maximized',
      editorClass: 'no-display'
    }) :
    this.setState({
      previewerMaximized: !this.state.previewerMaximized,
      editorClass: 'editor-container',
      previewClass: 'previewer-container'
    }))
  }

  changeHandler(e){
      this.setState({
        value: e.target.value
      })
  }

  render() {
    return (
      <div className="container">
        <Editor 
          editorClass={this.state.editorClass} 
          input={this.state.value} 
          onChange={this.changeHandler}
          editorMaximized={this.state.editorMaximized}
          toggleEditor={this.editorToggle}/>
        <Previewer 
          previewClass={this.state.previewClass}
          output={this.state.value}
          previewerMaximized={this.state.previewerMaximized}
          togglePreviewer={this.previewerToggle}/>
      </div>
    );
  }
}

export default App;
