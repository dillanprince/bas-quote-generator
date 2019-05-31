// This api could be hosted separately in the future to allow for auto-scaling of pdf processing
// This server side solution frees up browser resources and allows async processing
// POST .../api/v1/pdf

import bodyParser from 'body-parser';
import convert from 'pdf-puppeteer';

const puppeteerArgs = {
    args: ['--no-sandbox', '--disable-setuid-sandbox']
};

const options = { 
    format: 'Letter',
    printBackground: true 
};

const callback = (pdf, res) => {
    res.setHeader('Content-Type', 'application/pdf');
    res.send(pdf);
}; 

const onError = (err, res) => {
    console.log(err);
    res.status(500).send(err);
};

async function handler(req, res) {
    convert(req.body, (pdf) => callback(pdf, res), options, puppeteerArgs, false).catch((err) => onError(err, res));
}

const corsSetup = (req, res, next) => {
    // future: refine this for more security
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'X-Requested-With,[content-type]'
    );
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
}

export default (app, router) => {
    router.route('/pdf').post(handler);
    app.use(corsSetup);
    app.use(bodyParser.text({ limit: '50mb' }));
    app.use('/api/v1', router);
}