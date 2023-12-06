import { Sequelize } from "sequelize";
import mysql2 from 'mysql2';

const grupoAmplus = new Sequelize(process.env.URI_MYSQL, {
  dialect: "mysql",
  dialectModule: mysql2,
});


export default grupoAmplus