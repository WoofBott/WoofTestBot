const Discord = require("discord.js");

module.exports = {
 name: "report",
 description: "Send a report!",
 callback(client,message){
 let args = message.content
  .split(" ")
  .slice(1)
  if(!args[0]) return message.channel.send("You Need To Mention The Bug In Order To Report Something")
 const reportlog = new Discord.MessageEmbed()
         .setTitle(`${message.author.username} Submitted A New Bug Report`) 
      .setColor('RANDOM')
       .setAuthor(
        `${message.author.tag}`,
        message.author.displayAvatarURL({ dynamic: true })
      )
.setDescription(args.join(" "))
.setFooter(`Sent in From ${message.guild} Server`)
.setThumbnail(message.guild.iconURL({ dynamic: true }))
.setTimestamp()
client.channels.cache.get('840121760375767051').send(reportlog).then (sentMessage => {
    sentMessage.react(`✅`)
    sentMessage.react(`🚫`)
  })
  message.channel.send("Your Report has succesfully been sent.");
}
 }