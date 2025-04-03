import classes from './button.module.css'

export default function Button({children, isSelected, ...props}) {

  return (
  <button 
    {...props}
    className={isSelected ? `${classes.button} ${classes.selected}` : classes.button} 
  >
    {children}
  </button>
  )
}