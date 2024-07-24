const { commands } = global.GoatBot;

const axios = require('axios');

const fs = require('fs-extra');

const path = require('path');

const moment = require('moment-timezone');

const fast = require('fast-speedtest-api');

const os = require('os');

const util = require('util');

const exec = util.promisify(require('child_process').exec);


module.exports = {

  config: {

    name: "botinfo",

    aliases: ["botinf", "infobot", "binfo"],

    author: "Asif & Badol",

    version: "2.0",

    cooldowns: 0,

    role: 0,

    longDescription: {

      en: "Get Bot and System Infomation"

    },

    category: "info",

    guide: {

      en: "{pn}"

    }

  },

  

  onStart: async function ({ message, api, event, threadsData }) {


    const speedTest = new fast({

        token: "YXNkZmFzZGxmbnNkYWZoYXNkZmhrYWxm",

        verbose: false,

        timeout: 10000,

        https: true,

        urlCount: 5,

        bufferSize: 8,

        unit: fast.UNITS.Mbps

      });

    const speed = await speedTest.getSpeed();

    const timeStart = Date.now();

    const threadData = await threadsData.get(event.threadID);

    const ping = Date.now() - timeStart;

    const n = moment().tz('Asia/Manila');

    const d = n.format('MMMM DD YYYY');

    const t = n.format('h:mm:ss A');

    const bp = global.utils.getPrefix(event.threadID);



    const uptime = process.uptime();

    const formattedUptime = formatMilliseconds(uptime * 1000);


    const totalMemory = os.totalmem();

    const freeMemory = os.freemem();

    const usedMemory = totalMemory - freeMemory;


    const diskUsage = await getDiskUsage();


    const systemInfo = {

      os: `${os.type()} ${os.release()}`,

      arch: os.arch(),

      cpu: `${os.cpus()[0].model} (${os.cpus().length} cores)`,

      loadAvg: os.loadavg()[0], // 1-minute load average

      botUpt: formattedUptime,

      sysUpt: formatUptime(os.uptime()),

      processMemory: prettyBytes(process.memoryUsage().rss)

    };

    

    const tt = threadData.threadName;

      try {

        const Info = {

          now: n,

          name: global.GoatBot.config.nickNameBot,

          prefix: global.GoatBot.config.prefix,

          prefixt: bp,

          date: d,

          time: t, 

          threadName: tt,

          author: global.GoatBot.config.authorName

        };

         const links = JSON.parse(fs.readFileSync('scripts/cmds/assets/u.json', 'utf8'));

         const url = links[Math.floor(Math.random() * links.length)];

        

        let threadInfo = await api.getThreadInfo(event.threadID);

        

         // const attachment = await global.utils.getStreamFromURL(`${threadInfo.imageSrc}`);

          const attachment = await global.utils.getStreamFromURL(url);

       // const { data } = await axios.get('YourApiUrl OR Image URL-If you need');

       // const attachment = await global.utils.getStreamFromURL(data.url);

        

        await message.reply({

          body: `

━━━━━━━━━━━━━━━━━━━━━━━

【• 𝗕𝗢𝗧 𝗜𝗡𝗙𝗢𝗥𝗠𝗔𝗧𝗜𝗢𝗡•】

━━━━━━━━━━━━━━━━━━━━━━━

🤖 | 𝐁𝐎𝐓 𝐍𝐀𝐌𝐄: ◊ ${Info.name} ◊

🌐 | 𝐁𝐎𝐓 𝐏𝐑𝐄𝐅𝐈𝐗: ▷ ${Info.prefix} ◁

🔰 | 𝐁𝐎𝐗 𝐏𝐑𝐄𝐅𝐈𝐗: ▷ ${Info.prefixt} ◁

🛫 | 𝐁𝐎𝐓 𝐏𝐈𝐍𝐆: ◊ ${ping}𝐦𝐬 ◊

📊 | 𝐁𝐎𝐓 𝐔𝐏𝐓𝐈𝐌𝐄: ◊ ${systemInfo.botUpt} ◊

📜 | 𝐓𝐎𝐓𝐀𝐋 𝐁𝐎𝐓 𝐂𝐌𝐃𝐒: ◊ ${commands.size} ◊

🔰 | 𝐆𝐑𝐎𝐔𝐏 𝐍𝐀𝐌𝐄: ◊ ${Info.threadName} ◊

━━━━━━━━━━━━━━━━━━━━━━━

【•𝗦𝗬𝗦𝗧𝗘𝗠 𝗜𝗡𝗙𝗢𝗥𝗠𝗔𝗧𝗜𝗢𝗡•】

━━━━━━━━━━━━━━━━━━━━━━━

📡 | 𝐎𝐒: ◊ ${systemInfo.os} ◊

💽 | 𝐀𝐑𝐂𝐇: ◊ ${systemInfo.arch} ◊

💿 | 𝐂𝐏𝐔: ◊ ${systemInfo.cpu} ◊

⏰ | 𝐓𝐈𝐌𝐄: ◊ ${Info.time} ∥ ${Info.date} ◊

⚡ | 𝐒𝐏𝐄𝐄𝐃: ◊ ${speed}𝐌𝐁/𝐒 ◊

🌐 | 𝐒𝐄𝐑𝐕𝐄𝐑 𝐔𝐏𝐓𝐈𝐌𝐄: ◊ ${systemInfo.sysUpt} ◊

📀 | 𝐑𝐀𝐌 𝐔𝐒𝐀𝐆𝐄: ◊ ${prettyBytes(os.totalmem() - os.freemem())} ∥ 𝐓𝐎𝐓𝐀𝐋: ${prettyBytes(totalMemory)} ◊

💽 | 𝐃𝐈𝐒𝐊 𝐒𝐏𝐀𝐂𝐄 𝐔𝐒𝐀𝐆𝐄: ◊ ${prettyBytes(diskUsage.used)} ∥ 𝐓𝐎𝐓𝐀𝐋: ${prettyBytes(diskUsage.total)} ◊


━━━━━━━━━━━━━━━━━━━━━━━

       【• 𝐁𝐎𝐓 𝐎𝐖𝐍𝐄𝐑•】

【•𝗞𝗬𝗟𝗘𝗣𝗢𝗚𝗜•】

━━━━━━━━━━━━━━━━━━━━━━━

            `,

          attachment: attachment

            }, event.threadID);

      } catch (error) {

        message.reply(`${error}`, event.threadID);

      }

    },

};


