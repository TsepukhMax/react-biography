import { useRef, useState } from "react"
import Button from "./button/button"

function StateVsRef() {
  const input = useRef()
  const [show, setShow] = useState(false)

  function handleKeyDown(event) {
    if (event.key === 'Enter'){
      setShow(true);
    }
  }

  console.log(input);

  return (
    <div>
      <h3>Input value: {show && input.current.value}</h3>
      <input 
        type="text"
        ref={input}
        className="control"
        onKeyDown={handleKeyDown}
      />
    </div>
  )
}

export default function FeedbackSection() {
  const [name, setName] = useState('');
  const [hasError, setHasError] = useState(false);
  const [reason, setReason] = useState('help');

  function handleNameChange(event){
    setName(event.target.value);
    setHasError(event.target.value.trim().length === 0)
  }

  return (
    <section>
      <h3>Зворотній зв'язок</h3>

      <form style={{marginBottom: '1rem'}}>
        <label htmlFor="name">Ваше ім'я</label>
        <input 
        type="text" 
        id="name" 
        className="control" 
        value={name}
        style={{
          border: hasError ? '2px solid red' : null,
        }}
        onChange={handleNameChange}
      />

        <label htmlFor="reason">Причина звернення</label>
        <select 
          id="reason" 
          className="control" 
          value={reason} 
          onChange={(event) => setReason(event.target.value)}
        >
          <option value="help">Потрібна підсказка</option>
          <option value="contact">Потрібені контакти</option>
          <option value="error">Помилка</option>
          <option value="other">Інше</option>
        </select>

        <pre>
          Name: {name}
          <br />
          Reason: {reason}
        </pre>

        <Button disabled={hasError} >Відправити</Button>
      </form>

      <hr />
      <StateVsRef />
    </section>
  )
}