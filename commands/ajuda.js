exports.run = async (client, message) => {
    const discord = require('discord.js')
    let ajuda = new discord.RichEmbed()
    .setTitle('Ajuda')
    .setDescription('Comandos...')
    .setFooter('Bot desenvolvido pela Francisca.105#8965')
    .setColor('RANDOM')

        message.channel.send(ajuda)
    }
    module.exports.help = {
        name: "ajuda",
        aliases: ["?", "help", "comandos", "cmds", "commands"]
    }    