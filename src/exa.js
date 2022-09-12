// import React,{Component} from 'react';

// class City extends Component{
// render()
// {
//     console.log(this.props.title.name);
//     return(
//         <div>
//             <p>{this.props.title.name} is {this.props.title.size}</p>
//         </div>
//     )
// }



// }
// export default City


import React,{Component} from 'react';

class City extends Component {
    render(){
        
        return(
            <div>
                <p>{this.props.title.name} is {this.props.title.meaning}</p>
            </div>
        )
    }
}
export default City;