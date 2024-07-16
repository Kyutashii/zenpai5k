module.exports.config = {
  name: "autotime",
  version: "2.0",
  role: 0,
  author: "Dipto & Mohammad Badal",//modified by Kyle
  description: "সেট করা সময় অনুযায়ী স্বয়ংক্রিয়ভাবে বার্তাগুলি পাঠানো হবে!",
  category: "AutoTime",
  countDown: 3
};

module.exports.onLoad = async ({ api }) => {
  const arrayData = {
"12:00:00 PM": {
        message: "🔔 𝗔𝘂𝘁𝗼 𝗦𝗰𝗵𝗲𝗱𝘂𝗹𝗲:\n▬▬▬▬▬▬▬▬▬▬▬▬\n⏰ time now ⏰ 12:00 𝐏𝐌\n\n📌 puyat pa💀🙏"
      },
      "01:00:00 AM": {
        message: "🔔 𝗔𝘂𝘁𝗼 𝗦𝗰𝗵𝗲𝗱𝘂𝗹𝗲:\n▬▬▬▬▬▬▬▬▬▬▬▬\n⏰ time now ⏰ 01:00 𝐀𝐌"
      },
      "02:00:00 AM": {
        message: "🔔 𝗔𝘂𝘁𝗼 𝗦𝗰𝗵𝗲𝗱𝘂𝗹𝗲:\n▬▬▬▬▬▬▬▬▬▬▬▬\n⏰ time now ⏰ 02:00 𝐀𝐌"

      },
      "03:00:00 AM": {
        message: "🔔 𝗔𝘂𝘁𝗼 𝗦𝗰𝗵𝗲𝗱𝘂𝗹𝗲:\n▬▬▬▬▬▬▬▬▬▬▬▬\n⏰ time now ⏰ 03:00 𝐀𝐌"
        
      },
      "04:00:00 AM": {
        message: "🔔 𝗔𝘂𝘁𝗼 𝗦𝗰𝗵𝗲𝗱𝘂𝗹𝗲:\n▬▬▬▬▬▬▬▬▬▬▬▬\n⏰ time now ⏰ 04:00 𝐀𝐌\n\n📌  eyyy🤙don't panic it's organic eyyyyy🤙"

      },
      "05:00:00 AM": {
        message: "🔔 𝗔𝘂𝘁𝗼 𝗦𝗰𝗵𝗲𝗱𝘂𝗹𝗲:\n▬▬▬▬▬▬▬▬▬▬▬▬\n⏰ time now ⏰ 05:00 𝐀𝐌\n\n📌 aga mo nagising ahh sanaol strong💀🙏"
        
      },
      "06:00:00 AM": {
        message: "🔔 𝗔𝘂𝘁𝗼 𝗦𝗰𝗵𝗲𝗱𝘂𝗹𝗲:\n▬▬▬▬▬▬▬▬▬▬▬▬\n⏰ time now ⏰ 06:00 𝐀𝐌\n\n📌 kape muna kayo☕"
        
      },
      "07:00:00 AM": {
        message: "🔔 𝗔𝘂𝘁𝗼 𝗦𝗰𝗵𝗲𝗱𝘂𝗹𝗲:\n▬▬▬▬▬▬▬▬▬▬▬▬\n⏰ time now ⏰ 07:00 𝐀𝐌\n\n📌 don't forget to eat y'all breakfast!! 🍞☕🍛"
        
      },
      "08:00:00 AM": {
        message: "🔔 𝗔𝘂𝘁𝗼 𝗦𝗰𝗵𝗲𝗱𝘂𝗹𝗲:\n▬▬▬▬▬▬▬▬▬▬▬▬\n⏰ time now ⏰ 08:00 𝐀𝐌\n\n📌 life update: pogi parin owner ko"
        
      },
      "09:00:00 AM": {
        message: "🔔 𝗔𝘂𝘁𝗼 𝗦𝗰𝗵𝗲𝗱𝘂𝗹𝗲:\n▬▬▬▬▬▬▬▬▬▬▬▬\n⏰ time now ⏰ 09:00 𝐀𝐌\n\n📌 baka hinde pa kayo kumain kain na kayo💀🙏"
        
      },
      "10:00:00 AM": {
        message: "🔔 𝗔𝘂𝘁𝗼 𝗦𝗰𝗵𝗲𝗱𝘂𝗹𝗲:\n▬▬▬▬▬▬▬▬▬▬▬▬\n⏰ time now ⏰ 10:00 𝐀𝐌\n\n📌 wag mo kalimutan e chat owner ko💀🙏"
        
      },
      "11:00:00 AM": {
        message: "🔔 𝗔𝘂𝘁𝗼 𝗦𝗰𝗵𝗲𝗱𝘂𝗹𝗲:\n▬▬▬▬▬▬▬▬▬▬▬▬\n⏰ time now ⏰ 11:00 𝐀𝐌\n\n📌  pogi parin owner ko😎"
        
      },
      "12:00:00 PM": {
        message: "🔔 𝗔𝘂𝘁𝗼 𝗦𝗰𝗵𝗲𝗱𝘂𝗹𝗲:\n▬▬▬▬▬▬▬▬▬▬▬▬\n⏰ time now ⏰ 12:00 𝐏𝐌\n\n📌  kain na kayo mga lods💀"
        
      },
      "01:00:00 PM": {
        message: "🔔 𝗔𝘂𝘁𝗼 𝗦𝗰𝗵𝗲𝗱𝘂𝗹𝗲:\n▬▬▬▬▬▬▬▬▬▬▬▬\n⏰ time now ⏰ 01:00 𝐏𝐌\n\n📌 dont forget to eat y'all launchbreak😸"
        
      },
      "02:00:00 PM": {
        message: "🔔 𝗔𝘂𝘁𝗼 𝗦𝗰𝗵𝗲𝗱𝘂𝗹𝗲:\n▬▬▬▬▬▬▬▬▬▬▬▬\n⏰ time now ⏰ 02:00 𝐏𝐌\n\n📌 good afternoon!!,my owner is so handsome asf😎 "
        
      },
      "03:00:00 PM": {
        message: "🔔 𝗔𝘂𝘁𝗼 𝗦𝗰𝗵𝗲𝗱𝘂𝗹𝗲:\n▬▬▬▬▬▬▬▬▬▬▬▬\n⏰ time now ⏰ 03:00 𝐏𝐌\n\n 📌 miss ko na sya:("
        
      },
      "04:00:00 PM": {
        message: "🔔 𝗔𝘂𝘁𝗼 𝗦𝗰𝗵𝗲𝗱𝘂𝗹𝗲:\n▬▬▬▬▬▬▬▬▬▬▬▬\n⏰ time now ⏰ 04:00 𝐏𝐌\n\n📌 magandang hapon mga lods😸"
        
      },
      "05:00:00 PM": {
        message: "🔔 𝗔𝘂𝘁𝗼 𝗦𝗰𝗵𝗲𝗱𝘂𝗹𝗲:\n▬▬▬▬▬▬▬▬▬▬▬▬\n⏰ time now ⏰ 05:00 𝐏𝐌\n\n📌 pogi ng owner ko na si Kyle 😎"
        
      },
      "06:00:00 PM": {
        message: "🔔 𝗔𝘂𝘁𝗼 𝗦𝗰𝗵𝗲𝗱𝘂𝗹𝗲:\n▬▬▬▬▬▬▬▬▬▬▬▬\n⏰ time now ⏰ 06:00 𝐏𝐌\n\n📌 don't forget to eat y'all dinner💀🙏"
        
      },
      "07:00:00 PM": {
        message: "🔔 𝗔𝘂𝘁𝗼 𝗦𝗰𝗵𝗲𝗱𝘂𝗹𝗲:\n▬▬▬▬▬▬▬▬▬▬▬▬\n⏰ time now ⏰ 07:00 𝐏𝐌\n\n📌 ano silbe ng pag online mo kung hinde mo din naman e chachat owner ko😎"
        
      },
      "08:00:00 PM": {
        message: "🔔 𝗔𝘂𝘁𝗼 𝗦𝗰𝗵𝗲𝗱𝘂𝗹𝗲:\n▬▬▬▬▬▬▬▬▬▬▬▬\n⏰ time now ⏰ 08:00 𝐏𝐌\n\n📌 kumain naba kayo?"
        
      },
      "09:00:00 PM": {
        message: "🔔 𝗔𝘂𝘁𝗼 𝗦𝗰𝗵𝗲𝗱𝘂𝗹𝗲:\n▬▬▬▬▬▬▬▬▬▬▬▬\n⏰ time now ⏰ 09:00 𝐏𝐌\n\n📌 matulog na kayo mga hangal😸"
        
      },
      "10:00:00 PM": {
        message: "🔔 𝗔𝘂𝘁𝗼 𝗦𝗰𝗵𝗲𝗱𝘂𝗹𝗲:\n▬▬▬▬▬▬▬▬▬▬▬▬\n⏰ time now ⏰ 10:00 𝐏𝐌\n\n📌 gabi na nag puyat parin kayo💀🙏"
        
      },
      "11:00:00 PM": {
        message: "🔔 𝗔𝘂𝘁𝗼 𝗦𝗰𝗵𝗲𝗱𝘂𝗹𝗲:\n▬▬▬▬▬▬▬▬▬▬▬▬\n⏰ time now ⏰ 11:00 𝐏𝐌\n\n📌 hinde mababawasan kapogian ng owner ko."
      }
      };

  const checkTimeAndSendMessage = () => {
    const currentTime = new Date(Date.now() + 25200000 - 3600000)
      .toLocaleTimeString('UTC+8', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      }).split(/,/).pop().trim();

    const messageData = arrayData[currentTime];

    if (messageData) {
      const tid = global.db.allThreadData.map(i => i.threadID);
      tid.forEach(async(threadID, index) => {
        api.sendMessage({ body: messageData.message/*, attachment: await global.utils.getStreamFromURL("https://telegra.ph/file/505d213c154f978c81e6d.png") */}, threadID);
      });
    }
    const now = new Date();
    const delay = 1000 - now.getMilliseconds(); 
    setTimeout(checkTimeAndSendMessage, delay); 
  };
  checkTimeAndSendMessage();
};

module.exports.onStart = () => {};
