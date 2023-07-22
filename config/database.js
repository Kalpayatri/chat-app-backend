require('dotenv').config();
const mongoose= require('mongoose')

const configureDB=()=>{
    const connectionString = process.env.MONGODB_URI;
    mongoose.connect(connectionString)
    .then(()=>{
        console.log('connected to db')
    })
    .catch((err)=>{
        console.log('not connecetd to db')
    })
}

module.exports= configureDB