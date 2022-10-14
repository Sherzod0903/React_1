import React from "react";
 import {student} from "./mock"

class Student extends React.Component {
    constructor(props){
    super(props);
    this.state={
        count: 1,
        data:student,
        name: "",
        statuss: "",
        search:"id"
    };
    }

    render() {
      


    const onChange = (event) => {
        console.log(event.target.name);
        this.setState({[event.target.name]: event.target.value})

    }

  




const onFilter=(e)=>{
// console.log(e.target.value);
const {value}=e.target
let res=student.filter((item)=> item[this.state.search].toLowerCase().includes(value.toLowerCase()));
this.setState({data:res,});
}




const onDelete = (id )=>{
    console.log(id );
    let  res=this.state.data.filter(item=>item.id !==id)
    this.setState({data:res});
   
}



const onSelect=e=>{
  const{value}=e.target;
  this.setState({search:value})
}






const onAdd=()=>{
   let user={
    id: Date.now(),
    name: this.state.name,
    statuss: this.state.statuss
   }
   this.setState({
    data:[...this.state.data,user],
    name:'',
    statuss:''
})
}





return(

    <div>
        <h1> Name : {this.state.name}</h1>
        <h1>Status : {this.state.statuss}</h1>

      




        <input value={this.state.name}  name='name' type="text" onChange={onChange} placeholder="name" />
        <input value={this.state.statuss} name='statuss' type="text" onChange={onChange} placeholder="status " />
       
<button onClick={onAdd}>
    Add
</button>




      
       

<br/>
<br/>
<select onChange={onSelect} name="" id="">
            <option value="id">Id</option>
            <option value="name">Name</option>
            <option value="statuss">Status</option>

        </select>
<input onChange={onFilter} type="text" placeholder="filter" />

<br/>

<table border='1' width='100%'>
    <thead>
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Status</th>
            <th>Delete</th>
            <th>Edit</th>   


        </tr>
    </thead>
    <tbody>

    


        {
            this.state.data.length?
        this.state.data.map(({id,name,statuss})=> {
            return(
                <tr key={id}> 
                <td>{id}</td> 
                <td>{name} </td>
                <td> {statuss}</td>
                <td>
                    <button onClick={()=>onDelete(id)}>delete</button>
                </td>
                <td>
                    <button>edit</button>
                </td>
                </tr>
                )
            } ) : (<tr >
            <th colSpan={5}>
                <h1>no data</h1>
                </th>
            </tr>) }
        
            </tbody>
        </table>

    </div>
)

    
    }
}


export default Student;