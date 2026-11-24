module.exports.config = {
  name: "admin",
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

var callback = () => api.sendMessage({body:`🌺🍒🐰❀𝐀𝐃𝐌𝐈𝐍 𝐀𝐍𝐃 𝐁𝐎𝐓 𝐈𝐍𝐅𝐎𝐑𝐌𝐀𝐓𝐈𝐎𝐍💝🐰🍒 

╔════•|      ✿      |•════╗
💐আ্ঁস্ঁসা্ঁলা্ঁমু্ঁ💚আ্ঁলা্ঁই্ঁকু্ঁম্ঁ💐
╚════•|      ✿      |•════╝

________________________________________

💠𝐁𝐎𝐓 𝐍𝐀𝐌𝐄💠 : ${global.config.BOTNAME}

🌼𝐁𝐎𝐓 𝐀𝐃𝐌𝐈𝐍🌼 : 『😽👉  𝐅𝐚𝐫𝐡𝐚𝐧 𝐈𝐬𝐥𝐚𝐦 𝐈𝐦𝐨𝐧 👈😽』

🔥𝐁𝐈𝐎 𝐀𝐃𝐌𝐈𝐍🔥 : [ ⊱༅༎😽💚༅༎⊱


-আমি ভদ্র, বেয়াদব দুটোই🥱✌️

-তুমি যেটা ডি'জার্ভ করো, আমি সেটাই দেখাবো!🙂


⊱༅༎😽💚༅༎⊱ ]

🏠𝐀𝐃𝐃𝐑𝐄𝐒𝐒🏠 : 𝐃𝐡𝐚𝐤𝐚, 𝐁𝐚𝐧𝐠𝐥𝐚𝐝𝐞𝐬𝐡

_____________🅲🅾🅽🆃🅰🅲🆃_____________

💥𝐅𝐀𝐂𝐄𝐁𝐎𝐎𝐊 𝐈𝐃 💥 : https://www.facebook.com/Imon.132233 /

✴️𝐁𝐎𝐓 𝐏𝐑𝐄𝐅𝐈𝐗✴️ : ${global.config.PREFIX}

❇️𝐁𝐎𝐓 𝐎𝐖𝐍𝐄𝐑✳️ : {🌻𝐅𝐚𝐫𝐡𝐚𝐧 𝐈𝐬𝐥𝐚𝐦 𝐈𝐦𝐨𝐧🌻} 

🌺𝐎𝐓𝐇𝐄𝐑 𝐍𝐅𝐎𝐑𝐌𝐀𝐓𝐈𝐎𝐍🌺____________________

𝐓𝐘𝐏𝐄 /𝐀𝐃𝐌𝐈𝐍  

♻️➟ 𝐔𝐏𝐓𝐈𝐌𝐄 ♻️

🔰𝐓𝐎𝐃𝐀𝐘 𝐈𝐒 𝐓𝐈𝐌𝐄🔰 : ${juswa} 

🐰🍒𝐁𝐎𝐓 𝐈𝐒 𝐑𝐔𝐍𝐍𝐈𝐍𝐆🍒🐰 ${hours}:${minutes}:${seconds}.

💚🌺𝐓𝐇𝐀𝐍𝐊𝐒 𝐅𝐎𝐑 𝐔𝐒𝐈𝐍𝐆🌺💚 ${global.config.BOTNAME} 『😽🖤🌺』`,attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID, () => 
  fs.unlinkSync(__dirname + "/cache/1.png"));  
    return request(encodeURI(`https://graph.facebook.com/61583610247347/picture?height=720&width=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`)).pipe(
fs.createWriteStream(__dirname+'/cache/1.png')).on('close',() => callback());
 };
