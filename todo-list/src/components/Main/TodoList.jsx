import './TodoList.css'
import TodoListItem from './TodoListItem'
import { useState, useContext } from 'react'
import { TodosStateContext } from '../../App'

const TodoList = () => {
  const todos = useContext(TodosStateContext)
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
        {filteredTodos.map((todo)=><TodoListItem key={todo.id} {...todo} />)}
      </section>
    </div>
  )
}

export default TodoList