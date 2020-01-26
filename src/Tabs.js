import React from 'react';
import ReactDOM from 'react-dom';
import './Tabs.css';

class Tabs extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            texts: ["First", "Two", "Three"],
            currentText: "First"
        }
    }
    render(){
      return(
        <div className="tabs">
            <div className="buttons">
                <button onClick={()=>{this.setState({currentText: this.state.texts[0]})}}> Пример 1</button>
                <button onClick={()=>{this.setState({currentText: this.state.texts[1]})}}>Пример 2</button>
                <button onClick={()=>{this.setState({currentText: this.state.texts[2]})}}>Пример 3</button>
            </div>
            <div className="text">
                <p>{this.state.currentText}</p>
            </div>
        </div>
        );  
    }
}
export default Tabs;