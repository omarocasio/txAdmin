//Requires
const os = require('os');
const xss = require("xss");
const { dir, log, logOk, logWarn, logError, cleanTerminal } = require('../extras/console');
const context = 'WebServer:txAdmin';
const sqlite3 = require('sqlite3').verbose()

/**
 * Getter for all the log/server/process data
 * @param {object} res
 * @param {object} req
 */


module.exports = async function action(res, req) {
    if(typeof req.params.action === 'undefined'){
        res.status(400);
        res.send({status: 'error', error: "Invalid Request"});
        return;
    }
    let action = req.params.action;
    let time = req.params.time;


    
};

async function getBanList() {
    
}
