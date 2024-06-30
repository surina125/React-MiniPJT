import './App.css'
import Header from './components/Header'
import Main from './components/Main'
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  const onClickButton = (num) => {
    setCount(count+num)
  }
 
  return (
    <div className='App'>
     <Header />
     <Main count={count} onClickButton={onClickButton} />
    </div>
  )
}

export default App
