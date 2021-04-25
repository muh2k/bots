const Discord = require('discord.js');

module.exports.run = async(bot, message, args) => {
    if (args[0] === null) return message.reply("Can't find that user chief!");
    if (!message.mentions.users.first()) return message.reply("Please @mention someone!");
    let mentions = message.mentions.users.first() || message.guild.users.cache.get(args[0]);

    let embed = new Discord.MessageEmbed()
        .setTitle(`${mentions.username}`)
        .setImage(mentions.avatarURL());

    message.channel.send(embed);
}

module.exports.help = {
    category: "Fun",
    name: "avatar",
    description: "Get a user his profile picture",
};