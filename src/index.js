
import React from 'react';
import  ReactDOM  from 'react-dom/client';
import './index'
import Navbar from './navbar';
import City from './exa'


const data =[
  {name:'Apple', color:'red'},
  {name:'Banana', color:'yellow'},
  {name:'Grapes', color:'blue'},
  {name:'Cherry', color:'red'},
  {name:'Watermelon', color:'green'},

]

const data_2=[
  {name:'Tashkent', size:'Big'},
  {name:'London', size:'Enormous'},
  {name:'Seoul', size:'Bigger'},
  {name:'Kitab', size:'Smaller'},

]
const data3=[
  {name:'Shukur',meaning:'Thanks'},
  {name:'Best',meaning:'Eng Zor'},
  {name:'Mother',meaning:'Ona'}

]

// import App from './App.js'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  
  <React.StrictMode>
{
  data3.map((value)=>{
    return(
      <City title={value}/>
    )
  })}
 {/* { data.map((value)=>{
    <Navbar title={value}/>
  })
} */}

</React.StrictMode>
)

//props





