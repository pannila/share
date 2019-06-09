const Discord = require('discord.js');
const bot = new Discord.Client();

console.log("BOT ONLINE");
 
bot.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
|| ${member} ||
هل أنت وحيد 
هل تبحث عن شريكة حياتك
ألم يسبق لك و أن مارست الجنس
لك الحل 
ما عليك فقط أن تذخل لهذا السرفر
||[https://discord.gg/qa9zwuR]||
`) 
}).catch(console.error)
})
bot.login(process.env.BOT_TOKEN);
