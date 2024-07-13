const allOnEvent = global.GoatBot.onEvent;

const fs = require("fs");
const cron = require("node-cron");
const greetings = {
  every9minutes: [
    { message: "𝗗𝗼𝗻'𝘁 𝗳𝗼𝗿𝗴𝗲𝘁  𝘁𝗼  𝗮𝗱𝗱 𝗺𝘆 𝗯𝗼𝘀𝘀 𝗞𝘆𝗹𝗲.\n\n𝗉𝖺𝗋𝖺 𝗄𝖾𝖾𝗉 𝗎𝗉𝖽𝖺𝗍𝖾 𝗄𝖺 𝗇𝗂 𝖹𝖾𝗉𝗁 𝖡𝗈𝗍.\n\𝗇🔗𝗙𝗕𝗹𝗶𝗻𝗸: https://www.facebook.com/kyledev03" },
  ],
};

module.exports = {
  config: {
    name: "autogreet",
    version: "1.1",
    author: "Zed | Fixed by Liane",
    description: "Autogreeting",
    category: "events"
  },

  onStart: async ({ api, args, message, event, threadsData, usersData, dashBoardData, threadModel, userModel, dashBoardModel, role, commandName }) => {

    cron.schedule('0 */9 * * * *', () => {
      sendRandomGreeting(greetings.every9minutes);
    });

    async function sendRandomGreeting(greetingArray) {
      const randomIndex = Math.floor(Math.random() * greetingArray.length);
      const { time, message } = greetingArray[randomIndex];
      const allThreads = await threadsData.getAll();
      for (const { threadID } of allThreads) {
        try {
        await api.sendMessage(`${message}`, threadID);
        } catch (error) {
          continue;
        }
      }
    }
  }
};
