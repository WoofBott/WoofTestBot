const Discord = require("discord.js");

module.exports = {
 name: "embed",
 description: "Responds with a embed!",
 callback(client,message){
   let embed = new Discord.MessageEmbed()
 .setTitle("this is Emded title")
 .setDescription("this is Embed description")
 .setColor("PURPLE")
 .setFooter("This is embed footer")
 message.channel.send(embed);
 }
}