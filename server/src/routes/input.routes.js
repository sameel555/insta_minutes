const express = require('express')

const router = express.Router()
const InputBox = require('../models/input.model')

const events = require('../event')

const schedule = require('node-schedule')

router.get('/', async (req, res) => {
  // console.log('The get request is loading')
  try {
    events.forEach((el) => {
      schedule.scheduleJob(el.text, el.dateTime, () => {
        console.log('The schedulesd')
        // console.log(revText(el.text))
        // router.route('/input')
        res.status(200).send(el.text)

        // console.log(el.text)
        // let time = el.text.length
      })
    })
  } catch (err) {
    console.log('The error is', err)
    res.status(400).send(err.message)
  }
})

router.post('/input', async (req, res) => {
  console.log('body is', req.body)
  const { inputText } = req.body
  // const data = await InputBox.create(req.body)
  try {
    //console.log(inputText.split('').reverse().join(''))
    setTimeout(() => {
      console.log(inputText.split('').reverse().join(''))
      return res.status(200).send(inputText.split('').reverse().join(''))
    }, inputText.length * 1000)
  } catch (err) {
    console.log('The error in posting input', err)
    res.status(400).send(err.message)
  }
})
router.get('/input', async (req, res) => {
  try {
    //console.log('The get of input is loading')
    return res.status(200).render('/')
  } catch (err) {
    res.status(400).send(err.message)
  }
})

// const revText = (text) => {
//   return text.split('').reverse().join('')
// }

//console.log('The event', events)

module.exports = router
