const Discord = require('discord.js');
const A7MD = new Discord.Client();

console.log("BOT ONLINE");
 
A7MD.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
[ ${member}  ]
[ http://discord.gg/2AjrKMq ]
**droping accounts**
**giveaways**
**free random accounts**

Sorry, for annoying
`) 
}).catch(console.error)
})
A7MD.login(process.env.BOT_TOKEN);
