import './Main.css'
import Add from './Main/Add'
import TodoList from './Main/TodoList'

const Main = ({onCreate, onUpdate, onDelete, todos}) => {
  
  return (
    <main className='Main'>
      <Add onCreate={onCreate} />
      <TodoList todos={todos} onDelete={onDelete} onUpdate={onUpdate} />
    </main>
  )
}

export default Main