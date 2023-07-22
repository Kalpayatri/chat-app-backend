const express= require('express')
const app= express()
const configureDB =require('./config/database')
const router=require('./config/routes')
const cors=require('cors')
const port= 7000

app.use(cors())
app.use(express.json())
configureDB()
app.use(router)

app.listen(port,()=>{
    console.log('server running on port', port)
})