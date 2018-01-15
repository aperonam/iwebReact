import React from 'react';
import {ListGroup,ListGroupItem} from 'react-bootstrap';
export default class Detail extends React.Component{
    
    render(){
        const salesman  = this.props.visit["Salesman"]
        const plannedFor  = this.props.visit["plannedFor"]
        const fulfilledAt  = this.props.visit["fullfiledAt"]
        const notes  = this.props.visit["notes"]
        const customer = this.props.visit["Customer"]
        
        console.log("detail")
        return(
            <ListGroup style={{ listStyle:"none",border:"2px solid"}} >
                {<ListGroupItem>Planeado para: {plannedFor}</ListGroupItem>}   
                {<ListGroupItem>Realizado en: {fulfilledAt}</ListGroupItem>}
                {<ListGroupItem>Nombre del vendedor: {salesman.fullname}</ListGroupItem>}
                {<ListGroupItem>Notas: {notes}</ListGroupItem>}
                {<ListGroupItem>Nombre del Cliente: {customer.name}</ListGroupItem>}
                {<ListGroupItem>Direccion:
                    <ListGroup style={{ listStyle:"none"}} >  
                        <ListGroupItem>    {customer.address1}</ListGroupItem>
                        <ListGroupItem>    {customer.address2}</ListGroupItem>
                        <ListGroupItem>    {customer.postalCode}</ListGroupItem>
                        <ListGroupItem>    {customer.city}</ListGroupItem>
                    </ListGroup>
                </ListGroupItem>}
            
           </ListGroup>
        )
    }
}
 