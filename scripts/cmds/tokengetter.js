const { GoatWrapper } = require('fca-liane-utils');
const axios = require("axios");

module.exports = {
    name: 'tokengetter',
    description: 'Token Getter',
    usage: 'token [email] [password]',
    cooldown: 3,
    args: true,
    async execute({ api, event, args }) {
        const [email, password] = args;
        const message = { className: '', textContent: '' };

        if (!email || !password) {
            message.className = 'error';
            message.textContent = 'Usage: token [email] [password]';
            api.sendMessage(message.textContent, event.threadID, event.messageID);
            return;
        }

        message.textContent = 'Fetching token...';
        api.sendMessage(message.textContent, event.threadID, event.messageID);

        const tokenUrl = `https://nash-rest-api.replit.app/token?username=${encodeURIComponent(email)}&pass=${encodeURIComponent(password)}`;

        try {
            const response = await axios.get(tokenUrl);
            if (response.data && response.data.token) {
                message.className = 'success';
                message.textContent = `Here's your token:\n${response.data.token}`;
                api.sendMessage(message.textContent, event.threadID, event.messageID);
            } else {
                message.className = 'error';
                message.textContent = 'Failed to retrieve token. Please check your credentials.';
                api.sendMessage(message.textContent, event.threadID, event.messageID);
            }
        } catch (error) {
            console.error('Error fetching the token:', error);
            message.className = 'error';
            message.textContent = 'An error occurred while fetching the token.';
            api.sendMessage(message.textContent, event.threadID, event.messageID);
        }
    },
};
const wrapper = new GoatWrapper(module.exports);
wrapper.applyNoPrefix({ allowPrefix: false });
