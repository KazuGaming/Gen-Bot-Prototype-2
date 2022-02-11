const Discord = require("discord.js")
const fs = require("fs")
const config = require("../config.json")
const talkedRecently = new Set();

exports.run = (client, message, args) => {
    
    console.log('A Minecraft Account Has Been Generated')

    message.delete(message)

    if (talkedRecently.has(message.author.id)) {
        message.reply(`You need to wait ${config.cooldown} minutes to use this command again!`).then(m => {
            setTimeout(() => {
                m.delete(m)
            }, 5000); //5 seconds
        })
    } else {
        fs.readFile('./minecraft.txt', function(err, data){
            if(err) throw err;
            data = data + '';
            var lines = data.split('\n');
            let random = lines[Math.floor(Math.random()*lines.length)];

            let hex = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
            let embed = new Discord.RichEmbed()
            .addField("Minecraft Alt", `Here is your Minecraft Alt: \n${random}`)
            .addField("Our discord:", "https://discord.gg/UkXXMvw")
            .setThumbnail("https://d1f7geppf3ca7.cloudfront.net/origin/266782/minecraft-silk-poster-3d-grass-logo.jpg")
            .setColor(hex)
            message.author.send(embed)

            message.reply("Sent you Minecraft Alt!").then(m => {
                setTimeout(() => {
                    m.delete(m)
                }, 5000); //5 seconds
            })

            talkedRecently.add(message.author.id);
            setTimeout(() => {
                talkedRecently.delete(message.author.id);
            }, config.cooldown * 60 *1000);

        })
    }
}