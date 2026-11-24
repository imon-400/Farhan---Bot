module.exports.config = {
  name: "goiadmin",
    version: "1.0.0",
    permission: 0,
    credits: "nayan",
    description: "mention",
    prefix: true,
    category: "user",
    usages: "tag",
    cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
  if (event.senderID !== "@Imon","100069926588234","100069926588234") {
    var aid = ["@Imon","100069926588234","100069926588234"];
    for (const id of aid) {
    if ( Object.keys(event.mentions) == id) {
      var msg = ["Mantion_দিস না _IMON বস এর মন মন ভালো নেই আস্কে-!💔🥀", "- আমার বস IMON এর সাথে কেউ সেক্স করে না থুক্কু টেক্স করে নাহ🫂💔", "👉আমার বস ♻️ 𝐈𝐌𝐎𝐍 এখন বিজি আছে । তার ইনবক্সে এ মেসেজ দিয়ে রাখো https://www.facebook.com/Imon.132233‎‎‎‎‎‎‎‎‎ 🔰                                        ♪√বস ফ্রি হলে আসবে🧡😁😜🐒","বস ফারহান কে এত মেনশন না দিয়ে বক্স আসো হট করে দিবো🤷‍ঝাং 😘🥒","বস 𝐈𝐌𝐎𝐍 কে Mantion_দিলে চুম্মাইয়া ঠুটের কালার change কইরা,লামু 💋😾😾🔨","👉আমার বস♻️ 𝐈𝐌𝐎𝐍 এখন বিজি আছে । তার ইনবক্সে এ মেসেজ দিয়ে রাখো ‎‎‎‎‎‎‎‎‎https://www.facebook.com/Imon.132233 🔰 ♪√বস ফ্রি হলে আসবে🧡😁😜🐒","𝐈𝐌𝐎𝐍 বস এখন  বিজি জা বলার আমাকে বলতে পারেন_!!😼🥰","𝐈𝐌𝐎𝐍 বস কে এতো মেনশন নাহ দিয়া বস কে একটা জি এফ দে 😒 😏","Mantion_না দিয়ে বস 𝐈𝐌𝐎𝐍 এর সাথে সিরিয়াস প্রেম করতে চাইলে ইনবক্স","বস 𝐈𝐌𝐎𝐍 কে মেনশন দিসনা পারলে একটা জি এফ দে","বাল পাকনা Mantion_দিস না বস 𝐈𝐌𝐎𝐍 প্রচুর বিজি আছে 🥵🥀🤐","চুমু খাওয়ার বয়স টা আমার বস 𝐈𝐌𝐎𝐍 চকলেট🍫খেয়ে উড়িয়ে দিল 🤗"];
      return api.sendMessage({body: msg[Math.floor(Math.random()*msg.length)]}, event.threadID, event.messageID);
    }
    }}
};
module.exports.run = async function({}) {
}
