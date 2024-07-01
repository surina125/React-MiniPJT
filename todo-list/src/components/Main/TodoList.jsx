import './TodoList.css'
import TodoListItem from './TodoListItem'
import { useState } from 'react'

const TodoList = ({todos, onDelete, onUpdate}) => {
  const [search, setSearch] = useState("")

  const getFilteredTodos  = () => {
    return todos.filter((todo) => todo.content.toLowerCase().includes(search.toLowerCase()))
  }

  const filteredTodos = getFilteredTodos()

  const onChangeSearch = (e) => {
    setSearch(e.target.value)
  }

  return (
    <div className="TodoList">
      <h3>Todo List🌱</h3>
      <section className='todo-section'>
        <input className='searchInput' value={search} onChange={onChangeSearch} placeholder='검색어를 입력하세요' />
        {filteredTodos.map((todo)=><TodoListItem key={todo.id} {...todo} onDelete={onDelete} onUpdate={onUpdate} />)}
      </section>
    </div>
  )
}

export default TodoList