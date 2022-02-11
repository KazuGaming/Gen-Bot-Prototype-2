const Discord = require("discord.js")
const RichEmbed = require("discord.js")

exports.run = async (client, message, args) => {
  
  let hex = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
  const stockembed = new Discord.RichEmbed()
              .setTitle("Stock")
              .setDescription(" ")
              .addField("Minecraft", `**5**`)
              .setColor(hex)

message.channel.send(stockembed)
}