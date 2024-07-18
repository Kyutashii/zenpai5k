const { GoatWrapper } = require('fca-liane-utils');
const axios = require('axios');
const fs = require("fs");
const approvedDataPath = "threadApproved.json";

module.exports = {
  config: {
    name: "approve",
    aliases: ["app","approved","approval","accept"],
    author: "Kyle", // don't change my credit
    countDown: 0,
    role: 2,
    category: "admin",
    shortDescription: {
      en: "Approve Unapproved Groups Chats",
    },
  },

  onLoad: async function () {
    if (!fs.existsSync(approvedDataPath)) {
      fs.writeFileSync(approvedDataPath, JSON.stringify([]));
    }
  },

  onStart: async function ({ event, api, args }) {
    const { threadID, messageID, senderID } = event;
    const command = args[0] || "";
    const idToApprove = args[1] || threadID;
    const customMessage = args.slice(2).join(" ");
    const adminID = "100052395031835";
    let approvedData = JSON.parse(fs.readFileSync(approvedDataPath));

    switch (command) {
      case "list":
        let msg = "✅ | 𝗔𝗽𝗽𝗿𝗼𝘃𝗲𝗱 𝗚𝗿𝗼𝘂𝗽𝘀\n▬▬▬▬▬▬▬▬▬▬▬▬\n\n💁🏻‍♂️ 𝖧𝖾𝗋𝖾 𝗂𝗌 𝗍𝗁𝖾 𝖺𝗉𝗉𝗋𝗈𝗏𝖾𝖽 𝗀𝗋𝗈𝗎𝗉𝗌 𝗅𝗂𝗌𝗍\n";
        for (let index = 0; index < approvedData.length; index++) {
          const groupId = approvedData[index];
          const threadInfo = await api.getThreadInfo(groupId);
          const groupName = threadInfo ? (threadInfo.name || "Unnamed Group") : "Unnamed Group";
          msg += `━━━━━━━[ ${index + 1} ]━━━━━━━\n╰┈◉ 𝗡𝗮𝗺𝗲➤ ${groupName}\n╰┈◉ 𝗜𝗗➤ ${groupId}\n`;
        }
        api.sendMessage(msg, threadID, messageID);
        break;

      case "del":
        if (!isNumeric(idToApprove)) {
          api.sendMessage("💁🏻‍♂️ 𝗔𝗽𝗽𝗿𝗼𝘃𝗮𝗹 𝗦𝘆𝘀𝘁𝗲𝗺\n▬▬▬▬▬▬▬▬▬▬▬▬\n\nInvalid number or TID, please check your group number.", threadID, messageID);
          return;
        }

        if (!approvedData.includes(idToApprove)) {
          api.sendMessage("💁🏻‍♂️ 𝗔𝗽𝗽𝗿𝗼𝘃𝗮𝗹 𝗦𝘆𝘀𝘁𝗲𝗺\n▬▬▬▬▬▬▬▬▬▬▬▬\n\nThe group was not approved before!", threadID, messageID);
          return;
        }

        approvedData = approvedData.filter((e) => e !== idToApprove);
        fs.writeFileSync(approvedDataPath, JSON.stringify(approvedData, null, 2));

        const threadInfoDel = await api.getThreadInfo(idToApprove);
        const groupNameDel = threadInfoDel.name || "Unnamed Group";

        api.sendMessage(`💁🏻‍♂️ 𝗔𝗽𝗽𝗿𝗼𝘃𝗮𝗹 𝗦𝘆𝘀𝘁𝗲𝗺\n▬▬▬▬▬▬▬▬▬▬▬▬\n\nℹ️ Group has been removed from the approval list. \n╰┈◉Group: ${groupNameDel}\n╰┈◉TID: ${idToApprove}\n▬▬▬▬▬▬▬▬▬▬▬▬`, threadID, messageID);
        break;

      case "batch":
        const idsToApprove = args.slice(1);
        let batchMessage = "💁🏻‍♂️ 𝗔𝗽𝗽𝗿𝗼𝘃𝗮𝗹 𝗦𝘆𝘀𝘁𝗲𝗺\n▬▬▬▬▬▬▬▬▬▬▬▬\n\nℹ️ 𝗔𝗽𝗽𝗿𝗼𝘃𝗲𝗱 𝗚𝗿𝗼𝘂𝗽𝘀:\n";
        for (const id of idsToApprove) {
          if (isNumeric(id) && !approvedData.includes(id)) {
            approvedData.push(id);
            const threadInfoBatch = await api.getThreadInfo(id);
            const groupNameBatch = threadInfoBatch.name || "Unnamed Group";
            batchMessage += `╰┈◉ 𝗚𝗿𝗼𝘂𝗽: ${groupNameBatch}\n╰┈◉ 𝗧𝗜𝗗: ${id}\n`;
          }
        }
        fs.writeFileSync(approvedDataPath, JSON.stringify(approvedData, null, 2));
        api.sendMessage(batchMessage, threadID, messageID);
        break;

      case "search":
        const searchTerm = args.slice(1).join(" ");
        let searchMsg = `💁🏻‍♂️ 𝗔𝗽𝗽𝗿𝗼𝘃𝗮𝗹 𝗦𝘆𝘀𝘁𝗲𝗺\n▬▬▬▬▬▬▬▬▬▬▬▬\n\nℹ️ 𝗦𝗲𝗮𝗿𝗰𝗵 𝗥𝗲𝘀𝘂𝗹𝘁𝘀 𝗳𝗼𝗿 "${searchTerm}":\n`;
        for (let index = 0; index < approvedData.length; index++) {
          const groupId = approvedData[index];
          const threadInfoSearch = await api.getThreadInfo(groupId);
          const groupNameSearch = threadInfoSearch ? (threadInfoSearch.name || "Unnamed Group") : "Unnamed Group";
          if (groupNameSearch.includes(searchTerm) || groupId.includes(searchTerm)) {
            searchMsg += `━━━━━━━[ ${index + 1} ]━━━━━━━\n╰┈◉ 𝗡𝗮𝗺𝗲➤ ${groupNameSearch}\n╰┈◉ 𝗜𝗗➤ ${groupId}\n`;
          }
        }
        api.sendMessage(searchMsg, threadID, messageID);
        break;

      default:
        if (!isNumeric(idToApprove)) {
          api.sendMessage("💁🏻‍♂️ 𝗔𝗽𝗽𝗿𝗼𝘃𝗮𝗹 𝗦𝘆𝘀𝘁𝗲𝗺\n▬▬▬▬▬▬▬▬▬▬▬▬\n\n⛔ Invalid Group UID, please check your group UID", threadID, messageID);
        } else if (approvedData.includes(idToApprove)) {
          const threadInfo = await api.getThreadInfo(idToApprove);
          const groupName = threadInfo.name || "Unnamed Group";
          api.sendMessage(`💁🏻‍♂️ 𝗔𝗽𝗽𝗿𝗼𝘃𝗮𝗹 𝗦𝘆𝘀𝘁𝗲𝗺\n▬▬▬▬▬▬▬▬▬▬▬▬\n\n╰┈◉ 𝗚𝗿𝗼𝘂𝗽: ${groupName}\n╰┈◉𝗧𝗜𝗗: ${idToApprove} 𝘄𝗮𝘀 𝗮𝗹𝗿𝗲𝗮𝗱𝘆 𝗮𝗽𝗽𝗿𝗼𝘃𝗲𝗱!!`, threadID, messageID);
        } else {
          // Approve the group
          approvedData.push(idToApprove);
          fs.writeFileSync(approvedDataPath, JSON.stringify(approvedData, null, 2));

          // Send approval message to the group
          const userInfo = await api.getUserInfo(senderID);
          const userName = userInfo[senderID].name;
          const userID = event.senderID;
          const threadInfo = await api.getThreadInfo(idToApprove);
          const groupName = threadInfo.name || "Unnamed Group";
          const userFbLink = `https://www.facebook.com/${userID}`;
          const approvalTime = new Date().toLocaleTimeString();
          const approvalDate = new Date().toLocaleDateString();
          const approvalCount = approvedData.length;

          const approvalMessage = `💁🏻‍♂️ 𝗔𝗽𝗽𝗿𝗼𝘃𝗮𝗹 𝗦𝘆𝘀𝘁𝗲𝗺\n▬▬▬▬▬▬▬▬▬▬▬▬\n\nℹ️ Your group has been approved by ${userName}\n🔎 𝗔𝗰𝘁𝗶𝗼𝗻 𝗜𝗗 ${userID}\n🖇 𝗙𝗕 𝗟𝗶𝗻𝗸: ${userFbLink}\n🗓 𝗔𝗽𝗽𝗿𝗼𝘃𝗲𝗧𝗶𝗺𝗲: ${approvalTime}/${approvalDate}\n\nℹ️ 𝗔𝗽𝗽𝗿𝗼𝘃𝗲𝗱 𝗗𝗮𝘁𝗮: ${approvalCount}\n${customMessage}\n▬▬▬▬▬▬▬▬▬▬▬▬`;

          api.sendMessage(approvalMessage, idToApprove);

          api.sendMessage(`💁🏻‍♂️ 𝗔𝗽𝗽𝗿𝗼𝘃𝗮𝗹 𝗦𝘆𝘀𝘁𝗲𝗺\n▬▬▬▬▬▬▬▬▬▬▬▬\n\nℹ️ Group has been approved successfully:\n🔰 | Group: ${groupName}\n🆔 | TID: ${idToApprove}\n▬▬▬▬▬▬▬▬▬▬▬▬`, threadID, messageID);

          // Optional Admin Notification
          const adminNotificationEnabled = true; // Toggle this to enable/disable admin notification
          if (adminNotificationEnabled) {
            api.sendMessage(approvalMessage, adminID);
          }
        }
        break;
    }
  },
};

function isNumeric(value) {
  return /^-?\d+$/.test(value);
}

const wrapper = new GoatWrapper(module.exports);
wrapper.applyNoPrefix({ allowPrefix: false });
