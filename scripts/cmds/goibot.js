const { GoatWrapper } = require('fca-liane-utils');
const axios = require("axios");

module.exports = {
 config: {
 name: "bot",
aliases: ["Zephyrus", "Zeph", "help","p"],
  version: "1.0",
 author: "Kylepogi", 
 countDown: 5,
 role: 0,
 shortDescription: "no prefix",
 longDescription: "no prefix",
 category: "no prefix",
 }, 
 onStart: async function(){}, 
 onChat: async function({ event, message, getLang }) {
 if (event.body && event.body.toLowerCase() === "ai") {
 return message.reply({
 body: "Hey I am Zeph (A.i) create by 𝗞𝘆𝗹𝗲敦.(Kyle Bait-it)\n▬▬▬▬▬▬▬▬▬▬▬▬\nI am an AI assistant designed to help and assist you with any questions or tasks you may have. Feel free to ask me anything!\n\n please type ×help3 or help to see my other commands 😁\n\n this is my developer: https://www.facebook.com/kyledev03\n▬▬▬▬▬▬▬▬▬▬▬▬",
 attachment: await global.utils.getStreamFromURL("https://i.imgur.com/fFLjfy5.jpeg")
 });
 }
 }
},
const wrapper = new GoatWrapper(module.exports);
wrapper.applyNoPrefix({ allowPrefix: false });
