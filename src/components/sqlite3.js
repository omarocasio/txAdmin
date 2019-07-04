//Requires
const fs = require('fs');
const sqlite3 = require('sqlite3').verbose()
const { dir, log, logOk, logWarn, logError, cleanTerminal } = require('../extras/console');
const context = 'Sqlite3';



module.exports = class Sqlite3 {
    constructor(config) {
        this.config = config;
        logOk('::Started', context);
        this.db = new sqlite3.Database(this.config.dbPath, (err) => {
            if(err) {
                logError(err.message)
            }
            logOk('::Connected: Connect to txAdmin Database')
        })


        //Cron Function
        setInterval(() => {
            this.setupConnection();
        }, this.config.refreshInterval);
        
    }


    async setupConnection() {
        this.db = new sqlite3.Database(this.config.dbPath, (err) => {
            if(err) {
                logError(err.message)
            }
            logOk('::Connected: Connected to txAdmin Database')
        })
    }

}
