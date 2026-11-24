module.exports.config = {
  name: "info",
  version: "1.0.0",
  permission: 0,
  credits: "farhan",
  prefix: true,
  description: "search results on google",
  category: "without prefix",
  usages: "google [text]",
  cooldowns: 5,
  dependencies: 
{
  "request":"",
  "fs-extra":"",
  "axios":""
}
};
module.exports.run = async function({ api,event,args,client,Users,Threads,__GLOBAL,Currencies }) {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
const time = process.uptime(),
		hours = Math.floor(time / (60 * 60)),
		minutes = Math.floor((time % (60 * 60)) / 60),
		seconds = Math.floor(time % 60);
const moment = require("moment-timezone");
var juswa = moment.tz("Asia/Dhaka").format("『D/MM/YYYY』 【hh:mm:ss】");
var link = ["https://i.postimg.cc/Jz8XRP2J/20260624-164805-1518968413.jpg", 
            
            "https://i.postimg.cc/c401H2dW/20260615-175139-1647879766.jpg", 
            
            "https://i.postimg.cc/7hXFbBNx/20260530-120822.jpg",

"https://i.postimg.cc/hG93fyD7/20260517-171349.jpg",
            
            ""];
  
var callback = () => api.sendMessage({body:`🌺🍒🐰❀𝐀𝐃𝐌𝐈𝐍 𝐀𝐍𝐃 𝐁𝐎𝐓 𝐈𝐍𝐅𝐎𝐑𝐌𝐀𝐓𝐈𝐎𝐍💝🐰🍒 

╔════•|      ✿      |•════╗
💐আ্ঁস্ঁসা্ঁলা্ঁমু্ঁ💚আ্ঁলা্ঁই্ঁকু্ঁম্ঁ💐
╚════•|      ✿      |•════╝

________________________________________

💠𝐁𝐎𝐓 𝐍𝐀𝐌𝐄💠 : ${global.config.BOTNAME}

🌼𝐁𝐎𝐓 𝐀𝐃𝐌𝐈𝐍🌼 : 『😽👉𝐅𝐚𝐫𝐡𝐚𝐧 𝐈𝐬𝐥𝐚𝐦 𝐈𝐦𝐨𝐧 👈😽』

🔥𝐁𝐈𝐎 𝐀𝐃𝐌𝐈𝐍🔥 : [ ⊱༅༎😽💚༅༎⊱


-আমি ভদ্র, বেয়াদব দুটোই🥱✌️

-তুমি যেটা ডি'জার্ভ করো, আমি সেটাই দেখাবো!🙂


⊱༅༎😽💚༅༎⊱ ]

🏠𝐀𝐃𝐃𝐑𝐄𝐒𝐒🏠 :[𝐃𝐡𝐚𝐤𝐚]:[𝐁𝐀𝐍𝐆𝐋𝐀𝐃𝐄𝐒𝐇] 
🌺𝐑𝐄𝐋𝐈𝐆𝐈𝐎𝐍🌺 :[𝐈𝐒𝐋𝐀𝐌]
💮𝐆𝐄𝐍𝐃𝐄𝐑💮  :[𝐌𝐀𝐋𝐄]
🌸𝐑𝐄𝐋𝐀𝐓𝐈𝐎𝐍𝐒𝐇𝐈𝐏🌸 :[𝐒𝐈𝐍𝐆𝐋𝐄]
🌼𝐖𝐎𝐑𝐊🌼 :[𝐉𝐎𝐁]
🌷𝐖𝐇𝐀𝐓'𝐒 𝐀𝐏𝐏🌷:[𝐢𝐧𝐛𝐨𝐱]
_____________🅲🅾🅽🆃🅰🅲🆃_____________

💥𝐅𝐀𝐂𝐄𝐁𝐎𝐎𝐊 𝐈𝐃 (❶)💥 : https://www.facebook.com/Imon.132233/


✴️𝐁𝐎𝐓 𝐏𝐑𝐄𝐅𝐈𝐗✴️ : ${global.config.PREFIX}

❇️𝐁𝐎𝐓 𝐎𝐖𝐍𝐄𝐑✳️ : {🌻 𝐅𝐚𝐫𝐡𝐚𝐧 𝐈𝐬𝐥𝐚𝐦 𝐈𝐦𝐨𝐧 🌻} 

🌺𝐎𝐓𝐇𝐄𝐑 𝐍𝐅𝐎𝐑𝐌𝐀𝐓𝐈𝐎𝐍🌺____________________

𝐓𝐘𝐏𝐄 /𝐀𝐃𝐌𝐈𝐍  

♻️➟ 𝐔𝐏𝐓𝐈𝐌𝐄 ♻️

🔰𝐓𝐎𝐃𝐀𝐘 𝐈𝐒 𝐓𝐈𝐌𝐄🔰 : ${juswa} 

🐰🍒𝐁𝐎𝐓 𝐈𝐒 𝐑𝐔𝐍𝐍𝐈𝐍𝐆🍒🐰 ${hours}:${minutes}:${seconds}.

💚🌺𝐓𝐇𝐀𝐍𝐊𝐒 𝐅𝐎𝐑 𝐔𝐒𝐈𝐍𝐆🌺💚 ${global.config.BOTNAME} 『😽🖤🌺』`,attachment: fs.createReadStream(__dirname + "/cache/juswa.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/juswa.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/juswa.jpg")).on("close",() => callback());
   };
