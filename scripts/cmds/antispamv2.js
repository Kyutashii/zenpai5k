const axios = require('axios');

module.exports = {
  config: {
    name: "antispamv2",
    version: "1.0.0",
    author: "Kyle",
    countDown: 5,
    role: 0,
    shortDescription: "ban user for Spamming",
    longDescription: "ban user for Spamming then Auto unban users",
    category: "owner",
    guide: "{pn}"
  },
  onStart: async function ({ api, event, global }) {
    const num = 5; // number of times spam gets banned -1, for example 5 times 6 times will get banned
    const timee = 60; // During `timee` spam `num` times will be banned

    return api.sendMessage(`⚠️ | 𝗗𝗘𝗧𝗘𝗖𝗧 𝗦𝗣𝗔𝗠𝗠𝗜𝗡𝗚凸( •̀_•́ )凸\n▬▬▬▬▬▬▬▬▬▬▬▬\n 💁🏻‍♂️automatically ban users if spam ${num} times\ntime : ${timee}s\n▬▬▬▬▬▬▬▬▬▬▬▬`, event.threadID, event.messageID);
  },
  handleEvent: async function ({ Users, Threads, api, event, global }) {
    let { senderID, messageID, threadID } = event;
    var datathread = (await Threads.getData(event.threadID)).threadInfo;

    if (!global.client.autoban) global.client.autoban = {};
if (!global.client.autoban[senderID]) {
      global.client.autoban[senderID] = {
        timeStart: Date.now(),
        number: 0
      };
    }

    const threadSetting = global.data.threadData.get(threadID) || {};
    const prefix = threadSetting.PREFIX || global.config.PREFIX;
    if (!event.body || event.body.indexOf(prefix) != 0) return;

    if (global.client.autoban[senderID].timeStart + timee * 1000 <= Date.now()) {
      global.client.autoban[senderID] = {
        timeStart: Date.now(),
        number: 0
      };
    } else {
      global.client.autoban[senderID].number++;
      if (global.client.autoban[senderID].number >= num) {
        var namethread = datathread.threadName;
        const moment = require("moment-timezone");
        const timeDate = moment.tz("Asia/Manila").format("DD/MM/YYYY HH:mm:ss");
        let dataUser = await Users.getData(senderID) || {};
        let data = dataUser.data || {};
        if (data && data.banned == true) return;
        data.banned = true;
        data.reason = `\n\nspam bot ${num} times/${timee}s\n\n` || null;
        data.dateAdded = timeDate;
        await Users.setData(senderID, { data });
        global.data.userBanned.set(senderID, { reason: data.reason, dateAdded: data.dateAdded });
        global.client.autoban[senderID] = {
          timeStart: Date.now(),
          number: 0
        };
        api.sendMessage(
          senderID + " \nname : " + dataUser.name + `⚠️ 𝗦𝗣𝗔𝗠𝗠𝗜𝗡𝗚 𝗗𝗘𝗧𝗘𝗖𝗧\n▬▬▬▬▬▬▬▬▬▬▬▬\nreason : 𝘀𝗽𝗮𝗺  𝗯𝗼𝘁 ${num} 𝘁𝗶𝗺𝗲𝘀\nautomatically unban after ${timee} seconds\n\nreport sent to admins\n\n▬▬▬▬▬▬▬▬▬▬▬▬`,
          threadID,() => {
            var idad = global.config.ADMINBOT;
            for (let ad of idad) {
              api.sendMessage(
                `⚠️ 𝗦𝗣𝗔𝗠𝗠𝗜𝗡𝗚 𝗗𝗘𝗧𝗘𝗖𝗧\n▬▬▬▬▬▬▬▬▬▬▬▬\nspam ban notification\n\nspam offenders ${num}/${timee}s\nname: ${dataUser.name} \nuser id: ${senderID}\ngroup ID: ${threadID} \ngroup name: ${namethread} \ntime: ${timeDate}\n\n▬▬▬▬▬▬▬▬▬▬▬▬`,
                ad
              );
            }
          }
        );
      }
    }
  }
};
