import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));

const Render = (state) => {
  root.render(
    <React.StrictMode>
      <App state={state}/>
    </React.StrictMode>,
  )
} 


export default Render;

