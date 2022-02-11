const Discord = require("discord.js")
const RichEmbed = require("discord.js")

exports.run = async (client, message, args) => {
  
  let hex = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
  const helpembed = new Discord.RichEmbed()
              .setTitle("Gen Commands")
              .addField("b?minecraft", `Generates a minecraft account`)
			  .addField("b?help", `Shows this menu`)
			  .addField("b?stock", `Shows the stock for each account type`)
			  .addField("b?ping", `Returns the API Latency and the Latency of the bot`)
			  .addField("b?invite", `Invite the bot to your server`)
			  .addField("b?nitro", `Generates a random nitro code`)
			  .addField("b?say", `Say a messages as the bot`)
			  .setFooter("Made By IdealWolf")
              .setColor(hex)

message.author.send(helpembed)
message.delete();
}