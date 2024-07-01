import './App.css'
import Header from './components/Header'
import Main from './components/Main'
import { useReducer, useRef, createContext } from 'react'

const mockData = []

function reducer(todos, action) {
  switch(action.type) {
    case 'CREATE':
      return [action.data, ...todos]
    case 'UPDATE':
      return todos.map((todo) => todo.id === action.targetId ? {...todo, isDone: !todo.isDone} : todo)
    case 'DELETE':
      return todos.filter((todo) => todo.id !== action.targetId)
    }
}

export const TodosStateContext = createContext()
export const TodosDispatchContext = createContext()

function App() {
  const [todos, dispatch] = useReducer(reducer, mockData)
  const newId = useRef(0)

  const onCreate = (content) => {
    dispatch({
      type: 'CREATE',
      data: {
        id: newId.current++,
        isDone: false,
        content: content,
        date: new Date().getTime()
      }
    })
  }

  const onUpdate = (targetId) => {
    dispatch({
      type: 'UPDATE',
      targetId: targetId
    })
  }

  const onDelete = (targetId) => {
    dispatch({
      type: 'DELETE',
      targetId: targetId
    })
  }

  return (
    <div className='App'>
      <Header />
      <TodosStateContext.Provider value={todos}>
        <TodosDispatchContext.Provider value={{ onCreate, onUpdate, onDelete }}>
          <Main />
        </TodosDispatchContext.Provider>
      </TodosStateContext.Provider>
    </div>
  )
}

export default App
