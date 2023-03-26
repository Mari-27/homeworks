import Calendar from "./Calendar";
import getNow from "./Time";
import './App.css'

const now = getNow();

function App() {
  return (
    <div>
      <Calendar date={now} />
    </div> 
  )
}

export default App;