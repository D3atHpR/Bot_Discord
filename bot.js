const Discord = require ("discord.js")
const config = require("./config.json")
const bot = new Discord.Client()


bot.on("ready",async()=>{
    console.log("bot online")
    bot.user.setActivity(`Olá, Tudo bem? | ${config.perfix}Okay!`,{type :'Playing'})

})

bot.on("message", async message=> {
    if(message.author.bot) return;
    if(message.channel.type ==="dm") return;

})

bot.login(config.token)
