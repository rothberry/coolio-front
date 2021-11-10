import { useEffect, useState } from "react"
import "./App.css"

const App = () => {
  const [users, setUsers] = useState([])
  const [count, setCount] = useState(0)

  useEffect(() => {
    fetch("https://coolio-project.herokuapp.com/api/v1/users")
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        if (!data.error) {
          setUsers(data)
        }
      })
      .catch((err) => console.log(err))

      fetch("/hello")
        .then((r) => r.json())
        .then((data) => setCount(data.count))
  }, [])


  return (
    <div className='App'>
      <h1>Page Count: {count}</h1>
    </div>
  )
}

export default App
