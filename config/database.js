const mongoose= require('mongoose')

const configureDB=()=>{
    mongoose.connect('mongodb://localhost:27017/chatapp')
    .then(()=>{
        console.log('connected to db')
    })
    .catch((err)=>{
        console.log('not connecetd to db')
    })
}

module.exports= configureDB