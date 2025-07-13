import './App.css'
import Todo from './Todo.tsx'

function App() {
  return (
    <>
      <h1>React Laboratory</h1>
      <Todo items={['Take garbage out', 'Shower', 'Wash car']}/>
    </>
  )
}

export default App
