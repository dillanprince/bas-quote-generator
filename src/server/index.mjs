import express from 'express';
import path from 'path';
import pdfApi from './api/htmlToPdf';

const app = express();
pdfApi(app, express.Router());

// set up express for production
if (process.env.NODE_ENV === 'production') {
  const clientPath = 'src/client/build';

  // express will serve production assets like main.js
  app.use(express.static(clientPath));

  // express will serve the index.html file if it doesn't recognize the route
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(`${clientPath}/index.html`));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, (err) => {
  const msg = err ? err : `Server listening on port ${PORT}`; 
  return console.log(msg);
});