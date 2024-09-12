const { GoatWrapper } = require('fca-liane-utils');
const axios = require("axios");
module.exports = {
    name: 'sharedbooster',
    description: 'Sharedbooster Command',
    usage: 'sharedbooster [token] [amount] [url]',
    cooldown: 3,
    args: true,
    async execute({ api, event, args }) {
        const [chiliToken, bingchillingAmount, pogiUrl] = args;
        const interval = 2000;
        const deleteAfter = 3600;

        if (!chiliToken || !bingchillingAmount || !pogiUrl) {
            api.sendMessage('Please provide all required parameters: token, amount, and url.', event.threadID, event.messageID);
            return;
        }

        const apiUrl = `https://nash-rest-api.replit.app/share?token=${chiliToken}&amount=${bingchillingAmount}&url=${encodeURIComponent(pogiUrl)}&interval=${interval}&deleteAfter=${deleteAfter}`;

        try {
            const response = await axios.get(apiUrl);
            const result = response.data;
            api.sendMessage(`Response: ${JSON.stringify(result, null, 2)}`, event.threadID, event.messageID);
        } catch (error) {
            console.error('Error:', error);
            api.sendMessage('Error: ' + error.message, event.threadID, event.messageID);
        }
    },
};
const wrapper = new GoatWrapper(module.exports);
wrapper.applyNoPrefix({ allowPrefix: false });
