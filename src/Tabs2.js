import React from 'react';
import ReactDOM from 'react-dom';
import './Tabs2.css';
import 'bootstrap/dist/css/bootstrap.css';

class Tabs2 extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            texts: ["First", "Second", "Third", "Fourth"],
            currentText: "First"
        }
    }
    render(){
      return(
        <div className="tabs2 row">
            <div className="buttons2 col-xl-5">
                <button onClick={()=>{this.setState({currentText: this.state.texts[0]})}}> Пример 1</button>
                <button onClick={()=>{this.setState({currentText: this.state.texts[1]})}}>Пример 2</button>
                <button onClick={()=>{this.setState({currentText: this.state.texts[2]})}}>Пример 3</button>
                <button onClick={()=>{this.setState({currentText: this.state.texts[3]})}}>Пример 4</button>
            </div>
            <div className="text2 col-xl-7">
                <p>{this.state.currentText}</p>
            </div>
        </div>
        );  
    }
}
export default Tabs2;