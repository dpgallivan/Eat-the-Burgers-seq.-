var Sequelize = require("sequelize");
var connection;

if(process.env.JAWSDB_URL){
	mysql.createConnection(process.env.JAWSDB_URL);
	connection = new Sequelize("burgers_db", "root", "Captof#6", {
	  host: "localhost",
	  dialect: "mysql",
	  pool: {
	    max: 5,
	    min: 0,
	    idle: 10000
	},
	});
}

module.exports = connection;