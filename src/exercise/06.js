// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'
import {useState} from "react";

function UsernameForm({onSubmitUsername}) {

  const [error, setError] = useState(null);

  function handleSubmit(event) {
    event.preventDefault()
    // const value = event.target.elements.usernameInput.value
    // console.log(value)
    onSubmitUsername(event.target.elements.usernameInput.value)
  }

    function handleChange (event) {
        const {value} = event.target
        const isValid = value === value.toLowerCase();
        setError(isValid ? null : 'Username can handle only lower case')
    }
    return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="usernameInput">Username:</label>
        <input id="usernameInput" type="text" onChange={handleChange} />
      </div>
        <div>{error}</div>
      <button disabled={error} type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
