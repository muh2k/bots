module.exports = {
    name: 'help',
    description: "this commands tells you the commands of the bot",
    execute(message, args){
        message.channel.send('help has arrived my commands are 1 = ping 2 = help 3 = mute');
        
    }
 }