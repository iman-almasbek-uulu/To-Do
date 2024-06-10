import './App.css'
import Header from './components/header/header'
import Tasks from './components/main/tasks'

function App(props) {

  return (
    <div>
      <Header state={props.state.listToDo.list} addText={props.addText}/>
      <div className="container">
        <Tasks state={props.state} 
          doing={props.doing}
          complete={props.complete}
        />
      </div>
    </div>
  )
}

export default App
