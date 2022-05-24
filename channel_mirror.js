#! /usr/bin/node
const Discord = require("discord.js")

const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] })

USERID = "";
ORIGIN_CHANNEL = ""
CHANNEL_TOKEN = "";


client.on('ready', () => {
  console.log('Bot is ready');
});

client.on('message', (msg) => {
	// if(ORIGIN_CHANNEL)
  	msg.guild.members.cache.forEach(user => {
  		if(ORIGIN_CHANNEL != 0 && ORIGIN_CHANNEL == msg.channelId){
  			if(user.user.bot == false && user.user.id == USERID){
	  			user.send(msg.content)
	  		} 
  		}

  		if(ORIGIN_CHANNEL == ""){
  			if(user.user.bot == false && user.user.id == USERID){
	  			user.send(msg.content)
	  		} 
  		}			
  	})
});


client.login(CHANNEL_TOKEN)