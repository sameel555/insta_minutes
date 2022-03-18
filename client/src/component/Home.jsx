import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Input from './Input'

function Home() {
  // var data = ''
  const [data, setData] = useState('')
  const schedule = async () => {
    setData(await axios.get('http://localhost:3333/'))

    return data
  }
  schedule()
  useEffect(() => {
    // console.log('The data fetched in Home page is', data)
    return (
      <>
        {' '}
        <Input />
      </>
    )
  }, [data])
  return <>{data === '' ? <div>Job is scheduling.......</div> : <Input />}</>
}

export default Home
