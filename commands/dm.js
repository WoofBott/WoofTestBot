module.exports = {
 name: "dm",
 description: "Responds with with a dm!",
 callback(client,message){
 message.author.send("time to spam dm's");
 }
}