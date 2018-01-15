import React from 'react';
export default class VisitListElement extends React.Component{
    
    handleClick(){
        console.log("click")
        return this.props.setIndex(this.props.i)
       
    }
    render(){
        console.log("elements")
        return(
            <ul onClick={this.handleClick.bind(this)} onMouseOver="" style={{cursor:'pointer'}}>
                {
                 <li style={{borderBottom : "1px solid", listStyle:"none"}} key={this.props.i*5} >
                    Nombre vendedor: {this.props.visit.Salesman.fullname}
                </li>
                }   
                {
                <li style={{listStyle:"none"}} key={this.props.i*5+1}>
                    Nombre cliente: {this.props.visit.Customer.name}
                </li>
                }
           </ul>
        )
    }
}
 