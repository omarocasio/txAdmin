//Requires
const xss = require("xss");
const { dir, log, logOk, logWarn, logError, cleanTerminal } = require('../extras/console');
const webUtils = require('./webUtils.js');
const context = 'WebServer:getPlayerData';


/**
 * Returns the data for the player's modal
 * @param {object} res
 * @param {object} req
 */
module.exports = async function action(res, req) {
    if(typeof req.params.id === 'undefined'){
        res.status(400);
        res.send({status: 'error', error: "Invalid Request"});
        return;
    }
    let id = parseInt(req.params.id);
    
    let out;
    let players = [...globals.monitor.statusServer.players];
    let player = players.find(player => player.id === id);
    if(player){
        out = {
            name: xss(player.name),
            identifiers: player.identifiers.map(x => xss(x)).join(', <br>\n'),
            buttons: `<!-- buttons -->
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button onclick="messagePlayer(${id})" type="button" class="btn btn-secondary"><i class="icon-speech"></i> Send Message</button>
                <button onclick="kickPlayer(${id})" type="button" class="btn btn-danger"><i class="icon-ban"></i> Kick</button>
                <button onclick="banPlayer(${id})" type="button" class="btn btn-danger"><i class="icon-ban"></i> Ban</button>
            `
        }
        if(player.steam) out.buttons += `<a href="${player.steam}" target="_blank" class="btn btn-info"><i class="icon-user"></i> Steam</a>`;
    }else{
        out = {
            name: 'Unknown',
            identifiers: 'Player Disconnected',
            buttons: `<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>`
        }
    }

    return res.send(out);
};
