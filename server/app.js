const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const sendGrid = require('@sendGrid/mail');

const app = express();

app.use(bodyParser.json());

app.use(cors());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); // Change later to only allow our server
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.get('/', (req, res, next) => {
    res.send('API Status: I\'m awesome')
});

app.post('/app/email', (req, res, next) => {

    console.log(req.body);
   const {email,message,name} = req.body
    sendGrid.setApiKey('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');
    const msg = {
        to: 'natali.aviv162@gmail.com',
        from: 'natali.aviv162@gmail.com',
        subject: 'Website Contact',
        html:`<p>  from:${name}  </p> <p> Email: ${email}</p> <p> ${message} </p> `
    }

    sendGrid.send(msg)
        .then(result => {

            res.status(200).json({
                success: true
            });

        })
        .catch(err => {
           // console.log('error: ', err);
            console.log(err.response.body)
            res.status(401).json({
                success: false
            });

        });
});



app.listen(3030, '0.0.0.0');