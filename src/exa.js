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
import './meva.css'

class City extends Component {
    render(){
        console.log(this);
        return(
            <div className='box'>
              <img src={this.props.title.image} alt='fruit'/>
                <h2>{this.props.title.name}</h2>
            
            </div>
        )
    }
}
export default City;