
import React from 'react';
import  ReactDOM  from 'react-dom/client';
import './index.css'
import Nav from './nav'
import Footer from './footer'
// import App from './App.js'

const root = ReactDOM.createRoot(document.getElementById('root'))
const name = 'Sher'

root.render(
  
  <React.StrictMode>
    <Footer/>
<h1>Hello  {name}</h1>
<Nav/>
  </React.StrictMode>
)