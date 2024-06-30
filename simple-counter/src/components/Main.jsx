import './Main.css'

const Main = ({count, onClickButton}) => {

  return (
    <main className="Main">
      <section className="count-section">
        <div>현재카운트:</div>
        <h2>{count}</h2>
      </section>

      <section className='button-section'>
        <button onClick={()=>onClickButton(-1)}>-1</button>
        <button onClick={()=>onClickButton(-10)}>-10</button>
        <button onClick={()=>onClickButton(-100)}>-100</button>
        <button onClick={()=>onClickButton(100)}>+100</button>
        <button onClick={()=>onClickButton(10)}>+10</button>
        <button onClick={()=>onClickButton(1)}>+1</button>

      </section>
    </main>
  )
}

export default Main