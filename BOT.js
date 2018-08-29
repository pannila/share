const Discord = require('discord.js');
const A7MD = new Discord.Client();

console.log("BOT ONLINE");
 
A7MD.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**
[ARMY]-PLAYER مرحبا بك في سرفر
                               [ https://discord.gg/6xxFKfb ] 
الدعوة خاصة لك و لأصدقائك ... [ ${member}  ]
**`) 
}).catch(console.error)
})
A7MD.login(process.env.BOT_TOKEN);
