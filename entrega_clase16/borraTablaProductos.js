const {mariaOptions} = require("./mariaDB.js");
const knex = require('knex');
const knex2 = knex(mariaOptions);

knex2("fragancias").del()
.then(() => console.log("all mensajes deleted"))
.catch(err => {console.log(err); throw err})
.finally(() => knex2.destroy());