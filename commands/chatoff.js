exports.run = (client, message, args) => {
    const discord = require("discord.js");
    
        let cargo = '「CEO」'
        if(!message.guild.members.get(message.author.id).roles.find("name" , cargo)) {
            return message.reply(`precisas da tag \`${cargo}\` para executar esse comando`)
            }
        var da = message.guild.roles.find("name","「 Membros 」")
        var da1 = message.guild.roles.find('name', cargo)

        message.channel.overwritePermissions(da, {
            SEND_MESSAGES: false
          })
          message.channel.overwritePermissions(da1, {
            SEND_MESSAGES: true
          })
          var embed = new discord.RichEmbed()
          .addField("Canal fechado por:" , message.author.username)
          .setColor('#ad0551')

            message.channel.send(embed).then(a => a.delete(2 * 60 * 1000))

}
module.exports.help = {
  name: 'chatoff',
  aliases: ['lock']
}    