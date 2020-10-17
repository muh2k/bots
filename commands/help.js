module.exports = {
    name: 'help',
    description: "this commands tells you the commands of the bot",
    execute(message, args){
        message.channel.send('help has arrived my commands are 1 = ban || 2 = help (the one your using now) || 3 = easteregg || 4 = mute || 5 = ping || 6 = wipe');
        
    }
 }