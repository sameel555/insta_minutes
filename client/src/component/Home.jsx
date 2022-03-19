import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import Input from './Input'

function Home() {
  // var data = ''
  var history = useHistory()
  const [data, setData] = useState('')
  const schedule = async () => {
    // console.log('Th fetched Data', await axios.get('http://localhost:3333/'))
    await axios
      .get('http://localhost:3333/')
      .then((res) => {
        console.log('Th fetched Data', res.data)
        setData(res.data)
        history.push('/input')
      })
      .catch((err) => {
        console.log('The error', err)
      })

    // return data
  }
  schedule()
  console.log('The data fetched in Home page is outside', data)
  useEffect(() => {
    console.log('The data fetched in Home page is', data)
    return (
      <>
        {' '}
        <Input />
      </>
    )
  }, [data])
  return <>{data !== '' ? <Input /> : <div>Job is scheduling.......</div>}</>
}

export default Home
