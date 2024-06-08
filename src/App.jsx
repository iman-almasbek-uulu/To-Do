import './App.css'
import Header from './components/header/header'
import Tasks from './components/main/tasks'

function App(props) {

  return (
    <div>
      <Header />
      <div className="container">
        <Tasks state={props.state} />
      </div>
    </div>
  )
}

export default App