async function getDiskUsage() {

  const { stdout } = await exec('df -k /');

  const [_, total, used] = stdout.split('\n')[1].split(/\s+/).filter(Boolean);

  return { total: parseInt(total) * 1024, used: parseInt(used) * 1024 };

}


function formatUptime(seconds) {

  const days = Math.floor(seconds / 86400);

  const hours = Math.floor((seconds % 86400) / 3600);

  const minutes = Math.floor((seconds % 3600) / 60);

  const secondsRemaining = seconds % 60;


  return `${days}𝐃 ${hours}𝐇 ${minutes}𝐌 ${secondsRemaining}𝐒`;

}


function formatMilliseconds(ms) {

  const seconds = Math.floor(ms / 1000);

  const minutes = Math.floor(seconds / 60);

  const hours = Math.floor(minutes / 60);


  return `${hours}𝐇 ${minutes % 60}𝐌 ${seconds % 60}𝐒`;

}


function prettyBytes(bytes) {

  const units = ['𝐁', '𝐊𝐁', '𝐌𝐁', '𝐆𝐁', '𝐓𝐁'];

  let i = 0;

  while (bytes >= 1024 && i < units.length - 1) {

    bytes /= 1024;

    i++;

  }

  return `${bytes.toFixed(2)} ${units[i]}`;

}
