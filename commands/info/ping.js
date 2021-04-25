const Discord = require('discord.js');

module.exports.run = async(bot, message, args) => {
   let embed = new Discord.MessageEmbed().setDescription('Ping....');
     
   await message.channel.send(embed).then(async (msg) => {
      let stop = new Date();
      let number = Date.now() - message.createdTimestamp
      embed.setDescription(`Pong 🏓`).setFooter(`${Math.round(number)}ms`).setTimestamp(stop)
      await msg.edit(embed);
    });

}

module.exports.help = {
   category: "info",
   name: "ping",
   description: "Ping the bot and see the current ms!",
};