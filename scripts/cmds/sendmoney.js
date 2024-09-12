module.exports = {
    config: {
        name: "sendmoney",
        version: "1.0.0",
        author: "Kyle",
        shortDescription: {
            en: "Send money to another user",
        },
        longDescription: {
            en: "Command to transfer money to another user by UID.",
        },
        category: "𝗦𝗲𝗻𝗱𝗺𝗼𝗻𝗲𝘆💸",
    },
    onStart: async function ({ args, message, event, usersData }) {
        const { senderID } = event;
        const senderData = await usersData.get(senderID);
        
        if (!senderData) {
            return message.reply("❌ 𝗘𝗿𝗿𝗼𝗿: Sender data not foundಥ_ಥ");
        }
        
        const amount = parseInt(args[0]);
        if (isNaN(amount) || amount <= 0) {
            return message.reply("Please enter a valid positive amount to send.");
        } else if (amount > senderData.money) {
            return message.reply("⛔ | 𝗘𝗥𝗥𝗢𝗥!!\n▬▬▬▬▬▬▬▬▬▬▬▬\n ⚠️not enough money in your balance.");
        }
        
        const recipientUID = args[1];
        if (!recipientUID) {
            return message.reply("❌ 𝗘𝗿𝗿𝗼𝗿: Please provide a recipient UID.(◍•ᴗ•◍)");
        }
        
        const recipientData = await usersData.get(recipientUID);
        if (!recipientData) {
            return message.reply("⛔ 𝗥𝗲𝗰𝗶𝗽𝗶𝗲𝗻𝘁 𝗻𝗼𝘁 𝗳𝗼𝘂𝗻𝗱.");
        }
        
        await usersData.set(senderID, {
            money: senderData.money - amount,
            data: senderData.data,
        });
        
        await usersData.set(recipientUID, {
            money: (recipientData.money || 0) + amount,
            data: recipientData.data,
        });
        
        return message.reply(`✅ | 𝘀𝘂𝗰𝗲𝘀𝘀𝗳𝘂𝗹𝗹𝘆 𝘀𝗲𝗻𝘁(◍•ᴗ•◍)\n▬▬▬▬▬▬▬▬▬▬▬▬\n💸𝗦𝗲𝗻𝗱 𝗺𝗼𝗻𝗲𝘆: ₱${amount} 𝘁𝗼 𝗨𝗜𝗗: ${recipientUID}.\n▬▬▬▬▬▬▬▬▬▬▬▬`);
    },
};
