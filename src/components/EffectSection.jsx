import { useCallback, useEffect, useState } from "react";
import Button from "./button/button"
import Modal from "./modal/Modal"
import useInput from "./hooks/useInput";

export default function EffectSection() {
  const input = useInput()
  const [isModulOpen, setIsModulOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);

  const fetchUsers = useCallback(async() => {
    setLoading(true)
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await response.json()
    setUsers(users)
    setLoading(false)
  }, [])

  // useEffect(() => {
  //   async function fetchUsers() {
  //     setLoading(true)
  //     const response = await fetch('https://jsonplaceholder.typicode.com/users')
  //     const users = await response.json()
  //     setUsers(users)
  //     setLoading(false)
  //   }

  //   fetchUsers()
  // }, [])

  useEffect(() => {
    fetchUsers()
  }, [fetchUsers])

  return (
    <section>
      <h3>Effects</h3>

      <Button onClick={() => setIsModulOpen(true)}>Відкрити інформацію</Button>

      <Modal open ={isModulOpen}>
        <h3>Hello from modul</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio doloremque, quidem corrupti exercitationem eligendi accusamus excepturi deleniti ducimus vitae ipsa earum odit quisquam. Id, in quae ratione repellendus facilis quas.</p>
        <Button onClick={() => setIsModulOpen(false)}>Close</Button>
      </Modal>

      {loading && <p>Loading...</p>}
      {!loading && (
        <>
          <input type="text" className="control" {...input} />
          <ul>
            {users.filter(user => user.name.toLowerCase().includes(input.value.toLowerCase())) .map((user) => (
              <li key={user.id}>{user.name}</li>
            ))}
          </ul>
        </>
      )}
    </section>
  )
}