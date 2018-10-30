import React from 'react';
import marked from 'marked';

class MarkdownExample extends React.Component {
    getMarkdownText() {
        console.log(this.props.outputText);
      var rawMarkup = marked(this.props.outputText, {sanitize: true});
      return { __html: rawMarkup };
    }
    render() {
      return <div id="preview" dangerouslySetInnerHTML={this.getMarkdownText()} />
    }
  }

export default class Previewer extends React.Component{
    render(){
        return(
            <div className={this.props.previewClass}>
                <header>
                    <i className="fa fa-free-code-camp"/>
                    &nbsp;&nbsp;Previewer 
                    <i 
                        onClick={this.props.togglePreviewer} 
                        id="clickable-i" 
                        className={(this.props.previewerMaximized ? "fa fa-compress" : "fa fa-expand")}/>
                </header>
                <MarkdownExample outputText={this.props.output}/>
            </div>
        )
    }
}