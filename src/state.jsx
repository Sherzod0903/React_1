import React from "react";
import {student} from "./mock"

class Student extends React.Component{
 constructor(props)
{
    super(props);
    this.state={
        data:student,
        name:'',
        status:'',
        count:1,

    };
    



}
render(){
    const onChange= (event) => {
        console.log(event);
        this.setState({name:event.target.value})
      }
      const onChang= (event) => {
       console.log(event);
        this.setState({status:event.target.value})
      }

      const plus=()=>{
        if (this.state.count<10)
        this.setState({count:this.state.count+1})
      }


      const minus=()=>{
        if (this.state.count>1)
        this.setState({count:this.state.count-1})
      }


      const onFilter=(e)=>{
        const {value}=e.target;
        let res=student.filter((item)=> item.name.toLowerCase().includes(value.toLowerCase()))
        this.setState({
            data:res,
        });
      }


const onDelete=(id)=>{
  let ress=this.state.data.filter(item=>item.id !==id)
  this.setState({
    data:ress
  })

}

const onAdd =()=>{
  let user={
    id:Date.now(),
    name:this.state.name,
    status:this.state.status
  }
  this.setState({
    data:[...this.state.data,user],
    name:'',
    status:''
  })
}

    return(

        <div> 
            <h1> Name : {this.state.name}</h1>
            <h1> Status : {this.state.status}</h1>
            <h1>State: { this.state.count}</h1>

      <input   value={this.state.name}  type="text" onChange={onChange} placeholder="name" />
        <input value={this.state.status} onChange={onChang} type="text" placeholder="Status"/>
        <button onClick={onAdd}>Add</button><br/>
        <br />
        <button onClick={plus}>+</button>
        <button onClick={minus}>-</button><br /><br />
        
        <input onChange={onFilter} type="search" placeholder="search"/>

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

            {this.state.data.map(({id,name,status})=>{
              return(
                <tr key={id}> 

                <td >{id}</td>
                <td>{name}</td>
                <td>{status}</td>
                <td> 
                  <button onClick={()=>onDelete(id)}>delete</button>
                  </td>
                  <td> 
                <button>edit</button>
                  </td>


                </tr>
                )
              })}

              </tbody>
              </table>



                {/* second state add delete */}


            


        </div>
    
    )


}
}




export default Student;




