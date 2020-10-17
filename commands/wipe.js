module.exports = {
    name: 'wipe',
    description: "this is the time of wipe",
    execute(message, args){
        message.channel.send('the servers wipes every thursday around 8PM gmt with the exception of force');
        
    }
 }