let Sequelize = require('sequelize');
let sequelizePg;
let localPGInfo = {
    "host": "192.168.58.194",
    "port": 5757,
    "poolSize": 10,
    "user": "csp_dev_pg",
    "password": "ws9XgGB6AdzUX5H2",
    "database": "d_csp_db",
    "db_type": "POSTGRES"
}

let info = {
    ...localPGInfo
}

sequelizePg = new Sequelize(`postgres://${info.user}:${info.password}@${info.host}:${info.port}/${info.database}`);

let media_metadata = {
    width: 100,
    height: 200,
    photo: null
}

const CRUD = (Operation, updateValue, updateId) => {
    return new Promise((resolve, reject) => {
        try {
            let query = ''
            if (Operation === 'INSERT') {
                query = `INSERT INTO PHOTOS(NAME, DESCRIPTION, MIME_TYPE, MEDIA_METADATA, WIDTH, HEIGHT)
                VALUES ('wallpaper', 'naturalScenario', 'jpg', ${media_metadata}, '100', '200')`;
            } else if (Operation === 'SELECT') {
                query = `SELECT NAME, DESCRIPTION, MIME_TYPE, MEDIA_METADATA, WIDTH, HEIGHT, PHOTO FROM PHOTOS`;
            } else if (Operation === 'UPDATE') {
                query = `UPDATE PHOTOS SET NAME = '${updateValue}' WHERE ID = ${updateId}`
            } else {
                query = `DELETE FROM PHOTOS WHERE ID = ${updateId}`
            }
            sequelizePg.query(query).then(data => {
                data = query[0][0];
                console.log('Result of operation',data);        
                if (data) {
                    resolve({
                        statusCode: 200,
                        message: 'operation succeeds'
                    })
                } else {
                    resolve({
                        statusCode: 400,
                        message: 'Failed'
                    })
                }
            }).catch(err => {
                console.log(`Error while Performing ${Operation} in the Postgres Table`, err);
                console.log("********************")
                console.log("********************")
                sequelizePg.close();
                reject({
                    statusCode: 500,
                    message: 'Unable to perform operation'
                })
            })
        } catch (error) {
            console.log('Unable to Perform crud operations on Table', error);
            reject({
                statusCode: 500,
                message: 'Unable to perform operation'
            })
        }
    })
}



CRUD('SELECT', 'Wallpaper2', 2)