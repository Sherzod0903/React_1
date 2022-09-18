import React from 'react';
import data from '../data'


class Table extends React.Component{
constructor(props){
    super(props);

    this.state={
        name:'',
        surname: '',
        address:'',
        student : data
       
    }
}
render(){


const onName=(e)=>{
    const {value,name}=e.target
    this.setState({[name]:value})
    
}
const onSearch=(e)=>{
    const {value}=e.target
    const res=data.filter(({id,name,status})=>name.toLowerCase().includes(value.toLowerCase())
    )
    this.setState({student:res})
}


    return(
    <div>
    <h1>Name : {this.state.name}</h1>
    <h1>Surname: {this.state.surname}</h1>
    <h1>Adress: {this.state.address}</h1>


    <input type="text" name='name' placeholder=' Name ' onChange={onName} />  <br/><br/>
    <input type="text"name='surname' placeholder=' Surname ' onChange={onName} /><br/><br/>
    <input type="text"name='address' placeholder=' Address ' onChange={onName} /><br/><br/>
        <input type="text" placeholder='Search...' onChange={onSearch} />
    <h1>Search </h1>
 <div className="container">

    {                           //value.id
        this.state.student.map(({id,name,status})=>{
            return( <ul className="students">
            <li className="student-id">{id}</li>
            <li className="student-name">{name}</li>
            <li className="student-status">{status}</li>
        </ul>)
               
        })
    }

 </div>

    </div>
    
    )
    
    }

}

export default Table;


// const onSurname=(e)=>{
//     const {value}=e.target
//     this.setState({surname: value})
    
// }
// const onAddres=(e)=>{
//    const {value}=e.target
//     this.setState({address:value})
    
// }
 