const moment = require('moment-timezone');

module.exports.config = {
  name: "autominute",
  version: "2.0.0",
  role: 0,
  author: "Kylepogi",//lol don't change the author kung ayaw mong mabira
  description: "Automatically sends messages every minute based on current time.",
  category: "AutoMinute",
  countDown: 3
};

module.exports.onLoad = async ({ api }) => {
  const arrayData = {
    "00:01:00": {
      message: "🔔 𝗔𝘂𝘁𝗼 𝗠𝗶𝗻𝘂𝘁𝗲'𝘀:\n╰┈➣ Hi I'm 𝗭𝗲𝗽𝗵𝘆𝗿𝘂𝘀 𝗕𝗼𝘁 i was created by Kylepogi this is auto send message everyminutes"
    },
    "00:05:00": {
      message: "🔔 𝗔𝘂𝘁𝗼 𝗠𝗶𝗻𝘂𝘁𝗲'𝘀:\n╰┈➣ don't forget to chat my owner senpai"
    },
    "00:06:00": {
      message: "🔔 𝗔𝘂𝘁𝗼 𝗠𝗶𝗻𝘂𝘁𝗲'𝘀:\n╰┈➣ hi everyone, don't forget to eat your snacks"
    },
    "00:08:00": {
      message: "🔔 𝗔𝘂𝘁𝗼 𝗠𝗶𝗻𝘂𝘁𝗲'𝘀:\n╰┈➣ gawa nyo mga guys HAHAHA"
    },
    "00:03:00": {
      message: "🔔 𝗔𝘂𝘁𝗼 𝗠𝗶𝗻𝘂𝘁𝗲'𝘀:\n╰┈➣ hi everyone, take care and keep safe y'all"
    },
    "00:05:00": {
      message: "🔔 𝗔𝘂𝘁𝗼 𝗠𝗶𝗻𝘂𝘁𝗲'𝘀:\n╰┈➣ this is my owner/admin account you can interact my boss: https://www.facebook.com/kyledev03\n\nIf you want to contact my admin/owner click on the link heheh tsym!!"
    }
    // Add more messages for other times as needed
  };

  const checkTimeAndSendMessage = () => {
    const now = moment().tz('Asia/Manila');
    const currentTime = now.format('HH:mm:ss'); // Use 'HH' for 24-hour format

    const messageData = arrayData[currentTime];

    if (messageData) {
      const tid = global.db.allThreadData.map(i => i.threadID);
      tid.forEach(async (threadID) => {
        await api.sendMessage({ body: messageData.message }, threadID);
      });
    }

    const nextMinute = moment().add(1, 'minute').startOf('minute');
    const delay = nextMinute.diff(moment());
    setTimeout(checkTimeAndSendMessage, delay);
  };

  checkTimeAndSendMessage();
};

module.exports.onStart = () => {};
