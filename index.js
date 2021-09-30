const Discord = require('discord.js');
const Chalk = require('chalk');
const fs = require('fs');
const config = require('./data/config.json');

const start = new Date().getMilliseconds();
const bot = new Discord.Client();
const prefix = config['prefix'];

const info = `${Chalk.blueBright("INFO")}`;
const success = `${Chalk.greenBright("SUCCESS")}`;
const error = `${Chalk.redBright("ERROR")}`;

const folders = ["info", "fun"];
bot.commands = new Discord.Collection();

/* I did not made a automation function for this */
folders.forEach((d) => {
    fs.readdir(`./commands/${d}/`, (err, files) => {
        if (err) console.log(`${error} ${err.message}`);
        console.log(`${info} Loaded ${files.length} commands (${d})`);
        
        files.forEach((f) => {
            if (!f.endsWith(".js")) return;

            let props = require(`./commands/${d}/${f}`);
            bot.commands.set(props.help.name, props);

            if (props.help.aliases) {
                props.help.aliases.forEach((alias) => {
                    bot.commands.set(alias, props);
                });
            }
        });
    });
});


bot.on('ready', () => {
    bot.user.setActivity({
        name: config['activity']['description'],
        type: config['activity']['type'],
    });

    let stop = new Date().getMilliseconds();
    console.log(`${success} ${bot.user.username}#${bot.user.discriminator} went ready in ${stop - start}ms`);
});

bot.on("message", async(message) => {
    if (message.author.bot) return;
    if (message.channel.type === "dm") return;
    if (!message.content.startsWith(prefix)) return;

    let messageArray = message.content.split(" ");
    let command = messageArray[0].toLowerCase();
    let args = messageArray.slice(1);
    let commands = bot.commands.get(command.slice(prefix.length));

    if (commands) await commands.run(bot, message, args);
});

(async() => {
    await bot.login(config['token']);
})();
