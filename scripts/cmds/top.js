 module.exports = {
  config: {
    name: "top",
    aliases: ['tb'],
    version: "1.0",
    author: "Kyle",
    role: 0,
    shortDescription: {
      vi: "",
      en: "💰𝘁𝗼𝗽 𝟭𝟬 𝗯𝗮𝗹𝗮𝗻𝗰𝗲 𝘂𝘀𝗲𝗿💰"
    },
    longDescription: {
      vi: "",
      en: ""
    },
    category: "ECONOMY",
    guide: {
      vi: "",
      en: ""
    }
  },
  onStart: async function ({ api, args, message, event, usersData }) {
    const allUsers = await usersData.getAll();
 
    const topUsers = allUsers.sort((a, b) => b.money - a.money).slice(0, 10);
 
    const topUsersList = topUsers.map((user, index) => `${index + 1}. 👤${user.name}\n¥:${user.money}💵`);
 
    const messageText = `💰𝗧𝗢𝗣 𝟭𝟬 𝗥𝗜𝗖𝗛𝗘𝗦𝗧 𝗨𝗦𝗘𝗥'𝗦 💵:\n▬▬▬▬▬▬▬▬▬▬▬▬\n${topUsersList.join('\n')}\n▬▬▬▬▬▬▬▬▬▬▬▬`;
 
    message.reply(messageText);
  }
};
