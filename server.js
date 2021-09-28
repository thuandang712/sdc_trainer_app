const express = require('express')
const app = express();
const PORT = process.env.PORT || 5500;
const cors = require('cors')


app.use(express.json())
app.use(cors())


app.use('/api/trainers', require('./routes/trainers'))
app.use('/api/comments', require('./routes/comments'))


// handle unknown http reqs
app.use( (req, res, next) => {
    res.status(404).end("Not Found")
})


app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})
