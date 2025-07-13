/**
 * Basic Todo list component which takes a list of strings as a prop
 * @returns 
 */
import {useState} from 'react'
import './Todo.css'
import TodoItem from './TodoItem'

interface TodoProps {
  items: string[];
}

const Todo = (props: TodoProps) => {

  const [numDone, setNumDone] = useState(0);

  const inc = () => {setNumDone(numDone + 1)};
  const dec = () => {numDone > 0 ? setNumDone(numDone - 1): setNumDone(0)};

  const listRows = props.items.map(itm => {
    return <TodoItem key={itm} desc={itm} increaseCallback={inc} decreaseCallback={dec}/>
  })

  const addTask = (formData: FormData) => {
    let newTask = formData.get("newtask")?.toString();
    console.log(newTask);
  };

  return (
    <div className="todo-container">
      <h2>Todo List</h2>
      <table className="todo-table">
        <tbody>
          {listRows}
        </tbody>
      </table>
      <form action={addTask}>
        <input type="text" className="todo-input" name="newtask"></input>
        <input type="submit" value="add"></input>
      </form>
      <h3><i>{ ((numDone / props.items.length) * 100).toFixed(1) + "%"}</i></h3>
    </div>
  )
};

export default Todo