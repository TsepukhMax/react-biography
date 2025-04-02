import { differences } from "../data"
import Button from "./button/button"
import { useState } from "react"

export default function ButtonSection(){
  const [contentType, setContent] = useState(null);

  function handleClick(type){
    setContent(type);
  }

  return (
    <section>
      <h3>Чим це навчання відрізняється від інших?</h3>
      <Button isSelected={contentType === 'html'} buttonClicked={() => handleClick('html')}>HTML</Button>
      <Button isSelected={contentType === 'css'} buttonClicked={() => handleClick('css')}>SCC</Button>
      <Button isSelected={contentType === 'js'} buttonClicked={() => handleClick('js')}>JavaScript</Button>

      {!contentType && <p>Натисни на кнопку</p>}
      {contentType && <p>{differences[contentType]}</p>}
    </section>
  )
}