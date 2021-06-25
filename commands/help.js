const Discord = require("discord.js");

module.exports = {
 name: "help",
 description: "Respond with every command avaible!",
 callback(client,message){
   let embed = new Discord.MessageEmbed()
    .setTitle("Commands")
    .setDescription("Bot prefix: `w!` \n\n**Owner** \n`WIP` \n**Moderation** \n`kick` \n**Utility** \n`purge`,`slowmode` \n**Posting** \n`report` \n**Roles** \n`WIP` \n**Fun** \n`nameme`,`kill`,`gayrate` \n**Information** \n`embed`,`ping`,`dm`,`Rreact`,`botinfo`,membercount")
    .setColor("#e9c172")
    .setFooter("WoofTest - Version 1.0");
 message.channel.send(embed);
 }
}