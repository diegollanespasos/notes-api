const express = require('express');
const mysql = require('mysql');
const myconn =  require("express-myconnection");
const routes = require("./routes");

const app = express();
app.set('port', process.env.PORT||8080);

const dbOptions = {
    host: 'notes-app-database.cbafskpwyok4.us-east-2.rds.amazonaws.com',
    port: 3306,
    user: 'admin',
    password: 'notesapp*',
    database: 'notes_schema'
}

//middlewares
app.use(myconn(mysql, dbOptions, 'single'));
app.use(express.json());

//routes-------------------------------
app.get('/',(req,res)=>{
    res.send('Making a commit with codepipeline')
})

app.use("/api", routes);

//server running----------------------- 
app.listen(app.get('port'),()=>{
    console.log('server running on port', app.get('port'))
})