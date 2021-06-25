const Discord = require("discord.js");

module.exports = {
 name: "botinfo",
 description: "Responds with info about the bot!",
 callback(client,message){
 let embed = new Discord.MessageEmbed()
  .setTitle("Bot Info")
  .setColor("RANDOM")
  .setDescription("Info: WoofTest")
  .addField(`Bot made by RB#4674`,`------------------`)
  .addField(`⏱| **${client.ws.ping}ms** Latency.`,`------------------`)
  .addField(`Help command: w!help`,`------------------`)
  .addField(`Bot prefix: w!`,`------------------`)
  .addField(`Requested by ${message.author.username}`,`------------------`)
  .setFooter("WoofTest - Version 1.0")
  .setTimestamp()
  message.channel.send(embed)
 }
}