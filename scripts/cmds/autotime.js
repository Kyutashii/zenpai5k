const moment = require('moment-timezone');

module.exports.config = {
  name: "autotime",
  version: "3.0.0",
  role: 0,
  author: "Kylepogi",//lol don't change the author if you change it i will hack your Facebook account👿
  description: "Automatically sends messages based on set times.",
  category: "AutoTime",
  countDown: 3
};

module.exports.onLoad = async ({ api, getLang }) => {
  const arrayData = {
     "12:00:00 PM": {
        message: "🔔 𝗔𝘂𝘁𝗼 𝗧𝗶𝗺𝗲:\n▬▬▬▬▬▬▬▬▬▬▬▬\n\n⏰ time now - 12:00 𝐏𝐌\n\n📌 good afternoon everyone don't forget to eat y'all lunch break🍛\n\n▬▬▬▬▬▬▬▬▬▬▬▬", 
        attachment: await global.utils.getStreamFromURL("https://i.imgur.com/hg9AuMr.gif")
      },
      "01:00:00 AM": {
        message: "🔔 𝗔𝘂𝘁𝗼 𝗧𝗶𝗺𝗲:\n▬▬▬▬▬▬▬▬▬▬▬▬\n\n⏰ time now - 01:00 𝐀𝐌\n\n📌 good morning everyone!!, have a nice morning🍞☕🌅\n\n▬▬▬▬▬▬▬▬▬▬▬▬", 
        attachment: await global.utils.getStreamFromURL("https://i.imgur.com/kNIfj76.gif")
      },
      "02:00:00 AM": {
        message: "🔔 𝗔𝘂𝘁𝗼 𝗧𝗶𝗺𝗲:\n▬▬▬▬▬▬▬▬▬▬▬▬\n\n⏰ time now - 02:00 𝐀𝐌\n\n📌 don't forget to drunk your coffee and exercise your body ☕💪\n\n▬▬▬▬▬▬▬▬▬▬▬▬", 
       attachment: await global.utils.getStreamFromURL("https://i.imgur.com/hg9AuMr.gif")
      },
      "03:00:00 AM": {
        message: "🔔 𝗔𝘂𝘁𝗼 𝗧𝗶𝗺𝗲:\n▬▬▬▬▬▬▬▬▬▬▬▬\n\n⏰ time now - 03:00 𝐀𝐌\n\n📌 aga nyo nagising ahh\n\n▬▬▬▬▬▬▬▬▬▬▬▬", 
        attachment: await global.utils.getStreamFromURL("https://i.imgur.com/kNIfj76.gif")
      },
      "04:00:00 AM": {
        message: "🔔 𝗔𝘂𝘁𝗼 𝗧𝗶𝗺𝗲:\n▬▬▬▬▬▬▬▬▬▬▬▬\n\n⏰ time now - 04:00 𝐀𝐌\n\n📌  eyyy🤙don't panic it's organic eyyyyy🤙\n\n▬▬▬▬▬▬▬▬▬▬▬▬", 
     attachment: await global.utils.getStreamFromURL("https://i.imgur.com/wtdSM2j.jpeg")
      },
      "05:00:00 AM": {
        message: "🔔 𝗔𝘂𝘁𝗼 𝗧𝗶𝗺𝗲:\n▬▬▬▬▬▬▬▬▬▬▬▬\n\n⏰ time now - 05:00 𝐀𝐌\n\n📌 aga nyo nagising ahh sanaol strong💀🙏\n\n▬▬▬▬▬▬▬▬▬▬▬▬", 
        attachment: await global.utils.getStreamFromURL("https://i.imgur.com/HAxmlRq.gif")
      },
      "06:00:00 AM": {
        message: "🔔 𝗔𝘂𝘁𝗼 𝗧𝗶𝗺𝗲:\n▬▬▬▬▬▬▬▬▬▬▬▬\n\n⏰ time now - 06:00 𝐀𝐌\n\n📌 kape muna kayo☕\n\n▬▬▬▬▬▬▬▬▬▬▬▬", 
        attachment: await global.utils.getStreamFromURL("https://i.imgur.com/hg9AuMr.gif")
      },
      "07:00:00 AM": {
        message: "🔔 𝗔𝘂𝘁𝗼 𝗧𝗶𝗺𝗲:\n▬▬▬▬▬▬▬▬▬▬▬▬\n\n⏰ time now - 07:00 𝐀𝐌\n\n📌 don't forget to eat y'all breakfast!! 🍞☕🍛\n\n▬▬▬▬▬▬▬▬▬▬▬▬", 
        attachment: await global.utils.getStreamFromURL("https://i.imgur.com/hg9AuMr.gif")
      },
      "08:00:00 AM": {
        message: "🔔 𝗔𝘂𝘁𝗼 𝗧𝗶𝗺𝗲:\n▬▬▬▬▬▬▬▬▬▬▬▬\n\n⏰ time now - 08:00 𝐀𝐌\n\n📌 Don't forget, y'all, to take your homework, clean your house, etc.\n\n▬▬▬▬▬▬▬▬▬▬▬▬", 
        attachment: await global.utils.getStreamFromURL("https://i.imgur.com/wtdSM2j.jpeg")
      },
      "09:00:00 AM": {
        message: "🔔 𝗔𝘂𝘁𝗼 𝗧𝗶𝗺𝗲:\n▬▬▬▬▬▬▬▬▬▬▬▬\n\n⏰ time now - 09:00 𝐀𝐌\n\n📌 It's time to eat, guys! Don't forget to eat your breakfast or snacks, y'all. 😉\n\n▬▬▬▬▬▬▬▬▬▬▬▬", 
        attachment: await global.utils.getStreamFromURL("https://i.imgur.com/hg9AuMr.gif")
      },
      "10:00:00 AM": {
        message: "🔔 𝗔𝘂𝘁𝗼 𝗧𝗶𝗺𝗲:\n▬▬▬▬▬▬▬▬▬▬▬▬\n\n⏰ time now - 10:00 𝐀𝐌\n\n📌 how are you guys? \n\n▬▬▬▬▬▬▬▬▬▬▬▬", 
        attachment: await global.utils.getStreamFromURL("https://i.imgur.com/N5UVcId.jpeg")
      },
      "11:00:00 AM": {
        message: "🔔 𝗔𝘂𝘁𝗼 𝗧𝗶𝗺𝗲:\n▬▬▬▬▬▬▬▬▬▬▬▬\n\n⏰ time now - 11:00 𝐀𝐌\n\n📌  At 11 AM, let go of yesterday and focus on making today the best it can be.\n\n▬▬▬▬▬▬▬▬▬▬▬▬", 
        attachment: await global.utils.getStreamFromURL("https://i.imgur.com/LBSQkVV.mp4")
      },
      "12:00:00 PM": {
        message: "🔔 𝗔𝘂𝘁𝗼 𝗧𝗶𝗺𝗲:\n▬▬▬▬▬▬▬▬▬▬▬▬\n\n⏰ time now - 12:00 𝐏𝐌\n\n📌  As the clock strikes noon, take a deep breath and remember that every new hour brings with it a chance for a fresh start, don't forget to eat y'all lunch break🍖🍛\n\n▬▬▬▬▬▬▬▬▬▬▬▬", 
        attachment: await global.utils.getStreamFromURL("https://i.imgur.com/hg9AuMr.gif")
      },
      "01:00:00 PM": {
        message: "🔔 𝗔𝘂𝘁𝗼 𝗧𝗶𝗺𝗲:\n▬▬▬▬▬▬▬▬▬▬▬▬\n\n⏰ time now - 01:00 𝐏𝐌\n\n📌 At 1pm, remember that every moment is a chance to start anew.\n\n▬▬▬▬▬▬▬▬▬▬▬▬", 
        attachment: await global.utils.getStreamFromURL("https://i.imgur.com/hg9AuMr.gif")
      },
      "02:00:00 PM": {
        message: "🔔 𝗔𝘂𝘁𝗼 𝗧𝗶𝗺𝗲:\n▬▬▬▬▬▬▬▬▬▬▬▬\n\n⏰ time now - 02:00 𝐏𝐌\n\n📌 good afternoon!!,..I'm not clumsy, I'm just gravitationally challenged.\n\n▬▬▬▬▬▬▬▬▬▬▬▬ ", 
        attachment: await global.utils.getStreamFromURL("https://i.imgur.com/FFaFTdl.jpeg")
      },
      "03:00:00 PM": {
        message: "🔔 𝗔𝘂𝘁𝗼 𝗧𝗶𝗺𝗲:\n▬▬▬▬▬▬▬▬▬▬▬▬\n\n⏰ time now - 03:00 𝐏𝐌\n\n 📌 Three o'clock is always too late or too early for anything you want to do.\n\n▬▬▬▬▬▬▬▬▬▬▬▬", 
        attachment: await global.utils.getStreamFromURL("https://i.imgur.com/ukGM8t2.jpeg")
      },
      "04:00:00 PM": {
        message: "🔔 𝗔𝘂𝘁𝗼 𝗧𝗶𝗺𝗲:\n▬▬▬▬▬▬▬▬▬▬▬▬\n\n⏰ time now - 04:00 𝐏𝐌\n\n📌 magandang hapon mga lods🌇\n\n▬▬▬▬▬▬▬▬▬▬▬▬", 
        attachment: await global.utils.getStreamFromURL("https://i.imgur.com/f3KxFnV.gif")
      },
      "05:00:00 PM": {
        message: "🔔 𝗔𝘂𝘁𝗼 𝗧𝗶𝗺𝗲:\n▬▬▬▬▬▬▬▬▬▬▬▬\n\n⏰ time now - 05:00 𝐏𝐌\n\n📌 At 5pm, the world seems to slow down, inviting us to savor the beauty of the present moment.🌆\n\n▬▬▬▬▬▬▬▬▬▬▬▬", 
        attachment: await global.utils.getStreamFromURL("https://i.imgur.com/f3KxFnV.gif")
      },
      "06:00:00 PM": {
        message: "🔔 𝗔𝘂𝘁𝗼 𝗧𝗶𝗺𝗲:\n▬▬▬▬▬▬▬▬▬▬▬▬\n\n⏰ time now - 06:00 𝐏𝐌\n\n📌 don't forget to eat y'all dinner💀🙏\n\n▬▬▬▬▬▬▬▬▬▬▬▬", 
        attachment: await global.utils.getStreamFromURL("https://i.imgur.com/hg9AuMr.gif")
      },
      "07:00:00 PM": {
        message: "🔔 𝗔𝘂𝘁𝗼 𝗧𝗶𝗺𝗲:\n▬▬▬▬▬▬▬▬▬▬▬▬\n\n⏰ time now - 07:00 𝐏𝐌\n\n📌 There's something special about 7pm, a time when the hustle and bustle of the day give way to a sense of peace and tranquility.🌆\n\n▬▬▬▬▬▬▬▬▬▬▬▬", 
        attachment: await global.utils.getStreamFromURL("https://i.imgur.com/TyVxZLW.jpeg")
      },
      "08:00:00 PM": {
        message: "🔔 𝗔𝘂𝘁𝗼 𝗧𝗶𝗺𝗲:\n▬▬▬▬▬▬▬▬▬▬▬▬\n\n⏰ time now - 08:00 𝐏𝐌\n\n📌 kumain naba kayo?\n\n▬▬▬▬▬▬▬▬▬▬▬▬", 
        attachment: await global.utils.getStreamFromURL("https://i.imgur.com/d2MLrsn.png")
      },
      "09:00:00 PM": {
        message: "🔔 𝗔𝘂𝘁𝗼 𝗧𝗶𝗺𝗲:\n▬▬▬▬▬▬▬▬▬▬▬▬\n\n⏰ time now - 09:00 𝐏𝐌\n\n📌9pm is a bridge between the hustle and bustle of the day and the peace and quiet of the night, a time for contemplation and relaxation.🌃\n\n▬▬▬▬▬▬▬▬▬▬▬▬", 
        attachment: await global.utils.getStreamFromURL("https://i.imgur.com/TyVxZLW.jpeg")
      },
      "10:00:00 PM": {
        message: "🔔 𝗔𝘂𝘁𝗼 𝗧𝗶𝗺𝗲:\n▬▬▬▬▬▬▬▬▬▬▬▬\n\n⏰ time now - 10:00 𝐏𝐌\n\n📌 gabi na nag puyat parin kayo💀🙏\n\n▬▬▬▬▬▬▬▬▬▬▬▬", 
        attachment: await global.utils.getStreamFromURL("https://i.imgur.com/QOmMPwC.gif")
      },
      "11:00:00 PM": {
        message: "🔔 𝗔𝘂𝘁𝗼 𝗧𝗶𝗺𝗲:\n▬▬▬▬▬▬▬▬▬▬▬▬\n\n⏰ time now - 11:00 𝐏𝐌\n\n📌 In the silence of 11pm, we find solace, reflection, and the whispers of the night.\n\n▬▬▬▬▬▬▬▬▬▬▬▬", 
        attachment: await global.utils.getStreamFromURL("https://i.imgur.com/AA2Nze2.jpeg")
      }, 
      "12:00:00 AM": {
        message: "🔔 𝗔𝘂𝘁𝗼 𝗧𝗶𝗺𝗲:\n▬▬▬▬▬▬▬▬▬▬▬▬\n\n⏰ time now - 12:00 𝐀𝐌\n\n📌 good morning everyone, bat nag pupuyat pa kayo? 💀\n\n▬▬▬▬▬▬▬▬▬▬▬▬", 
        attachment: await global.utils.getStreamFromURL("https://i.imgur.com/hg9AuMr.gif")
      }
    // Add more messages for other times as needed
  };

  const checkTimeAndSendMessage = () => {
    const now = moment().tz('Asia/Manila');
    const currentTime = now.format('hh:mm:ss A');

    const messageData = arrayData[currentTime];

    if (messageData) {
      const threadIDs = global.db.allThreadData.map(i => i.threadID);
      threadIDs.forEach(threadID => {
        const messageOptions = {
          body: messageData.message,
          attachment: messageData.attachment // Include attachment if available
        };
        api.sendMessage(messageOptions, threadID);
      });
    }

    const nextMinute = moment().add(1, 'minute').startOf('minute');
    const delay = nextMinute.diff(moment());
    setTimeout(checkTimeAndSendMessage, delay);
  };

  checkTimeAndSendMessage();
};

module.exports.onStart = () => {
  console.log(`${module.exports.config.name} module started!`);
};
