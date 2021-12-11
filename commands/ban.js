exports.run = (client, message, args, err) => {

    const discord = require('discord.js')
    //let {puniçoes} = require('../config.json')

    if(!message.member.hasPermission('BAN_MEMBERS')) return message.reply('Não tens permissão.')

    let userban = message.guild.member(message.mentions.users.first() || client.users.get(args[0]))
    if(!userban) return message.reply('Para poder banir um usuário tem que o mencionar.')

    let userid = userban.id

    if(!userban.bannable) return message.reply('Não será possível banir esse usuário.')
    if(userban.id === message.author.id) return message.reply('Não te podes banir.')

    let razao = args.slice(1).join(' ')
    if(!razao) razao = 'Não foi dado um motivo.'

    //let canal = client.channels.get(puniçoes)

    let ban = new discord.RichEmbed()
    .setTitle('Ban')
    .setDescription('')
    .addField('Autor do ban:', message.author.username)
    .addField('Usuário punido:', userban.user.username)
    .addField('Motivo:', razao)
    .setFooter('Cumpre as regras!')

    message.guild.ban(userid, {reason: razao})
    message.channel.send('Usuário banido com sucesso.')
    message.channel.send(ban).then(a=> a.delete(5 * 60 * 100))
}
module.exports.help = {
    name: "ban",
    aliases: ["banir"]
}



