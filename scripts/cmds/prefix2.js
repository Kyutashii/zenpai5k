const fs = require("fs-extra");
const { utils } = global;
const moment = require("moment-timezone");
const { GoatWrapper } = require('fca-liane-utils');
const axios = require("axios");

 module.exports = {

  config: {

    name: "prefix",

    aliases: ["p","Zephyrus"],

    version: "1.0",

    author: "PHILLIP",

    role: 0,

    description: {

      en: "Displays the current ping of the bot's system."

    },

    category: "system",

    guide: {

      en: "{pn}"

    }

  },

  langs: {

    en: {

      balance: "🤖| 𝗭𝗘𝗣𝗛𝗬𝗥𝗨𝗦 𝗕𝗢𝗧 |",

      loading: "🤖| 𝗭𝗘𝗣𝗛𝗬𝗥𝗨𝗦 𝗕𝗢𝗧 |\n━━━━━━━━━━━━━━━\n⏱️ my prefix & ping....\n━━━━━━━━━━━━━━━"

    }

  },

  onStart: async function ({ api, message, event, args, getLang }) {

    const pingStart = Date.now();

    const loadingMessage = getLang("loading");

    const loadingReply = await message.reply(loadingMessage);    

    const pingEnd = Date.now();

    const ping = Math.floor((pingEnd - pingStart) / 10);

    const userName = getLang("balance");

    const msg = `${userName}\n━━━━━━━━━━━━━━━\n𝗠𝘆 𝗽𝗿𝗲𝗳𝗶𝘅 𝗶𝘀: [ × ]\n\nThe current ping is ${ping}ms.\n━━━━━━━━━━━━━━━\n`;

    api.editMessage(msg, loadingReply.messageID);

  }

};

const wrapper = new GoatWrapper(module.exports);
wrapper.applyNoPrefix({ allowPrefix: false });
