import React from "react";


class Card extends React.Component{
    render(){
        return(
            <div className="container"> 
            <img className="im" src={this.props.src} alt="fruit" />
            <h3 className="title">{this.props?.title}</h3>
            
            
            </div>
            
        )
    }
}
export default Card;