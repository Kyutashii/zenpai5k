const moment = require('moment-timezone');

module.exports.config = {
  name: "autotime",
  version: "2.0.0",
  role: 0,
  author: "Kylepogi",//Lol change author pa amp gawa ka own cmd mo gago. 
  description: "Automatically sends messages based on set times.",
  category: "AutoTime",
  countDown: 3
};

module.exports.onLoad = async ({ api }) => {
  const arrayData = {
     "12:00:00 PM": {
        message: "🔔 𝗔𝘂𝘁𝗼 𝗧𝗶𝗺𝗲:\n▬▬▬▬▬▬▬▬▬▬▬▬\n\n⏰ time now - 12:00 𝐏𝐌\n\n📌 good afternoon everyone don't forget to eat y'all lunch break🍛\n\n▬▬▬▬▬▬▬▬▬▬▬▬"
      },
      "01:00:00 AM": {
        message: "🔔 𝗔𝘂𝘁𝗼 𝗧𝗶𝗺𝗲:\n▬▬▬▬▬▬▬▬▬▬▬▬\n\n⏰ time now - 01:00 𝐀𝐌\n\n📌 good morning everyone!!, have a nice morning🍞☕🌅\n\n▬▬▬▬▬▬▬▬▬▬▬▬"
      },
      "02:00:00 AM": {
        message: "🔔 𝗔𝘂𝘁𝗼 𝗧𝗶𝗺𝗲:\n▬▬▬▬▬▬▬▬▬▬▬▬\n\n⏰ time now - 02:00 𝐀𝐌\n\n📌 don't forget to add/follow my owner☺.\n\n📩: https://www.facebook.com/kyledev03\n\n▬▬▬▬▬▬▬▬▬▬▬▬"

      },
      "03:00:00 AM": {
        message: "🔔 𝗔𝘂𝘁𝗼 𝗧𝗶𝗺𝗲:\n▬▬▬▬▬▬▬▬▬▬▬▬\n\n⏰ time now - 03:00 𝐀𝐌\n\n📌 aga nyo nagising ahh\n\n▬▬▬▬▬▬▬▬▬▬▬▬"
        
      },
      "04:00:00 AM": {
        message: "🔔 𝗔𝘂𝘁𝗼 𝗧𝗶𝗺𝗲:\n▬▬▬▬▬▬▬▬▬▬▬▬\n\n⏰ time now - 04:00 𝐀𝐌\n\n📌  eyyy🤙don't panic it's organic eyyyyy🤙\n\n▬▬▬▬▬▬▬▬▬▬▬▬"

      },
      "05:00:00 AM": {
        message: "🔔 𝗔𝘂𝘁𝗼 𝗧𝗶𝗺𝗲:\n▬▬▬▬▬▬▬▬▬▬▬▬\n\n⏰ time now - 05:00 𝐀𝐌\n\n📌 aga nyo nagising ahh sanaol strong💀🙏\n\n▬▬▬▬▬▬▬▬▬▬▬▬"
        
      },
      "06:00:00 AM": {
        message: "🔔 𝗔𝘂𝘁𝗼 𝗧𝗶𝗺𝗲:\n▬▬▬▬▬▬▬▬▬▬▬▬\n\n⏰ time now - 06:00 𝐀𝐌\n\n📌 kape muna kayo☕\n\n▬▬▬▬▬▬▬▬▬▬▬▬"
        
      },
      "07:00:00 AM": {
        message: "🔔 𝗔𝘂𝘁𝗼 𝗧𝗶𝗺𝗲:\n▬▬▬▬▬▬▬▬▬▬▬▬\n\n⏰ time now - 07:00 𝐀𝐌\n\n📌 don't forget to eat y'all breakfast!! 🍞☕🍛\n\n▬▬▬▬▬▬▬▬▬▬▬▬"
        
      },
      "08:00:00 AM": {
        message: "🔔 𝗔𝘂𝘁𝗼 𝗧𝗶𝗺𝗲:\n▬▬▬▬▬▬▬▬▬▬▬▬\n\n⏰ time now - 08:00 𝐀𝐌\n\n📌 life update: pogi parin owner ko\n\n▬▬▬▬▬▬▬▬▬▬▬▬"
        
      },
      "09:00:00 AM": {
        message: "🔔 𝗔𝘂𝘁𝗼 𝗧𝗶𝗺𝗲:\n▬▬▬▬▬▬▬▬▬▬▬▬\n\n⏰ time now - 09:00 𝐀𝐌\n\n📌 baka hinde pa kayo kumain kain na kayo💀🙏\n\n▬▬▬▬▬▬▬▬▬▬▬▬"
        
      },
      "10:00:00 AM": {
        message: "🔔 𝗔𝘂𝘁𝗼 𝗧𝗶𝗺𝗲:\n▬▬▬▬▬▬▬▬▬▬▬▬\n\n⏰ time now - 10:00 𝐀𝐌\n\n📌 wag mo kalimutan e chat owner ko💀🙏\n\n▬▬▬▬▬▬▬▬▬▬▬▬"
        
      },
      "11:00:00 AM": {
        message: "🔔 𝗔𝘂𝘁𝗼 𝗧𝗶𝗺𝗲:\n▬▬▬▬▬▬▬▬▬▬▬▬\n\n⏰ time now - 11:00 𝐀𝐌\n\n📌  hinde mababawasan kapogian ng owner ko, btw have a nice morning everyone!!\n\n▬▬▬▬▬▬▬▬▬▬▬▬"
        
      },
      "12:00:00 PM": {
        message: "🔔 𝗔𝘂𝘁𝗼 𝗧𝗶𝗺𝗲:\n▬▬▬▬▬▬▬▬▬▬▬▬\n\n⏰ time now - 12:00 𝐏𝐌\n\n📌  kain na kayo mga lods💀\n\n▬▬▬▬▬▬▬▬▬▬▬▬"
        
      },
      "01:00:00 PM": {
        message: "🔔 𝗔𝘂𝘁𝗼 𝗧𝗶𝗺𝗲:\n▬▬▬▬▬▬▬▬▬▬▬▬\n\n⏰ time now - 01:00 𝐏𝐌\n\n📌 dont forget to eat y'all launchbreak😸\n\n▬▬▬▬▬▬▬▬▬▬▬▬"
        
      },
      "02:00:00 PM": {
        message: "🔔 𝗔𝘂𝘁𝗼 𝗧𝗶𝗺𝗲:\n▬▬▬▬▬▬▬▬▬▬▬▬\n\n⏰ time now - 02:00 𝐏𝐌\n\n📌 good afternoon!!,my owner is so handsome asf😎\n\n▬▬▬▬▬▬▬▬▬▬▬▬ "
        
      },
      "03:00:00 PM": {
        message: "🔔 𝗔𝘂𝘁𝗼 𝗧𝗶𝗺𝗲:\n▬▬▬▬▬▬▬▬▬▬▬▬\n\n⏰ time now - 03:00 𝐏𝐌\n\n 📌 miss ko na sya:(\n\n▬▬▬▬▬▬▬▬▬▬▬▬"
        
      },
      "04:00:00 PM": {
        message: "🔔 𝗔𝘂𝘁𝗼 𝗧𝗶𝗺𝗲:\n▬▬▬▬▬▬▬▬▬▬▬▬\n\n⏰ time now - 04:00 𝐏𝐌\n\n📌 magandang hapon mga lods😸\n\n▬▬▬▬▬▬▬▬▬▬▬▬"
        
      },
      "05:00:00 PM": {
        message: "🔔 𝗔𝘂𝘁𝗼 𝗧𝗶𝗺𝗲:\n▬▬▬▬▬▬▬▬▬▬▬▬\n\n⏰ time now - 05:00 𝐏𝐌\n\n📌 pogi ng owner ko na si Kyle 😎\n\n▬▬▬▬▬▬▬▬▬▬▬▬"
        
      },
      "06:00:00 PM": {
        message: "🔔 𝗔𝘂𝘁𝗼 𝗧𝗶𝗺𝗲:\n▬▬▬▬▬▬▬▬▬▬▬▬\n\n⏰ time now - 06:00 𝐏𝐌\n\n📌 don't forget to eat y'all dinner💀🙏\n\n▬▬▬▬▬▬▬▬▬▬▬▬"
        
      },
      "07:00:00 PM": {
        message: "🔔 𝗔𝘂𝘁𝗼 𝗧𝗶𝗺𝗲:\n▬▬▬▬▬▬▬▬▬▬▬▬\n\n⏰ time now - 07:00 𝐏𝐌\n\n📌 ano silbe ng pag online mo kung hinde mo din naman e chachat owner ko😎\n\n▬▬▬▬▬▬▬▬▬▬▬▬"
        
      },
      "08:00:00 PM": {
        message: "🔔 𝗔𝘂𝘁𝗼 𝗧𝗶𝗺𝗲:\n▬▬▬▬▬▬▬▬▬▬▬▬\n\n⏰ time now - 08:00 𝐏𝐌\n\n📌 kumain naba kayo?\n\n▬▬▬▬▬▬▬▬▬▬▬▬"
        
      },
      "09:00:00 PM": {
        message: "🔔 𝗔𝘂𝘁𝗼 𝗧𝗶𝗺𝗲:\n▬▬▬▬▬▬▬▬▬▬▬▬\n\n⏰ time now - 09:00 𝐏𝐌\n\n📌 matulog na kayo mga hangal😸\n\n▬▬▬▬▬▬▬▬▬▬▬▬"
        
      },
      "10:00:00 PM": {
        message: "🔔 𝗔𝘂𝘁𝗼 𝗧𝗶𝗺𝗲:\n▬▬▬▬▬▬▬▬▬▬▬▬\n\n⏰ time now - 10:00 𝐏𝐌\n\n📌 gabi na nag puyat parin kayo💀🙏\n\n▬▬▬▬▬▬▬▬▬▬▬▬"
        
      },
      "11:00:00 PM": {
        message: "🔔 𝗔𝘂𝘁𝗼 𝗧𝗶𝗺𝗲:\n▬▬▬▬▬▬▬▬▬▬▬▬\n\n⏰ time now - 11:00 𝐏𝐌\n\n📌 hinde mababawasan kapogian ng owner ko.\n\n▬▬▬▬▬▬▬▬▬▬▬▬"
      }, 
      "12:00:00 AM": {
        message: "🔔 𝗔𝘂𝘁𝗼 𝗧𝗶𝗺𝗲:\n▬▬▬▬▬▬▬▬▬▬▬▬\n\n⏰ time now - 12:00 𝐀𝐌\n\n📌 good morning everyone, bat nag pupuyat pa kayo? 💀\n\n▬▬▬▬▬▬▬▬▬▬▬▬"
      }

    // Add more messages for other times as needed
  };

  const checkTimeAndSendMessage = () => {
    const now = moment().tz('Asia/Manila');
    const currentTime = now.format('hh:mm:ss A');

    const messageData = arrayData[currentTime];

    if (messageData) {
      const tid = global.db.allThreadData.map(i => i.threadID);
      tid.forEach(async (threadID, index) => {
        api.sendMessage({ body: messageData.message }, threadID);
      });
    }

    const nextMinute = moment().add(1, 'minute').startOf('minute');
    const delay = nextMinute.diff(moment());
    setTimeout(checkTimeAndSendMessage, delay);
  };

  checkTimeAndSendMessage();
};

module.exports.onStart = () => {};
