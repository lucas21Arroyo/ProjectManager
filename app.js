require('dotenv').config();
const createError = require('http-errors');
const express = require('express');
const logger = require('morgan');


const app = express();


app
  .use(logger('dev'))
  .use(express.json())
  .use(express.urlencoded({ extended: false }))
  
 /* Rutas */
 app
  .use('/api/auth', require('./routes/auth'))
  .use('/api/users', require('./routes/users'))
  .use('/api/projects', require('./routes/projects'))
  .use('/api/tasks', require('./routes/tasks'))


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500).json ({
    ok : false,
    msg : err.message ? err.message : 'upss, hubo un error'
  })
  
});

module.exports = app;
