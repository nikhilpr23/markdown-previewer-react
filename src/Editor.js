import React from 'react';

export default class Editor extends React.Component{
    render(){
        return(
        <div className={this.props.editorClass}>
            <header>
                <i className="fa fa-free-code-camp"/>
                &nbsp;&nbsp;Editor
                <i 
                    onClick={this.props.toggleEditor} 
                    id="clickable-i" 
                    className={(this.props.editorMaximized ? "fa fa-compress" : "fa fa-expand")}/>
            </header>
            <textarea id="editor" value={this.props.input} onChange={this.props.onChange}/>
        </div>
        )
    }
}