import React,{Component} from "react";


class Navbar extends Component{
    render(){
        console.log(this.props.title.name);
        return (
            <div>
                <p> {this.props.title.name} is {this.props.title.color} </p>
            </div>
        )
    }

}

// class Products extends Component {
//     render(){
//         console.log(this.props.title);
//         return (
//             <div>
//                 <p>Hello {this.props.title} {this.props.color}</p>
//             </div>
//         )
//     }
// }


export default Navbar

