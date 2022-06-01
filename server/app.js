require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const app = express()
const cors = require('cors')
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cors())

//User model
const User = require('./models/User')

//Private route

app.get('/user/:id', checkToken, async (req, res) => {
  const id = req.params.id
  const user = await User.findById(id, '-password')

  if (!user) {
    return res.status(404).json({ err: 'User not found!' })
  }

  res.status(200).json({ user })
})

function checkToken(req, res, next) {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]
  if (!token) {
    return res.status(401).json({ err: 'access denied' })
  }
  try {
    const secret = process.env.secret
    jwt.verify(token, secret)
    next()
  } catch (error) {
    res.status(401).json({ err: 'Invalid token' })
    console.log(error)
  }
}

//Registration route
app.post('/auth/register', async (req, res) => {
  const { name, email, password, confirmPswd } = req.body
  //Verifies if received email and password
  if (!name) {
    return res.status(422).json({ err: 'name is required!' })
  }
  if (!email) {
    return res.status(422).json({ err: 'email is required!' })
  }
  if (!password) {
    return res.status(422).json({ err: 'password is required!' })
  }
  if (!confirmPswd) {
    return res.status(422).json({ err: 'password confirmation is required!' })
  }
  if (password != confirmPswd) {
    return res.status(422).json({ err: "passwords don't match" })
  }

  //Verifies if the email already exists
  const userExists = await User.findOne({ email: email })
  if (userExists) {
    return res.status(422).json({ err: 'This email already exists' })
  }

  //Generate hash for the password
  const salt = await bcrypt.genSalt(12)
  const pswdhash = await bcrypt.hash(password, salt)

  const content = ''

  //Create a new user with the info that has been received
  const user = new User({
    name,
    email,
    password: pswdhash,
    task: {
      content
    }
  })
  try {
    await user.save()
    res.status(201).json({ msg: 'User Created with success' })
  } catch (error) {
    res.status(500).json({ err: error })
  }
})

app.post('/auth/user', async (req, res) => {
  const { email, password } = req.body
  if (!email) {
    return res.status(422).json({ err: 'email is required!' })
  }
  if (!password) {
    return res.status(422).json({ err: 'password is required!' })
  }

  const user = await User.findOne({ email: email })
  if (!user) {
    return res.status(404).json({ err: 'User not found!' })
  }

  const checkPswd = await bcrypt.compare(password, user.password)
  if (!checkPswd) {
    return res.status(422).json({ err: 'Invalid pswd' })
  }
  try {
    const secret = process.env.SECRET

    const token = jwt.sign(
      {
        id: user._id
      },
      secret
    )

    res.status(200).json({ msg: 'User found!', token })
  } catch (error) {
    res.status(500).json({ err: 'Server error!' })
  }
})

const dbUser = process.env.DB_USER
const dbPassword = process.env.DB_PASS
mongoose
  .connect(
    `mongodb+srv://${dbUser}:${dbPassword}@crud-mongo.sna6ih4.mongodb.net/?retryWrites=true&w=majority`
  )
  .then(() => {
    app.listen(3001)
    console.log('Database connected')
  })
  .catch(err => console.log(err))
