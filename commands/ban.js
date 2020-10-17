module.exports = {
    name: 'ban',
    description: "this command will ban a user",
    execute(message, args){
        if(message.member.roles.cache.has('731080197461508167')){

        
        message.channel.send('sadly muh2k has yet to setup the ban finn prefix');
        } else {
            message.channel.send('OI whats the big idea here')
        }
    }
 }