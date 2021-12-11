const { Stats } = require('fs');

exports.run = (client, message, args) => {
    const discord = require('discord.js')
    const tpc = require('tcp-ping')

    let check = [{ip: '01.fantasy.ovh', port: 8085}]
    let s;
    tpc.probe(check[0].ip, check[0].port, function(err, status) {
        //console.log(status);
        s = status;

        let tf = {
            true: 'online.',
            false: 'offline.'
        }
        message.channel.send('Node 1: ' + tf[status])
    })

    
}
module.exports.help = {
    name: 'status',
    aliases: ['check']
}