exports.run = async (client, message, args) => {
    const {sugestao} = require('../config.json')
    const discord = require('discord.js')
    let canal = client.channels.get(sugestao)
    let sugerir = args.slice(0).join(' ')
    if(!sugerir) return message.reply('indique uma sugestão.')
    else{
        
        let embed= new discord.RichEmbed()
        .setTitle('💡 Sugestão Nova')
        .setDescription('**Sugestão enviada por**: ' + message.author + '\n\n**Sugestão**: ' + sugerir)
        .setFooter('Reaja com 👍 para concordar ou 👎 para discordar.')
        .setColor('RANDOM')

        canal.send(embed).then(async a => await a.react('👍'), await a.react('👎'))
    }


}
module.exports.help = {
    name: "sugestão",
    aliases: ["sugestao", "sugerir"]
}    