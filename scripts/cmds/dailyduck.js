module.exports = {
    config: {
        name: "duck",
        aliases: ["dailyduck"],
        version: "1.0",
        author: "Kyle",
        role: 0,
        description: "Get your daily money from the duck",
        category: "game"
    },
    onStart: function ({ api, event }) {
        const dailyMoney = Math.floor(Math.random() * 73848382848) + 1; // Generating a random amount of daily money

        api.sendMessage(`🦆 𝗤𝘂𝗮𝗰𝗸!!!𝗤𝘂𝗮𝗰𝗸!!!\n▬▬▬▬▬▬▬▬▬▬▬▬\n💁🏻‍♂️ 𝘠𝘰𝘶 𝘨𝘰𝘵 ${dailyMoney} 𝘮𝘰𝘯𝘦𝘺 𝘧𝘳𝘰𝘮 𝘵𝘩𝘦 duck 𝘕𝘰𝘸.`, event.threadID); // Sending the message with the daily money amount
    }
};
