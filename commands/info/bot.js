const Discord = require('discord.js');

module.exports.run = async(bot, message, args) => {
    let embed = new Discord.MessageEmbed().setTitle('Your bot is working 🎉')
    message.channel.send(embed);
}

module.exports.help = {
    category: "info",
    name: "bot",
    description: "Check if your embed command actually works!",
};