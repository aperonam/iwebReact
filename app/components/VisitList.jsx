import React from 'react';
import VisitListElement from './VisitListElement'
export default class VisitList extends React.Component{
    
    render(){
        const style = ({
            marginBottom : "10px",
            border: "2px solid",
            listStyle:"none"

        })
        console.log(this.props.visits)
        return(
            <ul style = {{width:"20%"}}>{
                this.props.visits.map(function(visit, i){
                    return <li key={i} style={style}><VisitListElement visit={visit} i={i} setIndex={this.props.setIndex}/></li>
                },this)
            }
           </ul>
        )
    }
}
 