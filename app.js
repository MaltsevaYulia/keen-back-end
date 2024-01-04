const express = require('express')
const logger = require('morgan')
const cors = require('cors')
const dotenv=require('dotenv')

const bicyclesRouter = require("./routes/api/bicycles");
const statsRouter = require("./routes/api/stats");



dotenv.config()
const app = express()

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short'

app.use(logger(formatsLogger))
app.use(cors())
app.use(express.json())
app.use(express.static("public"))


app.use("/api/bicycles", bicyclesRouter);
app.use("/api/stats", statsRouter);

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message});
})

module.exports = app

// app.listen(3001)
