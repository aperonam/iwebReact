import React from 'react';
import {ListGroup,ListGroupItem} from 'react-bootstrap';
export default class VisitListElement extends React.Component{
    
    handleClick(){
        console.log("click")
        return this.props.setIndex(this.props.i)
       
    }
    render(){
        
        return(
            <ListGroup onClick={this.handleClick.bind(this)} onMouseOver="" style={{cursor:'pointer',padding:"0",}}>
                {
                 <ListGroupItem  key={this.props.i*5} >
                    Nombre vendedor: {this.props.visit.Salesman.fullname}
                </ListGroupItem>
                }   
                {
                <ListGroupItem  key={this.props.i*5+1}>
                    Nombre cliente: {this.props.visit.Customer.name}
                </ListGroupItem>
                }
           </ListGroup>
        )
    }
}
 