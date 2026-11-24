const fs = require("fs");
module.exports.config = {
  name: "reply",
  version: "1.1.0",
  permission: 0,
  credits: "Farhan",
  description: "noprefix",
  prefix: false,
  category: "user",
  usages: "",
  cooldowns: 5,
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	let react = event.body.toLowerCase();
	if(react.includes("i love you") ||
     react.includes("love") || 
react.includes("baby") || react.includes("xan") || react.includes("xanu") || react.includes("sona") ||
react.includes("xn") ||
react.includes("xona") || react.includes("xuna") || react.includes("ভালবাসি") ||
react.includes("ব্রেকাপ") ||
react.includes("break up") ||
react.includes("sex") ||
react.includes("nude") ||  
react.includes("Fucking") ||
react.includes("🤤")) {
		var msg = {
				body: "- প্রেম পিরিতি নামক কিছু বলতে মন চাইলে বস ইমন এর ইনবক্স চলে জাও-!!🌚❌                                                                                                              👉https://www.facebook.com/Imon.132233♻️✔️"
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😤", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  } 
