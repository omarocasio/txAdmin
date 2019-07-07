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
     * Pipe a string into Sqlite to query for banning 
     * @param {string} command 
     * @param {int} int
     */
    sqlBan(command){
        if(typeof command !== 'string' || typeof int !== Int16Array) throw new Error('Expected String or a Number!');
        try {
            let sql = `SELECT Username username,
                                `
            return success;
        } catch (error) {
            
            return false;
        }
    }


    //================================================================
    /**
     * Pipe a string into Sqlite to query for unbanning 
     * @param {*} command 
     */
    sqlUnBan(command){
        if(typeof command !== 'string') throw new Error('Expected String or a Number!');
        try {
            let sql = `SELECT Username name,
                              SteamID steamID,
                        FROM BannedList`;
            this.db.get(sql, (error) => {
                if(!error) {

                }

            
            })
            return true;
        } catch (error) {
            return false;
        }
    }

}
