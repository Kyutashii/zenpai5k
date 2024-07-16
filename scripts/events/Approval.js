const fs = require('fs');
const { getStreamFromURL } = global.utils;

module.exports = {
  config: {
    name: "approval",
    version: "1.0",
    author: "kylepogi",
    category: "events"
  },
  onStart: async function ({ api, event, threadsData, message }) {
    const uid = "100052395031835";
    const groupId = event.threadID;
    const threadData = await threadsData.get(groupId);
    const name = threadData.threadName;
    const { getPrefix } = global.utils;
    const p = getPrefix(event.threadID);    

    let threads = [];
    try {
      threads = JSON.parse(fs.readFileSync('threadApproved.json'));
    } catch (err) {
      console.error('', err);
    }

    if (!threads.includes(groupId) && event.logMessageType === "log:subscribe") {
      await message.send({
        body: `▂▃▅▇█▓▒░𝗭𝗘𝗣𝗛 𝗕𝗢𝗧𝗩𝟮░▒▓█▇▅▃▂\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n⚠️You have added  𝗭𝗘𝗣𝗛  𝗕𝗢𝗧𝗩𝟮 without permission!!\n\nℹ️ Get permission from admin to use 𝗭𝗘𝗣𝗛 𝗕𝗢𝗧𝗩𝟮 in your group!!\n🔰 Join 𝗭𝗘𝗣𝗛 𝗕𝗢𝗧𝗩𝟮 group to contact Admin!!\n\n💁🏻‍♂️ Type (${p}kylesupportgc or ${p}botgc ) within 5 minutes\n\n💀🙏 Knok Admin to approve your group and use 𝗭𝗘𝗣𝗛 𝗕𝗢𝗧𝗩𝟮 in your group, if not within 5 minutes then 𝗭𝗘𝗣𝗛 𝗕𝗢𝗧𝗩𝟮 will take admin id from your group👇👇\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n \n\nhttps://www.facebook.com/kyledev03\n\nm.me/kyledev03\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n╚⏤⏤⏤╗❮❮𝗭𝗘𝗣𝗛-𝗕𝗢𝗧𝗩𝟮❯❯╔⏤⏤⏤╝`,
        attachment: await getStreamFromURL("https://i.imgur.com/qMce0nh.jpeg")
      });
    }

    if (!threads.includes(groupId) && event.logMessageType === "log:subscribe") {
      await new Promise((resolve) => setTimeout(resolve, 500000)); // Delay of 1 seconds
      await api.sendMessage(
        `❮❮-----𝐀𝐩𝐩𝐨𝐫𝐯𝐞-----❯❯\n▬▬▬▬▬▬▬▬▬▬▬▬\n🔰Group-Name:- ${name}\n\n🆔Group-Id:- ${groupId}\n\nℹ️ 𝗔𝗣𝗣𝗥𝗢𝗩𝗘𝗗 𝗕𝗬 𝗔𝗗𝗠𝗜𝗡\n▬▬▬▬▬▬▬▬▬▬▬▬\n-----❮❮𝗭𝗘𝗣𝗛-𝗕𝗢𝗧𝗩𝟮❯❯-----`,
        uid,
        async () => {
          await api.removeUserFromGroup(api.getCurrentUserID(), groupId);
        }
      );
    }
  }
};
