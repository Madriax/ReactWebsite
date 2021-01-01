import {app} from './index';
import {createConnection} from "typeorm";

createConnection().then(() => {
    app.listen(8080);
});