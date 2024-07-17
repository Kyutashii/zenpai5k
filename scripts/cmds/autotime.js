const moment = require('moment-timezone');

let switchEnabled = false;

const arrayData = {
  "12:00:00 PM": {
    message: "🔔 Automatic Schedule:\n⏰ Current time - 12:00 PM\n\n📌 Good afternoon everyone, don't forget to eat your lunch! 🍛"
  },
  "01:00:00 AM": {
    message: "🔔 Automatic Schedule:\n⏰ Current time - 01:00 AM\n\n📌 Good morning everyone! Have a nice morning! 🍞☕🌅"
  },
  // Add more messages for other times as needed
};

module.exports = {
  config: {
    name: "autotime",
    version: "2.0.0",
    role: 0,
    author: "kylepogi",
    description: "Automatically sends messages based on set times.",
    category: "AutoTime",
    countDown: 3,
    commands: [
      {
        command: "switch",
        description: {
          en: "Turn on/off automatic Schedule time on threads"
        },
        syntax: {
          vi: "switch [on|off]",
          en: "switch [on|off]"
        }
      }
    ]
  },

  onLoad: ({ api }) => {
    const checkTimeAndSendMessage = () => {
      const now = moment().tz('Asia/Manila');
      const currentTime = now.format('hh:mm:ss A');

      const messageData = arrayData[currentTime];

      if (messageData && switchEnabled) {
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
  },

  onStart: () => {},

  onMessage: ({ message, args }) => {
    if (message.body.startsWith('switch')) {
      const command = args[0].toLowerCase();
      if (command === 'on') {
        switchEnabled = true;
        message.reply("🚨 Auto Time ON 🟢\n\n⚠ AutoTime has been enabled.");
      } else if (command === 'off') {
        switchEnabled = false;
        message.reply("🚨 Auto Time OFF 🔴\n\n⚠ AutoTime has been disabled.");
      } else {
        message.reply("Usage: switch [on|off]");
      }
    }
  }
};
