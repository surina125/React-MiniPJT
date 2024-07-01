import './Add.css'
import { useState, useRef, useContext } from 'react'
import { TodosDispatchContext } from '../../App'

const Add = () => {
  const {onCreate} = useContext(TodosDispatchContext)
  const [content, setContent] = useState("")
  const contentRef = useRef("")

  const onChangeInput = (e) => {
    setContent(e.target.value)
  }

  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      onClickButton()
    }
  }
  
  const onClickButton = () => {
    if (content === "") {
      contentRef.current.focus()
      return
    }
    onCreate(content)
    setContent("")
  }

  return (
    <div className='Add'>
      <input onKeyDown={onKeyDown} ref={contentRef} value={content} onChange={onChangeInput} placeholder='새로운 Todo' />
      <button onClick={onClickButton}>추가</button>
    </div>
  )
}

export default Add