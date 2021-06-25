module.exports = {
 name: "nameme",
 description: "Responds with a name!",
 callback(client,message){
   let nicknames = ["Stupid", "Asshole", "Nobody", "Beatiful", "Wonderful"]
   
 message.channel.send(`${nicknames[Math.floor(Math.random() * nicknames.length)]} is your new name!`);
 }
}