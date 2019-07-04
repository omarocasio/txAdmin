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

    if(action == 'ban'){
        webUtils.appendLog(req, `Ban User`, context);
        await globals.fxRunner.srvCmd(`txaBan "User has been Banned"`);
        await sleep(1000);
        await globals.sqlite3
        res.send({status: 'ok'});
        return;

    }else if(action == 'perm_ban'){
        webUtils.appendLog(req, `STOP SERVER`, context);
        await globals.fxRunner.srvCmd(`txaKickAll "server shutting down"`);
        await sleep(1000);
        globals.fxRunner.killServer();
        res.send({status: 'ok'});
        return;

    }else if(action == 'unban'){
        webUtils.appendLog(req, `START SERVER`, context);
        globals.fxRunner.spawnServer();
        res.send({status: 'ok'});
        return;

    }else{
        logWarn(`Unknown control action '${action}'.`, context);
        res.status(400);
        res.send({status: 'error', error: "Invalid Request"});
        return;
    }
};
