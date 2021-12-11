const {bot} = require('../index');
const config = require("../config.json");
const {msgid} = require("../config.json");
            
bot.on("raw", async payload => {
    let eventName = payload.t;
        if(eventName === 'MESSAGE_REACTION_ADD') {
            let msgId = payload.d.message_id;
                if(msgId === msgid) {
                    let channelId = payload.d.channel_id;
                    let channel = bot.channels.get(channelId);
                    if(channel) {
                        if(channel.messages.has(msgId))
                            return;
                        else {
                            try {
                                let msg = await channel.fetchMessage(msgId);
            
                            let reaction = msg.reactions.get('🧐') ||msg.reactions.get('🤝') || msg.reactions.get('🌐') || msg.reactions.get('☎️') || msg.reactions.get('💳')
                            let user = bot.users.get(payload.d.user_id);
                            reaction.remove(user)

    bot.emit('messageReactionAdd', reaction, user)
}
        catch(ex) {
    console.log(ex);
    return;
}}}}}
})