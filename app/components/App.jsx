import React from 'react';
import ReactDOM from 'react-dom';
import './../assets/scss/main.scss';
import VisitList from './VisitList'
import Detail from './Detail'
import {visits} from './../assets/mock-data'
export default class App extends React.Component {
  getInitialState(){
    return {
      id : 0
    }
  }

  constructor(){
    super()
    this.setIndex = this.setIndex.bind(this)
  }
  setIndex(val){
    console.log("vale", val);
    this.setState({
      id : val
    },() => {this.updateState()});
  }
  updateState(){ 
    console.log("valeaa", this.state.id);
    console.log("valeaaddd", this.state);
    const element =(<div>{this.state.id}</div>);
    ReactDOM.render(
      element,
      document.getElementById('indexApp')
    );
    
    console.log(visits[this.state.id])
   /* ReactDOM.render(
      <Detail visit={visits[this.state.id]}/>,
      document.getElementById('container')
    );*/
  }
  
  
  render() {

      return (
      <div id="container">
        
        <VisitList  visits={visits} setIndex ={this.setIndex}/>
        <div id ="indexApp" style ={{float:"left"}}></div>
        
        <br style= {{clear:"both"}}/>
      </div>

    );
  }
}

