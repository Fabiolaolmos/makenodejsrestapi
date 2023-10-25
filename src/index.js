/* eslint-disable no-console */
import express from 'express';
import constants from './config/constants';
import './config/database';
import middlewaresConfig from './config/middlewares';
import apiRoutes from './modules';
import log from 'morgan';

// eslint-disable-next-line no-undef
global["__rootdir"] = path.resolve(process.cwd());
const app = express();
middlewaresConfig(app);
app.get('/', (req, res) => {
    res.send('Hello world!');
});
apiRoutes(app);
app.listen(constants.PORT, err => {
    if (err) {
        throw err;
    } else {
        // eslint-disable-next-line no-undef
        console.log(` Server running on port: ${constants.PORT} --- Running on ${process.env.NODE_ENV} --- Make something great `);
    }
});