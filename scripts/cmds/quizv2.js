let axios = require('axios');

module.exports = {
  config: {
  name: "quizv2",
  aliases: ['mcq', 'mcqs'],
  version: "1.0",
  author: "Kyle",
  countDown: 5,
  role: 0,
  category: "game"
},

  onReply: async function ({ args, event, api, Reply, commandName, usersData }) {
    let { dataGame, answer, nameUser } = Reply;
    if (event.senderID !== Reply.author) return;

    switch (Reply.type) {
      case "reply": {
        let userReply = event.body.toLowerCase();

        if (userReply === answer.toLowerCase()) {
          api.unsendMessage(Reply.messageID).catch(console.error);
          let rewardCoins = 720;
          let rewardExp = 20; 
          let senderID = event.senderID;
          let userData = await usersData.get(senderID);
          await usersData.set(senderID, {
            money: userData.money + rewardCoins,
            exp: userData.exp + rewardExp,
            data: userData.data
          });
          let msg = {
            body: `✅ | 𝗰𝗼𝗻𝗴𝗿𝗮𝘁𝘂𝗹𝗮𝘁𝗶𝗼𝗻𝘀 ${nameUser}\n▬▬▬▬▬▬▬▬▬▬▬▬\n🎉🎊𝗬𝗼𝘂𝗿 𝗮𝗻𝘀𝘄𝗲𝗿 𝗶𝘀 𝗰𝗼𝗿𝗿𝗲𝗰𝘁 𝗮𝗻𝗱 ${rewardCoins} 𝗖𝗼𝗶𝗻𝘀 𝗳𝗼𝗿 𝘆𝗼𝘂 𝗱𝗲𝗮𝗿(≧∇≦)/\n▬▬▬▬▬▬▬▬▬▬▬▬`
          };
          return api.sendMessage(msg, event.threadID, event.messageID);
        } else {
          api.unsendMessage(Reply.messageID);
          let msg = `${nameUser}, 𝗧𝗵𝗲 𝗮𝗻𝘀𝘄𝗲𝗿 𝗶𝘀 𝗶𝗻𝗰𝗼𝗿𝗿𝗲𝗰𝘁 : (\rect 𝗮𝗻𝘀𝘄𝗲𝗿 𝗶𝘀: ${answer}`;
          return api.sendMessage(msg, event.threadID);
        }
      }
    }
  },

  onStart: async function ({ api, event, usersData, commandName }) {
    let { threadID, messageID } = event;
    let timeout = 60;

    try {
      let response = await axios.get('https://jarif99.ameliagadha.repl.co/quiz?apikey=jarif99');
      let quizData = response.data;
      let JARiF = response.data;
      let { question, answer } = quizData;
      let { A, B, C, D } = JARiF;
      let namePlayerReact = await usersData.getName(event.senderID);

      let msg = {
        body: `${question} \ ${A} \${B}\${C}\${D}\ply with the answer`,
      };

      api.sendMessage(msg, threadID, async (error, info) => {
        global.GoatBot.onReply.set(info.messageID, {
          type: "reply",
          commandName,
          author: event.senderID,
          messageID: info.messageID,
          dataGame: quizData,
          answer,
          nameUser: namePlayerReact
        });

        setTimeout(function () {
          api.unsendMessage(info.messageID);
        }, timeout * 1000);
      });
    } catch (error) {
      console.error("Error Occurred:", error);
    }
  }
};
