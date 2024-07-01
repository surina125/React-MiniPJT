import './TodoListItem.css'
import { useContext } from 'react'
import { TodosDispatchContext } from '../../App'

const TodoListItem = ({id, isDone, content, date}) => {
  const {onDelete, onUpdate} = useContext(TodosDispatchContext)

  const onClickDeleteButton = (id) => {
    onDelete(id)
  }

  return (
    <div className='TodoListItem'>
      <input onChange={()=>onUpdate(id)} checked={isDone} type="checkbox" />
      <div className='content'>{content}</div>
      <div className='date'>{new Date(date).toLocaleDateString()}</div>
      <button className='deleteButton' onClick={()=>onClickDeleteButton(id)}>삭제</button>
    </div>
  )
}

export default TodoListItem