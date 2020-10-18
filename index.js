const Discord = require('discord.js');
const client = new Discord.Client();

const prefix = '-';

const ms = require("ms");

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}


client.once('ready', () => {
    console.log('one grid mod!');
    client.user.setActivity('over the One grid community', { type: 'WATCHING'}).catch(console.error);
});


client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'ping'){
        client.commands.get('ping').execute(message, args);
    } else if(command === 'help'){
        client.commands.get('help').execute(message, args);
    } else if(command === 'wipe'){
        client.commands.get('wipe').execute(message, args);
    } else if(command === 'kill'){
        client.commands.get('kill').execute(message, args);
    } else if(command === 'staff'){
        client.commands.get('staff').execute(message, args);
}
switch (args[0]) {
    case 'mute':
        var person  = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[1]));
        if(!person) return  message.reply("I CANT FIND THE USER " + person)

        let mainrole = message.guild.roles.find(role => role.name === "Newbie");
        let role = message.guild.roles.find(role => role.name === "mute");
       

        if(!role) return message.reply("Couldn't find the mute role.")


        let time = args[2];
        if(!time){
            return message.reply("You didnt specify a time!");
        }

        person.removeRole(mainrole.id)
        person.addRole(role.id);


        message.channel.send(`@${person.user.tag} has now been muted for ${ms(ms(time))}`)

        setTimeout(function(){
            
            person.addRole(mainrole.id)
            person.removeRole(role.id);
            console.log(role.id)
            message.channel.send(`@${person.user.tag} has been unmuted.`)
        }, ms(time));



    break;
}
});


client.login('NzU2OTM2MzIzOTMxMDQ2MDAx.X2ZF4g.wdPGZSP3NGFiqD3CRdfulH1REKQ');

