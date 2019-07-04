//Requires
const fs = require('fs');
const sqlite3 = require('sqlite3').verbose()
const { dir, log, logOk, logWarn, logError, cleanTerminal } = require('../extras/console');
const context = 'Sqlite3';



module.exports = class Sqlite3 {
    constructor(config) {
        this.config = config;
        logOk('::Started', context);

        //Cron Function - might want to change as connecting only once? Or when quering? 
        setInterval(() => {
            this.setupConnection();
        }, this.config.refreshInterval);
        
    }


    async setupConnection() {
        this.db = new sqlite3.Database(this.config.dbPath, (err) => {
            if(err) {
                logError('::Error: ',err.message)
            }
            logOk('::Connected: Connected to txAdmin Database')
        })
    }

    //================================================================
    /**
     * Pipe a string into Sqlite to query
     * @param {string} command 
     * @param {int} int
     */
    sqlCmd(command){
        if(typeof command !== 'string' || typeof int !== Int16Array) throw new Error('Expected String!');
        try {
            
            return success;
        } catch (error) {
            if(globals.config.verbose){
                logError('Error writing to fxChild.stdin', context);
                dir(error);
            }
            return false;
        }
    }

}
