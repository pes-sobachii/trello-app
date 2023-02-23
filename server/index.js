import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import {createCard, createList, deleteCard, deleteList, emptyList, getLists, updateCard} from "./Controllers/Board.js";

mongoose.connect('mongodb+srv://admin:zmxncb102938@cluster0.pfx00wt.mongodb.net/?retryWrites=true&w=majority').then(() => console.log('success')).catch((err) => console.log('error happened', err))

const app = express()

app.use(express.json())
app.use(cors())

app.post('/list', createList)
app.delete('/list/:id', deleteList)
app.delete('/list-items/:id', emptyList)
app.delete('/card/:id', deleteCard)
app.post('/card', createCard)
app.put('/card', updateCard)
app.get('/lists', getLists)

app.listen(process.env.PORT || 5000, (err) => {
    if (err) {
        console.log('something went wrong')
    }
})