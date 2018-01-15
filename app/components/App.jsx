import React from 'react';
import ReactDOM from 'react-dom';
import './../assets/scss/main.scss';
import VisitList from './VisitList'
import Detail from './Detail'
import {visitsMock} from './../assets/mock-data'
import {Bootstrap, Grid, Row, Col} from 'react-bootstrap';

export default class App extends React.Component {

  

  getInitialState(){
    return {
      id : 0,
      jsonDownloaded : false,
      visits : visitsMock
    }
  }

  constructor(){
    super()
    this.setIndex = this.setIndex.bind(this)
    
    this.state = {
      id : 0,
      jsonDownloaded : false

    }
  }
  setIndex(val){
    console.log("vale", val);
    this.setState({
      id : val,
      jsonDownloaded : true
    });
  }
  componentDidMount(){
    if(!this.state.jsonDownloaded){
    fetch("https://dcrmt.herokuapp.com/api/visits/flattened?token=17883e3122e6e910dcc5")
      .then(res => res.json())
      .then(resJson => {
          console.log(resJson)
          this.setState({
            jsonDownloaded : true,
            visits : resJson
          })
      })
     
    console.log("mounted")
    }
  }
  
  

  render() {
    
    //console.log("visists: ",this.state.visits)
    if(!this.state.jsonDownloaded){
      return (<p>loading...</p>)
    }
    return (
      <Grid style={{width:"100%"}}>
        <Row className="show-grid">
          <Col lg={4} md={4} xs={12} style={{padding:"0"}}>
            <VisitList  visits={this.state.visits} setIndex ={this.setIndex}/>
          </Col>
          <Col xs={12} md={8} lg={8} style={{height:"100%", padding:"25px"}}>
            <div id ="detail">
              <Detail visit={this.state.visits[this.state.id]}/>
            </div>
          </Col>
        </Row>
      </Grid>
      
    );
  }
}

