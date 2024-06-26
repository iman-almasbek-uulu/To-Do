import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { addTaskInComplete, addTaskInDoing, addTaskInToDo } from './redux/state.js';

const root = ReactDOM.createRoot(document.getElementById('root'));

const Render = (state) => {
  root.render(
    <React.StrictMode>
      <App state={state} 
      addText={addTaskInToDo} 
      doing={addTaskInDoing} 
      complete={addTaskInComplete} />
    </React.StrictMode>,
  )
} 


export default Render;

