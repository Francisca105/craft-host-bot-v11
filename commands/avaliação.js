exports.run = async (client, message, args) => {
    const {avaliaçao, prefix} = require('../config.json')
    const discord = require('discord.js')
    let canal = client.channels.get(avaliaçao)
    let rep = args[0]
    if(!rep) return message.reply(' faça ' + prefix + 'avaliar <+/-> <opinião>')
    let avaliar = args.slice(1).join(' ')
    if(!avaliar) return message.reply('indique uma sugestão.')

    if(rep === '+'){
        let embed1 = new discord.RichEmbed()
        .setTitle('⭐ Reputação ⭐')
        .setDescription(avaliar)
        .setFooter('Opinião de ' + message.author.username)
        .setColor('#27ad0c')

        message.channel.send('Obrigado por partilhar a sua opinião!')

        canal.send(embed1)
    }else if(rep === '-'){

        let embed2 = new discord.RichEmbed()
        .setTitle('⭐ Reputação ⭐')
        .setDescription(avaliar)
        .setFooter('Opinião de ' + message.author.username)
        .setColor('#ad210c')

        message.channel.send('Fiz alguma coisa que não gostou? 😥')

        canal.send(embed2)
    }else return message.reply('argumento inválido!')
        
        
    


}
module.exports.help = {
    name: "avaliação",
    aliases: ["avaliaçao", "avaliar"]
}    