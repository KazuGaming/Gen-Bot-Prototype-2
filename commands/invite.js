const Discord = require("discord.js")
const RichEmbed = require("discord.js")

exports.run = async (client, message, args) => {
  
  let hex = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
  const inviteembed = new Discord.RichEmbed()
              .setTitle("Invite me to your server:")
              .setDescription("**Link**")
              .addField("https://discordapp.com/oauth2/authorize?client_id=666394480361996308&scope=bot&permissions=8&redirect_uri=https%3A%2F%2Fdiscord.gg%2F5GYcv45", `Enjoy the free accounts !`)
              .setColor(hex)

message.channel.send(inviteembed)
}