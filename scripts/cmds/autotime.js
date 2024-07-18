const moment = require('moment-timezone');
const { MessageAttachment } = require('facebook-chat-api');

module.exports.config = {
  name: "autotime",
  version: "2.0.0",
  role: 0,
  author: "Kyle敦. ဗီူ",//lol wag mo e change author tangina ka gumawa ka ng own account mo gago potangina mo
  description: "Automatically sends messages based on set times.",
  category: "AutoTime",
  countDown: 3
};

module.exports.onLoad = async ({ api }) => {
  const timeData = { 
    "01:00:00 AM": {
      message: "🔔 𝗔𝘂𝘁𝗼 𝗦𝗰𝗵𝗲𝗱𝘂𝗹𝗲:\n▬▬▬▬▬▬▬▬▬▬▬▬\n⏰ time now - 01:00 𝐀𝐌\n\n📌 good morning everyone!!, have a nice morning🍞☕🌅",
      attachment: 'https://i.imgur.com/kNIfj76.gif'
    },
    "02:00:00 AM": {
      message: "🔔 𝗔𝘂𝘁𝗼 𝗦𝗰𝗵𝗲𝗱𝘂𝗹𝗲:\n▬▬▬▬▬▬▬▬▬▬▬▬\n⏰ time now - 02:00 𝐀𝐌\n\n📌 don't forget to add/follow my owner☺.\n\n📩: https://www.facebook.com/kyledev03",
      attachment: ''
    },
    "03:00:00 AM": {
      message: "🔔 𝗔𝘂𝘁𝗼 𝗦𝗰𝗵𝗲𝗱𝘂𝗹𝗲:\n▬▬▬▬▬▬▬▬▬▬▬▬\n⏰ time now - 03:00 𝐀𝐌\n\n📌 aga nyo nagising ahh",
      attachment: 'https://i.imgur.com/kNIfj76.gif'
    },
    "04:00:00 AM": {
      message: "🔔 𝗔𝘂𝘁𝗼 𝗧𝗶𝗺𝗲:\n▬▬▬▬▬▬▬▬▬▬▬▬\n⏰ time now - 04:00 𝐀𝐌\n\n📌  eyyy🤙don't panic it's organic eyyyyy🤙",
      attachment: ''
    },
    "05:00:00 AM": {
      message: "🔔 𝗔𝘂𝘁𝗼 𝗧𝗶𝗺𝗲:\n▬▬▬▬▬▬▬▬▬▬▬▬\n⏰ time now - 05:00 𝐀𝐌\n\n📌 aga nyo nagising ahh sanaol strong💀🙏",
      attachment: 'https://i.imgur.com/HAxmlRq.gif'
    },
    "06:00:00 AM": {
      message: "🔔 𝗔𝘂𝘁𝗼 𝗧𝗶𝗺𝗲:\n▬▬▬▬▬▬▬▬▬▬▬▬\n⏰ time now - 06:00 𝐀𝐌\n\n📌 kape muna kayo☕",
      attachment: 'https://i.imgur.com/hg9AuMr.gif'
    },
    "07:00:00 AM": {
      message: "🔔 𝗔𝘂𝘁𝗼 𝗧𝗶𝗺𝗲:\n▬▬▬▬▬▬▬▬▬▬▬▬\n⏰ time now - 07:00 𝐀𝐌\n\n📌 don't forget to eat y'all breakfast!! 🍞☕🍛",
      attachment: 'https://i.imgur.com/hg9AuMr.gif'
    },
    "08:00:00 AM": {
      message: "🔔 𝗔𝘂𝘁𝗼 𝗧𝗶𝗺𝗲:\n▬▬▬▬▬▬▬▬▬▬▬▬\n⏰ time now - 08:00 𝐀𝐌\n\n📌 life update: pogi parin owner ko",
      attachment: 'https://i.imgur.com/LBSQkVV.mp4'
    },
    "09:00:00 AM": {
      message: "🔔 𝗔𝘂𝘁𝗼 𝗧𝗶𝗺𝗲:\n▬▬▬▬▬▬▬▬▬▬▬▬\n⏰ time now - 09:00 𝐀𝐌\n\n📌 baka hinde pa kayo kumain kain na kayo💀🙏",
      attachment: 'https://i.imgur.com/hg9AuMr.gif'
    },
    "10:00:00 AM": {
      message: "🔔 𝗔𝘂𝘁𝗼 𝗧𝗶𝗺𝗲:\n▬▬▬▬▬▬▬▬▬▬▬▬\n⏰ time now - 10:00 𝐀𝐌\n\n📌 wag mo kalimutan e chat owner ko💀🙏",
      attachment: ''
    },
    "11:00:00 AM": {
      message: "🔔 𝗔𝘂𝘁𝗼 𝗧𝗶𝗺𝗲:\n▬▬▬▬▬▬▬▬▬▬▬▬\n⏰ time now - 11:00 𝐀𝐌\n\n📌  hinde mababawasan kapogian ng owner ko, btw have a nice morning everyone!!",
      attachment: 'https://i.imgur.com/LBSQkVV.mp4'
    }, 
    "12:00:00 PM": {
      message: "🔔 𝗔𝘂𝘁𝗼 𝗦𝗰𝗵𝗲𝗱𝘂𝗹𝗲:\n▬▬▬▬▬▬▬▬▬▬▬▬\n⏰ time now - 12:00 𝐏𝐌\n\n📌 good afternoon everyone don't forget to eat y'all lunch break🍛",
      attachment: 'https://i.imgur.com/hg9AuMr.gif'
    },
    "01:00:00 PM": {
      message: "🔔 𝗔𝘂𝘁𝗼 𝗧𝗶𝗺𝗲:\n▬▬▬▬▬▬▬▬▬▬▬▬\n⏰ time now - 01:00 𝐏𝐌\n\n📌 dont forget to eat y'all launchbreak😸",
      attachment: 'https://i.imgur.com/hg9AuMr.gif'
    },
    "02:00:00 PM": {
      message: "🔔 𝗔𝘂𝘁𝗼 𝗧𝗶𝗺𝗲:\n▬▬▬▬▬▬▬▬▬▬▬▬\n⏰ time now - 02:00 𝐏𝐌\n\n📌 good afternoon!!,my owner is so handsome asf😎 ",
      attachment: 'https://i.imgur.com/LBSQkVV.mp4'
    },
    "03:00:00 PM": {
      message: "🔔 𝗔𝘂𝘁𝗼 𝗧𝗶𝗺𝗲:\n▬▬▬▬▬▬▬▬▬▬▬▬\n⏰ time now - 03:00 𝐏𝐌\n\n 📌 miss ko na sya:(",
      attachment: 'https://i.imgur.com/bxaMPz8.jpeg'
    },
    "04:00:00 PM": {
      message: "🔔 𝗔𝘂𝘁𝗼 𝗧𝗶𝗺𝗲:\n▬▬▬▬▬▬▬▬▬▬▬▬\n⏰ time now - 04:00 𝐏𝐌\n\n📌 magandang hapon mga lods😸",
      attachment: 'https://i.imgur.com/f3KxFnV.gif'
    },
    "05:00:00 PM": {
      message: "🔔 𝗔𝘂𝘁𝗼 𝗧𝗶𝗺𝗲:\n▬▬▬▬▬▬▬▬▬▬▬▬\n⏰ time now - 05:00 𝐏𝐌\n\n📌 pogi ng owner ko na si Kyle 😎",
      attachment: 'https://i.imgur.com/LBSQkVV.mp4'
    },
    "06:00:00 PM": {
      message: "🔔 𝗔𝘂𝘁𝗼 𝗧𝗶𝗺𝗲:\n▬▬▬▬▬▬▬▬▬▬▬▬\n⏰ time now - 06:00 𝐏𝐌\n\n📌 don't forget to eat y'all dinner💀🙏",
      attachment: 'https://i.imgur.com/hg9AuMr.gif'
    },
    "07:00:00 PM": {
      message: "🔔 𝗔𝘂𝘁𝗼 𝗧𝗶𝗺𝗲:\n▬▬▬▬▬▬▬▬▬▬▬▬\n⏰ time now - 07:00 𝐏𝐌\n\n📌 ano silbe ng pag online mo kung hinde mo din naman e chachat owner ko😎",
      attachment: 'https://i.imgur.com/LBSQkVV.mp4'
    },
    "08:00:00 PM": {
      message: "🔔 𝗔𝘂𝘁𝗼 𝗧𝗶𝗺𝗲:\n▬▬▬▬▬▬▬▬▬▬▬▬\n⏰ time now - 08:00 𝐏𝐌\n\n📌 kumain naba kayo?",
      attachment: 'https://i.imgur.com/hg9AuMr.gif'
    },
    "09:00:00 PM": {
      message: "🔔 𝗔𝘂𝘁𝗼 𝗧𝗶𝗺𝗲:\n▬▬▬▬▬▬▬▬▬▬▬▬\n⏰ time now - 09:00 𝐏𝐌\n\n📌 it's time to sleep, good night.",
      attachment: 'https://i.imgur.com/QOmMPwC.gif'
    },
    "10:00:00 PM": {
      message: "🔔 𝗔𝘂𝘁𝗼 𝗧𝗶𝗺𝗲:\n▬▬▬▬▬▬▬▬▬▬▬▬\n⏰ time now - 10:00 𝐏𝐌\n\n📌 gabi na nag puyat parin kayo💀🙏",
      attachment: 'https://i.imgur.com/HAxmlRq.gif'
    },
    "12:00:00 AM": {
      message: "🔔 𝗔𝘂𝘁𝗼 𝗦𝗰𝗵𝗲𝗱𝘂𝗹𝗲:\n▬▬▬▬▬▬▬▬▬▬▬▬\n⏰ time now - 12:00 𝐀𝐌\n\n📌 good morning everyone have a nice day☺",
      attachment: 'https://i.imgur.com/kNIfj76.gif'
    }
  };

  const checkTimeAndSendMessage = () => {
    const now = moment().tz('Asia/Manila');
    const currentTime = now.format('hh:mm:ss A');

    const messageData = timeData[currentTime]; // Corrected variable name from arrayData to timeData

    if (messageData) {
      const tid = global.db.allThreadData.map(i => i.threadID);
      tid.forEach(async (threadID, index) => {
        const { message, attachment } = messageData; // Destructure messageData here
        if (attachment) {
          const attach = new MessageAttachment(attachment);
          await api.sendMessage({ body: message, attachment: attach }, threadID);
        } else {
          await api.sendMessage({ body: message }, threadID);
        }
      });
    }

    const nextMinute = moment().add(1, 'minute').startOf('minute');
    const delay = nextMinute.diff(moment());
    setTimeout(checkTimeAndSendMessage, delay);
  };

  checkTimeAndSendMessage();
};

module.exports.onStart = () => {};
