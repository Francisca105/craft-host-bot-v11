const {bot} = require('../index');
const config = require("../config.json");

const discord = require('discord.js')
        bot.on("messageReactionAdd", async (reaction, user) => {
            if(user.bot) return;
            if(reaction.emoji.name === ('๐ง' || '๐ค' || '๐' || 'โ๏ธ' || '๐ณ')) {
                    let findTicket = await servidor.channels.find(c => c.name === `${user.user.username}-ticket`)
                    if(findTicket) {
                        user.send("Jรก tens um ticket aberto!");
                    }
                    else {
                        try {
                                let channel = await reaction.message.guild.createChannel(user.user.username, { 
                                    type: 'text', 
                                    permissionOverwrites: [
                                        {
                                            allow: 'VIEW_CHANNEL',
                                            id: user.id
                                        },
                                        {
                                            allow: 'VIEW_CHANNEL',
                                            id: '710105228128550983'
                                        },
                                        {
                                            allow: 'VIEW_CHANNEL',
                                            id: '719325941721202709'
                                        },
                                        {
                                            deny: 'VIEW_CHANNEL',
                                            id: reaction.message.guild.id
                                        }
                                    ]
                                });
                                
                                let embed = new discord.RichEmbed();
                                embed.setTitle(`Ticket`);
                                embed.setDescription("O seu ticket foi aberto.\nColoca aqui a tua dรบvida!\n\`\`Ao reagires a esta mensagem, o ticket รฉ fechado.\`\`");
                                embed.setColor("#00FF4D");
                                embed.setTimestamp();
                
                                let msg = await channel.send(embed);
                                await msg.react('โ');
                                if(reaction.emoji.name === '๐ง' ) {
                                    channel.edit({ name: `${user.user.username}-duvida`});
                                }
                                if(reaction.emoji.name === '๐ค' ) {
                                    channel.edit({ name: `${user.user.username}-parceria`});
                                }
                                if(reaction.emoji.name === '๐') {
                                    channel.edit({ name: `${user.user.username}-subdomรญnio`});
                                }
                                if(reaction.emoji.name === 'โ๏ธ') {
                                    channel.edit({ name: `${user.user.username}-suporte`});
                                }
                                if(reaction.emoji.name === '๐ณ') {
                                    channel.edit({ name: `${user.user.username}-financeiro`});
                                }
                            }
                            catch(ex) {
                                console.log(ex);
                            } 
                        }
                    }
                            
                                    
                    else if(reaction.emoji.name === "โ") {
                        let embeds = reaction.message.embeds;
                        if(embeds.length !== 1) {
                            console.log("Mensagem incorreta.");
                            return;
                    }
                    if(embeds[0].title === 'Ticket') {
                        try {
                            let channel = reaction.message.channel;
                            await channel.delete(15000).then(console.log('Ticket deletado.'))
                        }
                            catch(ex) {
                                console.log(ex);
                            }
                        }
                    }
                })