const { prefix } = require("../config.json");
const fs = require('fs')
const {bot} = require('../index');
const config = require("../config.json");
const discord = require('discord.js')
bot.on("guildMemberAdd", async (member) => {

    let c = bot.guilds.channels.get('718954662451216484')

    let embed = new discord.RichEmbed()
    .setTitle(member.user.username)
    .setDescription('Olá, Seja bem vindo a Craft Host, compre já a sua hospedagem e tire o seu projeto do papel.')
    .setColor('#24fc03')
    .setFooter('Craft Host © Fracisca.105')
    
    c.send(embed)
//member.guild.memberCount
})