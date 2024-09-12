const fs = require("fs");
const axios = require("axios");

module.exports = {
  config: {
    name: "spampic",
    version: "1.1",
    author: "sheikh farid | JARiF",
    countDown: 5,
    role: 2,
    category: "owner"
  },

  onStart: async function ({ api, event }) {
    try {
      let img = "https://scontent.xx.fbcdn.net/v/t1.15752-9/363498958_617652850434611_4763043760887829672_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=8cd0a2&_nc_ohc=m5hpjJf7JwQAX8yABYC&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdTRfTS4oVKw7qTDW7aYPFDIW5ZkrRmSTrjfw39itS1dlw&oe=64FDA233";

      async function downloadImages() {
        try {
          let response = await axios.get(img, { responseType: "stream" });
          let filePath = `${__dirname}/cache/spamImage.jpg`;
          let writer = fs.createWriteStream(filePath);

          response.data.pipe(writer);

          await new Promise((resolve, reject) => {
            writer.on("finish", resolve);
            writer.on("error", reject);
          });

          return fs.createReadStream(filePath);
        } catch (error) {
          console.error("Error downloading image:", error);
          return null;
        }
      }

      let imgStream = await downloadImages();

      if (imgStream) {
        for (let j = 0; j < 10; j++) {
          api.sendMessage({
            body: "🤨🧐",
            attachment: imgStream
          }, event.threadID);
        }
      } else {
        api.sendMessage("Failed to download image for spam.", event.threadID);
      }
    } catch (error) {
      console.error("Error in onStart:", error);
    }
  }
};
