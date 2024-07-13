const axios = require("axios");
const fs = require("fs");
const path = require("path");

module.exports = {
  config: {
    name: "view",
    aliases: [],
    author: "Kshitiz",//modified by Kyle
    version: "1.0",
    cooldowns: 5,
    role: 0,
    shortDescription: "View image or video from a link",
    longDescription: "View image or video from a link",
    category: "utility",
    guide: "{p}view [image/video link]",
  },

  onStart: async function ({ api, event, args, message }) {
    const link = args[0];

    if (!link) {
      return message.reply("👨‍💻 𝗣𝗹𝗲𝗮𝘀𝗲 𝗽𝗿𝗼𝘃𝗶𝗱𝗲 𝗮 𝘃𝗮𝗶𝗹𝗱 𝗹𝗶𝗻𝗸 𝘁𝗼 𝘃𝗶𝗲𝘄❓");
    }

    try {
      const response = await axios.head(link);

     
      if (response.status === 200) {
        const contentType = response.headers['content-type'];
        let extension = '';

        if (contentType.includes('image')) {
          extension = '.png';
        } else if (contentType.includes('video')) {
          extension = '.mp4';
        } else {
          return message.reply("Unsupported link format. Please provide a valid download link.");
        }

        const tempFilePath = path.join(__dirname, "cache", `${Date.now()}${extension}`);
        const writer = fs.createWriteStream(tempFilePath);

        const downloadResponse = await axios.get(link, { responseType: "stream" });
        downloadResponse.data.pipe(writer);

        writer.on("finish", () => {
          const stream = fs.createReadStream(tempFilePath);

          message.reply({
            body: `✅ | 𝘆𝗼𝘂𝗿 𝗿𝗲𝗾𝘂𝗲𝘀𝘁 𝗶𝘀 𝗱𝗼𝗻𝗲(◍•ᴗ•◍)\n▬▬▬▬▬▬▬▬▬▬▬▬`,
            attachment: stream,
          });
        });
      } else {
        message.reply("❌ |  𝘂𝗻𝘀𝘂𝗽𝗽𝗼𝗿𝘁𝗲𝗱 𝗹𝗶𝗻𝗸 𝗳𝗼𝗿𝗺𝗮𝘁ಥ_ಥ\n▬▬▬▬▬▬▬▬▬▬▬▬\n𝗣𝗹𝗲𝗮𝘀𝗲 𝗽𝗿𝗼𝘃𝗶𝗱𝗲 𝗮 𝘃𝗮𝗹𝗶𝗱 𝗱𝗶𝗿𝗲𝗰𝘁 𝗱𝗼𝘄𝗻𝗹𝗼𝗮𝗱 𝗹𝗶𝗻𝗸");
      }
    } catch (error) {
      console.error(error);
      message.reply("❌ 𝗦𝗼𝗿𝗿𝘆 𝗮𝗻 𝗲𝗿𝗿𝗼𝗿 𝗼𝗰𝗰𝘂𝗿𝗿𝗲𝗱 𝘄𝗵𝗶𝗹𝗲 𝗽𝗿𝗼𝗰𝗲𝘀𝘀𝗶𝗻𝗴 𝘆𝗼𝘂𝗿 𝗿𝗲𝗾𝘂𝗲𝘀𝘁ಥ_ಥ");
    }
  }
};
