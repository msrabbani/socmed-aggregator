const express = require('express')
const app = express()

let twattRouter = require('./router/twatt-routing')

app.use('/twatt', twattRouter)

app.listen(3003,()=>{
    console.log('Express Port 3003');
})
