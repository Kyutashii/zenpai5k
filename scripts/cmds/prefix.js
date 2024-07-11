const { GoatWrapper } = require('fca-liane-utils');
const axios = require('axios');
const moment = require('moment-timezone');

module.exports = {
  config: {
    name: 'prefix',
    aliases: ['p','zephyrus'],
    version: '2.5.4',
    author: 'Kylepogi',
    role: 0,
    category: '𝗕𝗢𝗧 𝗣𝗥𝗘𝗙𝗜𝗫🤖',
    shortDescription: {
      en: '.',
    },
    longDescription: {
      en: '',
    },
    guide: {
      en: '𝗯𝗼𝘁 𝗽𝗿𝗲𝗳𝗶𝘅',
    },
  },

  langs: {
    en: {
      final: '▄︻デ𝗞𝘆𝗹𝗲敦. ဗီူ══━一',
      loading:
        '˚₊·͟͟͟͟͟͟͞͞͞͞͞͞➳ ⌨ ✰ 𝗭𝗘𝗣𝗛 𝗕𝗢𝗧 ⁱˢ ᵗʸᵖⁱⁿᵍ··· | ೃ࿔₊•:\n❍━━━━━━━━━━━━━━━━━━━━❏\n💁🏻‍♂️ 𝙢𝙮 𝙥𝙧𝙚𝙛𝙞𝙭 𝙞𝙨??\n❍━━━━━━━━━━━━━━━━━━━━❏',
    },
  },

  onStart: async function () {},

  onChat: async function ({ event, message, getLang, api, args }) {
    try {
      const prompt = event.body.substring(Prefixes[0].length).trim();

      const loadingMessage = getLang('loading');
      const loadingReply = await message.reply(loadingMessage);
      const userName = getLang('final');
      const finalMsg = `${userName}\n❍━━━━━━━━━━━━━━━━━━━━❏\n💁🏻‍♂️ 𝗛𝗘𝗥𝗘 𝗜𝗦 𝗠𝗬 𝗣𝗥𝗘𝗙𝗜𝗫: 『 × 』\n❍━━━━━━━━━━━━━━━━━━━━❏\n`;

      console.log('Sent answer as a reply to user');
      await api.editMessage(finalMsg, loadingReply.messageID, event.threadID);
    } catch (err) {
      console.log(err);
      message.reply('Something went wrong. Please try again.');
    }
  },
};

const wrapper = new GoatWrapper(module.exports);
wrapper.applyNoPrefix({ allowPrefix: false });
