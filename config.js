const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ANJU-MD=rQtjESDA#BhkihBQI779sI-WUGi8IL1ffKpYh0_WdAoDuhmXNgvs",
MONGODB: process.env.MONGODB || "ANJU-MD=rQtjESDA#BhkihBQI779sI-WUGi8IL1ffKpYh0_WdAoDuhmXNgvs",//enter mongo db url
};
