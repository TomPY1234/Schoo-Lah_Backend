const functions = require('firebase-functions')
const express = require("express")
const app = express();
const booksRouter = require('./api/controllers/books_controller')
const feesRouter = require('./api/controllers/fees_controller')
const usersRouter = require('./api/controllers/users_controller')
const todosRouter = require('./api/controllers/todos_controller')
const qrRouter = require('./api/controllers/qr_controller')


app.use(express.json())
app.use('/books', booksRouter)
app.use('/fees', feesRouter)
app.use('/users', usersRouter)
app.use('/todos', todosRouter)
app.use('/qr', qrRouter)

exports.api = functions.https.onRequest(app)

// To handle "Function Timeout" exception
exports.functionsTimeOut = functions.runWith({
    timeoutSeconds: 300
})

exports.setupdb = functions.https.onRequest(require('./setup_database'))