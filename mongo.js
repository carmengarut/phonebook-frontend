require('dotenv').config()
const mongoose = require('mongoose')
const {Schema, model} = require('mongoose')

if (process.argv.length < 3) {
    console.log('Please provide the password as an argument: node mongo.js <password>')
    process.exit(1)
  }

const connectionString = `mongodb+srv://carmengarut:${process.argv[2]}@cluster0.pkvlt.mongodb.net/phonebookapp?retryWrites=true&w=majority`

//conexion a mongodb
mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log('Database connected')
    })
    .catch(err => {
        console.error(err)
    })

const personSchema = new Schema({
    name: String,
    number: String,
})

const Person = model('Person', personSchema)

if (process.argv[3] && process.argv[4]) {
    const person = new Person({
        name: process.argv[3],
        number: process.argv[4]
    })

    person.save()
    .then(result => {
        console.log(`added ${process.argv[3]} number ${process.argv[4]} to phonebook`)
        mongoose.connection.close()
    })
    .catch(err => {
        console.log(err)
    })
} else {
    Person.find({}).then(result => {
        console.log(result)
        mongoose.connection.close()
    })
}



