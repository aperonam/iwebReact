import React from 'react';
import {ListGroup,ListGroupItem} from 'react-bootstrap';
import VisitListElement from './VisitListElement'
export default class VisitList extends React.Component{
    
    render(){
        const style = ({
        })
        console.log(this.props.visits)
        return(
            <ListGroup style={{overflow:"hidden", overflowY:"scroll",maxHeight:"-webkit-fill-available"}} >
            {    this.props.visits.map(function(visit, i){
                    return <ListGroupItem key={i} style={style}><VisitListElement visit={visit} i={i} setIndex={this.props.setIndex}/></ListGroupItem>
                },this)
            }
           </ListGroup>
        )
    }
}
 