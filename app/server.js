const app = require('./src/app');
const port = 3000;

app.listen(port, (err) => {
  if (err) {
    console.log('Unable to listen to server');
    return;
  }
  console.log(`API listening on port: ${port}`);
});
