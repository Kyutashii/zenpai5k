const { GoatWrapper } = require('fca-liane-utils');
 const axios = require('axios');
const os = require("os");
const fs = require("fs-extra");
const uptimeFacts = [
"The only limit to our realization of tomorrow will be our doubts of today.","Every day may not be good, but there's something good in every day.","Success is stumbling from failure to failure with no loss of enthusiasm.","The future belongs to those who believe in the beauty of their dreams.","The only way to do great work is to love what you do.","Don't watch the clock; do what it does. Keep going.","The best way to predict the future is to create it.","The journey of a thousand miles begins with one step.","Believe you can and you're halfway there.","Life is 10% what happens to us and 90% how we react to it." 
];
const randomFact = uptimeFacts[Math.floor(Math.random() * uptimeFacts.length)];

const startTime = new Date(); // Moved outside onStart

module.exports = {
  config: {
    name: "uptime5",
    aliases: ["run", "running", "stats","upt"],
    author: "Kylepogi",
    countDown: 0,
    role: 0,
    category: "system",
    longDescription: {
      en: "Get System Information",
    },
  },
  
  onStart: async function ({ api, event, args, threadsData, usersData }) {
    try {
      const uptimeInSeconds = (new Date() - startTime) / 1000;

      const seconds = uptimeInSeconds;
      const days = Math.floor(seconds / (3600 * 24));
      const hours = Math.floor((seconds % (3600 * 24)) / 3600);
      const minutes = Math.floor((seconds % 3600) / 60);
      const secondsLeft = Math.floor(seconds % 60);
      const uptimeFormatted = `${days}d ${hours}h ${minutes}m ${secondsLeft}s`;

      const loadAverage = os.loadavg();
      const cpuUsage =
        os
          .cpus()
          .map((cpu) => cpu.times.user)
          .reduce((acc, curr) => acc + curr) / os.cpus().length;

      const totalMemoryGB = os.totalmem() / 1024 ** 3;
      const freeMemoryGB = os.freemem() / 1024 ** 3;
      const usedMemoryGB = totalMemoryGB - freeMemoryGB;

      const allUsers = await usersData.getAll();
      const allThreads = await threadsData.getAll();
      const currentDate = new Date();
      const options = { year: "numeric", month: "numeric", day: "numeric" };
      const date = currentDate.toLocaleDateString("en-US", options);
      const time = currentDate.toLocaleTimeString("en-US", {
        timeZone: "Asia/Manila",
        hour12: true,
      });

      const timeStart = Date.now();
      await api.sendMessage({
        body: "🔎🚀🛸| checking Wait Boss........⚓🛟",
      }, event.threadID);

      const ping = Date.now() - timeStart;

      let pingStatus = "⛔| 𝖡𝖺𝖽 𝖲𝗒𝗌𝗍𝖾𝗆";
      if (ping < 1000) {
        pingStatus = "✅| 𝖲𝗆𝗈𝗈𝗍𝗁 𝖲𝗒𝗌𝗍𝖾𝗆";
      }
      const systemInfo = `♡   ∩_∩
 （„• ֊ •„)♡
╭─∪∪────────────⟡
│ 𝗨𝗣𝗧𝗜𝗠𝗘 𝗜𝗡𝗙𝗢
├───────────────⟡
│ 🤖 𝗕𝗢𝗧 𝗜𝗡𝗙𝗢 
│ 𝙽𝙰𝙼𝙴: 𝗭𝗘𝗣𝗛 𝗕𝗢𝗧
│ 𝙻𝙰𝙽𝙶: 𝙽𝚘𝚍𝚎𝚓𝚜
│ 𝙿𝚁𝙵𝙸𝚇: [ × ]
│ 𝙳𝙴𝚅𝚂: 𝙺𝚈𝙻𝙴
├───────────────⟡
│ ⏰ 𝗥𝗨𝗡𝗧𝗜𝗠𝗘
│  ${uptimeFormatted}
├───────────────⟡
│ 👑 𝗦𝗬𝗦𝗧𝗘𝗠 𝗜𝗡𝗙𝗢
│𝙾𝚂: ${os.type()} ${os.arch()}
│𝙻𝙰𝙽𝙶 𝚅𝙴𝚁: ${process.version}
│𝙲𝙿𝚄 𝙼𝙾𝙳𝙴𝙻: ${os.cpus()[0].model}
│𝚂𝚃𝙾𝚁𝙰𝙶𝙴: ${usedMemoryGB.toFixed(2)} GB / ${totalMemoryGB.toFixed(2)} GB
│𝙲𝙿𝚄 𝚄𝚂𝙰𝙶𝙴: ${cpuUsage.toFixed(1)}%
│𝚁𝙰𝙼 𝚄𝚂𝙶𝙴: ${process.memoryUsage().heapUsed / 1024 / 1024} MB;
├───────────────⟡
│ ✅ 𝗢𝗧𝗛𝗘𝗥 𝗜𝗡𝗙𝗢
│𝙳𝙰𝚃𝙴: ${date}
│𝚃𝙸𝙼𝙴: ${time}
│𝚄𝚂𝙴𝚁𝚂: ${allUsers.length}
│𝚃𝙷𝚁𝙴𝙰𝙳𝚂: ${allThreads.length}
│𝙿𝙸𝙽𝙶: ${ping}𝚖𝚜
│𝚂𝚃𝙰𝚃𝚄𝚂: ${pingStatus}
│ 📌 𝚄𝙿𝚃𝙸𝙼𝙴 𝙵𝙰𝙲𝚃: ${randomFact}
╰───────────────⟡
`;

      api.sendMessage(
        {
          body: systemInfo,
        },
        event.threadID,
        (err, messageInfo) => {
          if (err) {
            console.error("Error sending message with attachment:", err);
          } else {
            console.log(
              "Message with attachment sent successfully:",
              messageInfo,
            );
          }
        },
      );
    } catch (error) {
      console.error("Error retrieving system information:", error);
      api.sendMessage(
        "Unable to retrieve system information.",
        event.threadID,
        event.messageID,
      );
    }
  },
};

const wrapper = new GoatWrapper(module.exports);
wrapper.applyNoPrefix({ allowPrefix: false });
