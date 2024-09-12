const { GoatWrapper } = require('fca-liane-utils');
const axios = require("axios");
const fs = require("fs-extra");
const request = require("request");
module.exports = {
	config: {
		name: "Out",
		aliases: ["leave","l"],
		version: "1.0",
		author: "Kyle",
		countDown: 5,
		role: 2,
		shortDescription: "bot will leave gc",
		longDescription: "",
		category: "admin",
		guide: {
			vi: "{pn} [tid,blank]",
			en: "{pn} [tid,blank]"
		}
	},

	onStart: async function ({ api,event,args, message }) {
 var id;
 if (!args.join(" ")) {
 id = event.threadID;
 } else {
 id = parseInt(args.join(" "));
 }
 return api.sendMessage('𝗚𝗢𝗢𝗗 𝗕𝗬𝗘 𝗡𝗜𝗚𝗚𝗔𝗦🙃\n▬▬▬▬▬▬▬▬▬▬▬▬\n➥𝗥𝗘𝗔𝗦𝗢𝗡: 𝗧𝗛𝗘 𝗕𝗢𝗧 𝗜𝗦 𝗟𝗘𝗔𝗩𝗜𝗡𝗚 𝗧𝗛𝗜𝗦 𝗚𝗥𝗢𝗨𝗣. \n▬▬▬▬▬▬▬▬▬▬▬▬', id, () => api.removeUserFromGroup(api.getCurrentUserID(), id))
		}
	};

const wrapper = new GoatWrapper(module.exports);
wrapper.applyNoPrefix({ allowPrefix: false });
