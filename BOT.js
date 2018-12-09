const Discord = require('discord.js');
const A7MD = new Discord.Client();

console.log("BOT ONLINE");
 
A7MD.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
[ ${member}  ]
[ https://discord.gg/49svAK5 ]
**giveaways**
**free accounts**
**drops**
all accounts is here free
__________________________
plz join for me
`) 
}).catch(console.error)
})
A7MD.login(process.env.BOT_TOKEN);
