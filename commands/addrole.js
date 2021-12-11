exports.run = async (client, message, args) => {
    if(!message.member.hasPermission('MANAGE_ROLES')) return message.reply('Não tens permissão.')
    if(!args[0]) return message.reply('indique uma pessoa para adicionar um cargo!')
    if(!args[1]) return message.reply('indique um cargo para adicionar ao membro!')
    var user = message.mentions.members.first() || client.users.get(args[0]) || message.guild.members.find(a => a.user.username  === args[0])
    var cargo = message.guild.roles.find("name", args.slice(1).join(' ')) || message.mentions.roles.first() || message.guild.roles.find("id", args[1])

    user.addRole(cargo.id)
    message.channel.send('Cargo dado com sucesso a ' + user.user.username+'.')
}
module.exports.help = {
    name: "darcargo",
    aliases: ["addrole"]
}    