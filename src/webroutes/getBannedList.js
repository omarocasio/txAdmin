//Requires
const semver = require('semver');
const { dir, log, logOk, logWarn, logError, cleanTerminal } = require('../extras/console');
const webUtils = require('./webUtils.js');
const context = 'WebServer:getBannedList';


/**
 * Returns the Add Extension page
 * @param {object} res
 * @param {object} req
 */
module.exports = async function action(res, req) {
    //Rendering the page
    let out = await webUtils.renderMasterView('bannedList');
    return res.send(out);
};
