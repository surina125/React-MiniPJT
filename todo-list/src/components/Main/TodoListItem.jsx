import './TodoListItem.css'

const TodoListItem = ({onDelete, onUpdate, id, isDone, content, date}) => {
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