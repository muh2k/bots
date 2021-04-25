const Discord = require('discord.js');

module.exports.run = async(bot, message, args) => {
    if (args[0] === null) return message.reply("Can't find that user chief!");

    let mentions = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

    if (!message.mentions.members.first()) return message.reply("Please @mention someone!");

    let user = message.author;
    let target = mentions.user;
    let texts = [
        `I just killed a woman named <@${target.id}>, Hope you're feeling great!`,
        `<@${target.id}> just fell of the stairs, He can't get up!`,
        `Muh2K sat on <@${target.id}>, <@${target.id}> couldn't breathe.`,
        `<@${user.id}> pulls out a gun, <@${target.id}> bled to death.`,
        `<@${target.id}> got stuck in the toilet and no one helped him`,
        `<@${target.id}> got stuck, <@${user.id}> tried helping him but he couldn't make it`
    ];

    let random = Math.floor((Math.random() * texts.length));
    message.channel.send(texts[random]);
}

module.exports.help = {
    category: "Fun",
    name: "kill",
    description: "Murder a user of your own choice!",
};