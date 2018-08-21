const Discord = require('discord.js');
const A7MD = new Discord.Client();

console.log("BOT ONLINE");
 
A7MD.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**
[ARMY]-PLAYER مرحبا بك في سرفر
                               [ https://discord.gg/MPknZDS ] 
الدعوة خاصة لك و لأصدقائك ... [ ${member}  ]
**`) 
}).catch(console.error)
})
A7MD.login(process.env.BOT_TOKEN);
