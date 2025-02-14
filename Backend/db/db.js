const mongoose = require('mongoose');

function connectToDB(){
    mongoose.connect(process.env.DBCONNECT).then(() => {
        console.log('Connected to DB');
    }).catch((err) => {
        console.log('Error connecting to DB');
    });
}

module.exports = {connectToDB};