//Requires
const fs = require('fs');
const { dir, log, logOk, logWarn, logError, cleanTerminal } = require('../extras/console');
const context = 'Sqlite3';
const sqlite3 = require('sqlite3').verbose()


module.exports = class Sqlite3 {

    constructor(config) {
        this.config = config;
        if(!this.config.enabled){
            logOk('::Disabled by the config file.', context);
            return;
        }    
        logOk('::Started', context);
        this.db = new sqlite3.Database('./txAdmin', (err) => {
            if(err) {
                logError(err.message)
            }
            logOk('Connect to DB')
        })

       //this.setupConnection();
        //this.setupConnection();

        //Cron Function
        setInterval(() => {
            //this.setupConnection();
        }, this.config.refreshInterval);
        
    }


    async setupConnection() {
        
    }

}
