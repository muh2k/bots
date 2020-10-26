module.exports = {
    name: 'help',
    description: "this commands tells you the commands of the bot",
    execute(MessageEmbed, args){
        message.channel.send(embed);
        switch(args[0]){
            case 'embed':
                const embed = new Discord.MessageEmbed()
                .addField('Player Name:', message.author.username);
                message.channel.send(embed);
                break;
        }
    
    
    
    }}