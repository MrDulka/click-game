const express = require('express');
const path = require('path');
const app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(path.join(__dirname, 'dist/build')));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(app.get('port'), function() {
  console.log('App is running on port', app.get('port'));
});
