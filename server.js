const express = require('express');
var path = require('path');

const app = express();

// --------------- Routers --------------
var quizRouter = require('./server/routes');
app.use('/api/quiz', quizRouter);
// --------------- Routers --------------

// --------------- React Quiz app --------------
app.use('/', express.static(`${__dirname}/react-dist`));

app.get('*', (req, res) => {
  res.sendFile(`${__dirname}/react-dist/index.html`);
});
// --------------- React Quiz app --------------

const appPort = process.env.PORT || 8080;
app.listen(appPort, () => {
  console.log(`Starting up server, serving Available on: http://localhost:${appPort}`);
  console.log('Hit CTRL-C to stop the server');
});
