require('dotenv').config();
const {Client} = require('discord.js');

const bot= new Client({ intents: 8});

bot.on('ready', ()=>{
 console.log(`${bot.user.tag} has logged in..`);
});

bot.on('message', (message)=>{
  console.log(`[${message.author.tag}]: [${message.content}]`);
  if(message.content==='Hello'){
    message.channel.send("Hello i'm a bot..");
  }
});

bot.login(process.env.DISCORDJS_BOT_TOKEN);
