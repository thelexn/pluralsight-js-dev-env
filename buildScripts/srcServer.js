import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import config from '../webpack.config.dev';

import fs from 'fs';

/* eslint-disable no-console*/

const port = 3000;
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.get('/users', function(req, res) {
    res.json([
        {"id": 1,"firstName":"Bob","lastName":"Smith","email":"bob.smith@gmail.com"},
        {"id": 2,"firstName":"Dob","lastName":"Lmith","email":"Dbob.Lmith@gmail.com"},
        {"id": 3,"firstName":"Job","lastName":"Gmith","email":"Job.Gmith@gmail.com"}
    ]);
});

app.listen(port, function(err) {
    if (err) {
        console.log(err);
    } else {
        open('http://localhost:' + port);
        // open('https://alohn.localtunnel.me:');
        
        // open('www.rechtsanwalt-albrecht.at');
    }
});

console.log(fs.readdir('./src'));