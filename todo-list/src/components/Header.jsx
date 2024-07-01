import './Header.css'

const Header = () => {
  const currentDate = new Date().toDateString()
  
  return (
    <header className='Header'>
      <h3>오늘은📅</h3>
      <h1 className='date'>{currentDate}</h1>
    </header>
  )
}

export default Header