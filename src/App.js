import React, { Component } from 'react';
import './App.css';
import Editor from './Editor';
import Previewer from './Previewer';

class App extends Component {
  
constructor(props){
const placeholder = `
# Welcome to my React Markdown Previewer!
          
## This is a sub-heading...
### And here's some other cool stuff:
            
Heres some code, \`<div></div>\`, between 2 backticks.
          
\`\`\`
// this is multi-line code:
          
function anotherExample(firstLine, lastLine) {
if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
    }
}
\`\`\`
            
You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
and feel free to go crazy ~~crossing stuff out~~.
          
There's also [links](https://www.freecodecamp.com), and
> Block Quotes!
          
And if you want to get really crazy, even tables:
          
Wild Header | Crazy Header | Another Header?
------------ | ------------- | ------------- 
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.
          
- And of course there are lists.
  - Some are bulleted.
    - With different indentation levels.
     - That look like this.
          
          
1. And there are numbererd lists too.
1. Use just 1s if you want! 
1. But the list goes on...
- Even if you use dashes or asterisks.
* And last but not least, let's not forget embedded images:
          
![React Logo w/ Text](https://goo.gl/Umyytc)          
`

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
