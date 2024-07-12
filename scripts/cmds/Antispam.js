let messageCounts = {};
let spamDetectionEnabled = true;
const spamThreshold = 5;
const spamInterval = 120;

module.exports = {
	config: {
		name: "spamkick",
		aliases: ["autokick"],
		version: "1.0",
		author: "Kyle",
    role: 0,
    category: "⚠️ 𝗔𝗻𝘁𝗶𝘀𝗽𝗮𝗺."
	},

	toggleSpamDetection: function () {
		spamDetectionEnabled = !spamDetectionEnabled;
		return spamDetectionEnabled ? "⚠️ | 𝗦𝗽𝗮𝗺 𝗱𝗲𝘁𝗲𝗰𝘁𝗶𝗼𝗻!!\n▬▬▬▬▬▬▬▬▬▬▬▬\n 🟢is now enabled.\n▬▬▬▬▬▬▬▬▬▬▬▬" : "⚠️ | 𝗦𝗽𝗮𝗺 𝗱𝗲𝘁𝗲𝗰𝘁𝗶𝗼𝗻!!\n▬▬▬▬▬▬▬▬▬▬▬▬\n 🔴is now disabled.\n▬▬▬▬▬▬▬▬▬▬▬▬";
	},

	onStart: function ({ api, event }) {
		const { threadID, senderID, isAdmin } = event;

		if (!spamDetectionEnabled) {
			return;
		}

		if (!messageCounts[threadID]) {
			messageCounts[threadID] = {};
		}

		if (!messageCounts[threadID][senderID]) {
			messageCounts[threadID][senderID] = {
				count: 1,
				timer: setTimeout(() => {
					delete messageCounts[threadID][senderID];
				}, spamInterval),
			};
		} else {
			messageCounts[threadID][senderID].count++;
			if (messageCounts[threadID][senderID].count > spamThreshold) {
				if (isAdmin) {
					api.removeUserFromGroup(senderID, threadID);
					api.sendMessage({
						body: "⚠️ | 𝗗𝗲𝘁𝗲𝗰𝘁𝗲𝗱 𝘀𝗽𝗮𝗺𝗺𝗶𝗻𝗴凸( •̀_•́ )凸\n▬▬▬▬▬▬▬▬▬▬▬▬\n 💁🏻‍♂️𝖳𝗁𝖾 𝗎𝗌𝖾𝗋 𝗁𝖺𝗌 𝖻𝖾𝖾𝗇 𝗄𝗂𝖼𝗄𝖾𝖽 𝖿𝗋𝗈𝗆 𝗍𝗁𝖾 𝗀𝗋𝗈𝗎𝗉.\n▬▬▬▬▬▬▬▬▬▬▬▬",
						mentions: [{
							tag: senderID,
							id: senderID,
						}],
					}, threadID);
				} else {
					api.removeUserFromGroup(api.getCurrentUserID(), threadID);
					api.sendMessage("⚠️ | 𝗗𝗲𝘁𝗲𝗰𝘁𝗲𝗱 𝘀𝗽𝗮𝗺𝗺𝗶𝗻𝗴凸( •̀_•́ )凸\n▬▬▬▬▬▬▬▬▬▬▬▬\n💁🏻‍♂️ 𝖳𝗁𝖾 𝖻𝗈𝗍 𝗁𝖺𝗌 𝗅𝖾𝖿𝗍 𝗍𝗁𝖾 𝗀𝗋𝗈𝗎𝗉 𝖽𝗎𝖾 𝗍𝗈 spam.\n▬▬▬▬▬▬▬▬▬▬▬▬", threadID);
				}
			}
		}
	}
};


// gagana bato eh di naman ako nka goat bala na kayo na mag ayos goat user  or pa update if work practhvvice lang
