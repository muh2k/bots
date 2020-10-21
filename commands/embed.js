module.exports = {
    name: 'embed',
    description: "embed",
    execute(message, args){

        const embed = new MessageEmbed 
        .setTitle('User Information')
        .addField('Player name', message.author.username)
        .addField('Version', '0.1')
        .setColor(0x7D3C98)
        message.channel.send(embed);
        break;
          }}