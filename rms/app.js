// import modules
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const passport = require("passport");
const webpack = require("webpack");
const webpackDevMiddleware = require("webpack-dev-middleware");
const mongoose = require("mongoose");
const cors = require("cors");
const webpackConfig = require("./webpack.config");

const app = express();
// const bootStrap = require('./server/modules/bootStrap');

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, './server/views'));
app.use(express.static(path.join(__dirname, 'public')));

// connect to mongoDB
mongoose.connect(
  'mongodb://localhost/rms',
  { useNewUrlParser: true },
  (err) => {
    if (err) throw err;
    else {
      console.log('connected to mongodb');
      // bootStrap.init();
    }
  },
);

app.use(cors());

// Path for images
app.use('/images', express.static(path.join(__dirname, '/client/src/images')));



// Webpack config
if (process.env.NODE_ENV === 'development') {
  console.log('in webpack hot middleware');
  const compiler = webpack(webpackConfig);
  app.use(
    webpackDevMiddleware(compiler, {
      noInfo: true,
      publicPath: webpackConfig.output.publicPath
    })
  );
}

// Initialize passport
app.use(passport.initialize());
require("./server/modules/passport")(passport);

// use passport as middleware
// use cors
app.use(cors());

// Essential Middleware
app.use(bodyParser.json());

// Requiring routes
// app.use('/api/v1', require('./server/routers/api'));
app.use(require('./server/routes/index'));

// app.get('/', (req, res) => {
//     res.render('index');
//   });

// listen app on 8001 port
const server = app.listen(8001, () => {
  console.log('Server is running on http://localhost:8001');
});

