import logo from '../../assets/react.svg'
import './header.css'

export default function Header(){
  const now = new Date()

  return (
    <header>
      <img src={logo} alt="logo react" />
      <span>Час зараз: {now.toLocaleTimeString()}</span>
    </header>
  )
}