const express = require('express');

const app = express();
app.use('/', express.static(`${__dirname}/dist`));

app.get('*', (req, res) => {
  res.sendFile(`${__dirname}/dist/index.html`);
});

const appPort = process.env.PORT || 8080;
app.listen(appPort, () => {
  console.log(`Starting up server, serving Available on: http://localhost:${appPort}`);
  console.log('Hit CTRL-C to stop the server');
});