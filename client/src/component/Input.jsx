import React, { useState } from 'react'
import axios from 'axios'

// This component is called when an event is scheduled

function Input() {
  const [reversedText, setreversedText] = useState('')
  const [text, setText] = useState({
    inputText: '',
  })
  //   console.log('The component is rendering in react', text.inputText)
  const reverse = () => {
    axios
      .post('http://localhost:3333/input', text)
      .then((res) => {
        setreversedText(res.data) //get the reversed value after length seconds
        // console.log('The reversed string is', res.data)
      })
      .catch((err) => {
        console.log('The error is optained', err)
      })
  }

  return (
    <div>
      <input
        type="string"
        placeholder="Enter the Text"
        onChange={(e) =>
          setText({
            inputText: e.target.value,
          })
        }
      />
      <button onClick={reverse}>Reverse</button>
      <h1>{reversedText}</h1> {/* it will display the revesed input value */}
    </div>
  )
}

export default Input
