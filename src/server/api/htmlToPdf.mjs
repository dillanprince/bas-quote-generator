// This api could be hosted separately in the future to allow for auto-scaling of pdf processes
// server side solution frees up browser resources and allows async processing
// POST .../api/htmlToPdf

import express from 'express';
import bodyParser from 'body-parser';
import http from 'http';
import convert from 'pdf-puppeteer';

const app = express();
const router = express.Router();

// prevent cors issue for the test html by file ref
// don't use in production
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'X-Requested-With,[content-type]'
    );
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

router.route('/pdf').post(async function(req, res) {
    convert(
        req.body,
        pdf => {
            res.setHeader('Content-Type', 'application/pdf');
            res.send(pdf);
        },
        { 
            format: 'A4',
            printBackground: true 
        },
        null,
        false
    ).catch(err => {
        console.log(err);
        res.status(500).send(err);
    });
});

app.use(bodyParser.text({ limit: '50mb' }));
app.use('/api', router);

// Start the server.
var port = 3000;
http.createServer(app).listen(port);
console.log('Server listening on port ' + port);