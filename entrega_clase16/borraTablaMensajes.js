const {sqliteOptions} = require("./sqlite.js");
const knex = require('knex');
const knex2 = knex(sqliteOptions);

knex2("mensajes").del()
.then(() => console.log("all mensajes deleted"))
.catch(err => {console.log(err); throw err})
.finally(() => knex2.destroy());