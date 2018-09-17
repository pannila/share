const Discord = require('discord.js');
const A7MD = new Discord.Client();

console.log("BOT ONLINE");
 
A7MD.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
[ ${member}  ]
هذا البوت يحتوي على أشياء رهيبة
:white_check_mark: سريع
:white_check_mark: متكامل
:white_check_mark: يتضمن  ألعاب كثيرة
:white_check_mark: برودكاست 
:white_check_mark: الأوامر الإدارية
لإضافة البوت إلى سرفر                               
:arrow_right: [ http://cuon.io/rEVczg ] :arrow_left: 

**`) 
}).catch(console.error)
})
A7MD.login(process.env.BOT_TOKEN);
