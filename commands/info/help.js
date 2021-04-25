const Discord = require('discord.js');
const { prefix } = require("../../data/config.json")

module.exports.run = async(bot, message, args) => {
    let embed = new Discord.MessageEmbed().setAuthor("| Help commands.", message.author.avatarURL())
    
    for(let [k, v] of getCategories()) {
        embed.addField(k.toUpperCase(), v, false);        
    }
    
    message.channel.send(embed);

    function getCategories() {
        let map = new Map();

        bot.commands.forEach(async (c) => {
            if(map.has(c.help.category)) return;
            
            let commands = getCommands(c.help);
            map.set(c.help.category, commands);
        });

        return map;
    }

    /* This is performance wise probably very bad... */
    function getCommands(command) {
        var text = "";
        
        bot.commands.forEach((c) => {
            if(command.category == c.help.category) {
                text += `**${prefix}${c.help.name}** - *${c.help.description}*\n`;
            }
        });
        
        return text;
    }
}

module.exports.help = {
    category: "info",
    name: "help",
    description: "See all the commands of this bot!",
};