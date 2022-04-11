const express = require('express');
const path = require('path');
const passport = require('passport');
const cors = require('cors');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);

//rutas de productos y usuario

/* ANOTACIÓN: REFACTORIZAR ROUTER*/
const userRouter = require('./routes/user.routes')
const productRouter =require('./routes/product.routes')
const accesoriesRouter = require('./routes/accesories.routes')
const sneakersRouter = require('./routes/sneakers.routes')
const manRouter = require('./routes/man.routes')
const womanRouter = require('./routes/woman.routes')

const userEmail = require('./routes/userEmail.routes')

const dotenv = require('dotenv').config({path:'./.env.local'})


const PORT = process.env.PORT || 5000;
const server = express();

const {connectToDb} = require('./config/db')
connectToDb()

require('./passport')

server.use((req, res, next) => {
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
  });
  server.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
  }));
  server.use(express.json());
  server.use(express.urlencoded({ extended: false }));
  
  server.use(express.static(path.join(__dirname, 'public')))


  server.use(
    session({
      secret: process.env.SESSION_SECRET,
      resave: false,
      saveUninitialized: false,
      cookie: {
        maxAge: 24 * 60 * 60 * 1000,
        httpOnly: false,
        secure: false,
        sameSite: false,
      },
      store: new MongoStore({ mongooseConnection: mongoose.connection }),
    })
  );

  
  server.use(passport.initialize());
  
  server.use(passport.session());
  
  server.use("/auth", userRouter);
  server.use("/management",productRouter);
  server.use("/", accesoriesRouter);
  server.use("/", sneakersRouter);
  server.use("/", manRouter);
  server.use("/", womanRouter);


  //verificacion de email

  server.use("/api/user", userEmail)
  
  server.use('*', (req, res, next) => {
    const error = new Error('Ruta no encontrada');
    error.status = 404;
    next(error);
  })
  
  server.use((err, req, res, next) => {
    console.log(err);
    return res.status(err.status || 500).json(err);
  });

server.listen(PORT,()=>{
    console.log(`servidor arrancado en http://localhost:${PORT}`)
})