// LOAD ENV VARIABLES
require('dotenv').config({ silent: true });

// REQUIRED
const PORT = process.env.PORT || 8000,
      cors = require('cors'),
      path = require('path'),
      morgan = require('morgan'),
      express = require('express'),
      webpack = require('webpack'),
      mongoose = require('mongoose'),
      bodyParser = require('body-parser'),
      webpackConfig = require('./webpack.config'),
      webpackDevMiddleware = require('webpack-dev-middleware'),
      webpackHotMiddleware = require('webpack-hot-middleware'),
      MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/chatDB'

//APP DECLARATION
const app = express();

//MONGO - MONGOOSE
mongoose.Promise = Promise
mongoose.connect(MONGODB_URI, err => {
  console.log(err || `Mongo connected to ${MONGODB_URI}`)
})

//Middleware
app.use(cors())
app.use(morgan('dev'))
app.use(express.static('build'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

//WEBPACK
const compiler = webpack(webpackConfig)
app.use(webpackDevMiddleware(compiler, {
  publicPath: webpackConfig.output.publicPath, 
  noInfo: true
}))
app.use(webpackHotMiddleware(compiler))

//ROUTES
app.use('/api', require('./routes/api'));

app.get('*', (req, res) => {
  let filepath = path.resolve('./build/index.html');
  res.sendFile(filepath);
});

//SERVER LISTEN
app.listen(PORT, err => {
  console.log(err || `Express listening on port ${PORT}`);
});
