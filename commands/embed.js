const Discord = require('discord.js');
const { description } = require('./help');

module.exports.run = async (bot, message, args) => {
const embed = new Discord.MessageEmbed()
      .setTitle('this is a test')

      message.channel.send(embed);
}

module.exports.config = {
    name: "embed",
    description: "embed command",
    usage: "-embed",
    accessableby: "everyone",
    aliases: []
}