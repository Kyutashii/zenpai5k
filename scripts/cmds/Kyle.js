module.exports = {
 config: {
 name: "kyle",
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
 if (event.body && event.body.toLowerCase() === "kyle") {
 return message.reply({
 body: "Dont call my boss 𝗞𝘆𝗹𝗲敦. If He Aint Here !!(⋋▂⋌)",
 attachment: await global.utils.getStreamFromURL("https://i.imgur.com/Ck8QC31.jpeg")
 });
 }
 }
}
