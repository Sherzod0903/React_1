import React from "react";

class Form extends React.Component{
    constructor(props){
        super(props);
        this.state={
            email:'',
            password:''
        }

    }
render(){

const getForm=(e)=>{
    const {value,name}=e.target;
    this.setState({[name] : value})
}

return(
    <div className="form">
       <div className="form2">
        <h2>SIGN UP</h2>
        <h3>Given e-mail : {this.state.email}</h3>
        <input className=" kir" type="email" name='email' placeholder=" Email" onChange={getForm} />
        <h3>Given password : {this.state.password}</h3>
        <input className=" kir"  type="password" name='password' placeholder=" Password" onChange={getForm} /><br/>
        <button  onChange={getForm}> SIGHN UP</button>
        
        
        
        {/* <div className="chiziq">
            <hr className="chiz"></hr>
            <div className="or"><p> Or</p> </div>
            <hr className="chiz"></hr>

            </div>
 */}

    </div></div>
)

}



}

export default Form;