const express = require('express');

const app = express();

// set up express for production
if (process.env.NODE_ENV === 'production') {
  // express will serve production assets like main.js
  app.use(express.static('client/build'));

  // express will serve the index.html file if it doesn't recognize the route
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(
      path.resolve(__dirname, '..', 'client', 'build', 'index.html')
    );
  });
}

app.get('/api', (req, res) => {
  console.log('get request to "/" handled.');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, (err) => {
  return err
    ? console.log(err)
    : console.log(`Server listening on port ${PORT}`);
});
