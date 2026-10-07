import React from 'react'
import ChildComponent from './ChildComponent'

const App = () => {
  const user = [{
    username: "Harshit",
    email: "harshit@example.com",
    section: "A"
  },
  {
    username: "abc",
    email: "abc@example.com",
    section: "A"
  }]
  return (
    <div>
      <ChildComponent {...user[0]} />
      <ChildComponent {...user[1]} section="CSE-17" />
    </div>
  )
}

export default App