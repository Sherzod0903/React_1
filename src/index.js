
import React from 'react';
import  ReactDOM  from 'react-dom/client';
// import './index'
// import './meva.css'

// import Navbar from './navbar';
import fruit from './asset/download.jpg'
import City from './exa';

const data3=[
  {name:'Apple', image: fruit},
  {name:'Apple', image: fruit},
  {name:'Apple', image: fruit},
  {name:'Apple', image: fruit},
  {name:'Apple', image: fruit},
  {name:'Apple', image: fruit},
  {name:'Apple', image: fruit},
  {name:'Apple', image: fruit},
  {name:'Apple', image: fruit}

]

// import App from './App.js'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  
  <React.StrictMode>

    <div className="container">
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
</div>
</React.StrictMode>
)

//props





