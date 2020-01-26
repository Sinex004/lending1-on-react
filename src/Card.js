import React from 'react';
import ReactDOM from 'react-dom';
import './Tabs.css';
import 'font-awesome/css/font-awesome.min.css';

class Tabs extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            text: "",
            arrow:<i className="fa fa-angle-down"></i>
        };
    }
    render(){
        return(
            <div onMouseLeave={() => {this.setState({text:"", arrow:<i className="fa fa-angle-down"></i>})}} className="card">
                <p></p>
                <p>{this.props.title}</p>
                <p className="c">{this.state.text}</p>
                <div onMouseOver={() => {this.setState({text: this.props.text, arrow:<i className="fa fa-angle-up"></i>})}}  className="arrow-area">{this.state.arrow}</div>
            </div>
        )
    }

}

export default Tabs;