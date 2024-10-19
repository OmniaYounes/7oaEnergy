
process.on('uncaughtException', (err) =>{
  console.log('uncaught exception' , err);
})

const express = require('express')

const contactRouter = require('./src/components/contact/contact.routers');
const printingRouter = require('./src/components/printing/printing.routers');
const printerRouter = require('./src/components/printers/printer.routers');
const aboutRouter = require('./src/components/about/about.routers');
const aboutHomeRouter = require('./src/components/aboutHome/aboutHome.routers');
const servicesRouter = require('./src/components/services/services.routers');
const userRouter = require('./src/components/user/user.routers');

const { dbConnection } = require('./src/database/dbConnection');
const app = express()

require('dotenv').config({ path : "./config/.env"})
const port = process.env.PORT || 3000 ;
var morgan = require('morgan');
const AppError = require('./src/utilts/AppError');
const globalmiddlewareError = require('./src/utilts/globalmiddlewareError');
const cors = require('cors');


// const corsOptions = {
//   origin: 'http://localhost:4200/'
// }

app.use(cors());
// app.use(cors(corsOptions));

app.use(express.json())
app.use(express.static('uploads'))

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

app.use("/contact" , contactRouter)
app.use("/printing" , printingRouter)
app.use("/printer" , printerRouter)
app.use("/about" , aboutRouter)
app.use("/aboutHome" , aboutHomeRouter)
app.use("/services" , servicesRouter)
app.use("/user" , userRouter)


app.all('*' ,(req , res , next ) =>{
  next( new AppError(`can't find this route : ${req.originalUrl} on server` , 404))
})

// global error handling middleware
app.use(globalmiddlewareError)
dbConnection();

app.listen(port, () => console.log(`Example app listening on port ${port}!`))


process.on('unhandledRejection', (err) => {
  console.log('Unhandled rejection' , err)
})
