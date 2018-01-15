import React from 'react';

export default class Detail extends React.Component{
    
    render(){
        const style = ({
            marginBottom : "10px",
            border: "2px solid",
            listStyle:"none"

        })
        console.log()
        return(
            <ul style = {{width:"20%"}}>{
                this.props.visit.map(function(detail, i){
                    return <li key={i} style={style}>"detail: " {detail}</li>
                },this)
            }
           </ul>
        )
    }
}
 