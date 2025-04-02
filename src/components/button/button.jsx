import './button.css'

export default function Button({children, buttonClicked, isSelected}){

  return (
  <button 
    className={isSelected ? 'button selected' : 'button'} onClick={buttonClicked}>
      {children}
    </button>
  )
}