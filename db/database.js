import SQ from 'sequelize'
import env from 'dotenv';
env.config();

export const katalkDB = new SQ.Sequelize('katalkDB',process.env.SERVER_DB_USER,process.env.SERVER_DB_PASSWORD,{
    host: process.env.SERVER_DB_HOST,
    dialect: 'mysql',
    logging: false
});

katalkDB.authenticate()
.then(() => {
    console.log('(katalkDB) Connection has been established successfully.')
}).catch((error) => {
    console.error('Unable to connect to the database:', error);
})