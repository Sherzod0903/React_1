// this.state  - render qilib beradi
// this.setState - ekranda uzgartririb beradi
// const Lan =(event)=>{
//               e.target.value          ---   malumotni backend ga olib beradi
// }




import React  from 'react'

class State extends React.Component{
    constructor(props){
        super(props);
        console.log('constructor');
        this.state={
            son : 0,
            title:''
        }

    }
render(){

    



    const plus=()=>{
        console.log('plusss');
        this.setState({son: this.state.son+1})

}


const minus =()=>{
    console.log(minus);
    if(this.state.son>0){

        this.setState({son:this.state.son-1})    
    }
}


console.log('render');
console.log(this.state.son);


const getName=(e)=>{
    console.log(e.target.value);
    this.setState({title:e.target.value})
}
const SelectLanguages=(e)=>{
        console.log(e.target.value);
}

    return(
          <div>
            <h1>Hello, {this.state.son} : {this.state.title}</h1>
            <button onClick={plus}>+</button>
            <button onClick={minus}>-</button>
            <input type="text" placeholder='name' onChange={getName}/>
            <select onChange={SelectLanguages}>
            <option value="en">En</option>
            <option value="ru">Ru</option>
            <option value='Uz'>Uz</option>

            </select>
          </div>

    )
}



}
export default State