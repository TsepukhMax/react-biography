import './button.css'

export default function Button({children, buttonClick, isSelected}){

  return (
  <button 
    className={isSelected ? 'button selected' : 'button'} onClick={buttonClick}>
      {children}
    </button>
  )
}