import { useState, useEffect } from 'react'
import './Todo.css'

interface TodoItemProps {
  desc: string;
  increaseCallback: Function;
  decreaseCallback: Function;
}

const TodoItem = ({desc, increaseCallback, decreaseCallback}: TodoItemProps) => {

  const [done, setDone] = useState(false);

  useEffect(() => {
    done ? increaseCallback() : decreaseCallback();
  }, [done])

  return (
    <tr className="todo-row">
      <td>{ done ? <s>{desc}</s> : desc }</td>
      <td><input type="checkbox" onChange={_v => setDone(!done)}></input></td>
    </tr>
  )
}

export default TodoItem;