
import React from 'react';
import  ReactDOM  from 'react-dom/client';
import './index'
import Navbar from './navbar';


const data =[
  {name:'Apple', color:'red'},
  {name:'Banana', color:'yellow'},
  {name:'Grapes', color:'blue'},
  {name:'Apple', color:'red'},
  {name:'Watermelon', color:'green'},

]

// import App from './App.js'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  
  <React.StrictMode>
{
  data.map((value)=>{
    return(
      <Navbar title={value}/>
    )
  })
}

</React.StrictMode>
)

//props