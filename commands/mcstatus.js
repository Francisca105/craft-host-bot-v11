exports.run = async (client, message, args) => {
    const discord = require('discord.js')
    const request = require('request')
    if(!args[0]) return message.reply('indique um ip.')
    
    var mcIP = args[0]
    var url = 'https://api.minetools.eu/ping/' + mcIP  

    request(url, function(err, response, body) {
        body = JSON.parse(body);

        if(err) return message.reply('o servidor está offline ou não o encontrei.')
        else if(body){
            let players = body.players
            let embed = new discord.RichEmbed()
                .setTitle(args[0])
                .setDescription(players.now +' / '+ players.max + ' jogadores.')
                .addField('Descrição', body.description)
                .addField('Versão', body.version.name)
                //.addField('Players', players.sample.name.join(', ') || 'Ninguém')
                .setFooter('A jogar minecraft desde agora mesmo.')
                .setColor('RANDOM')

                message.channel.send(embed)
        }
    })
}
module.exports.help = {
    name: "mcstatus",
    aliases: ["serverstatus", "mcserver"]
}    