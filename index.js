let Discord = require('discord.js')
let bot = new Discord.Client()

bot.on('ready',  () => {
    console.log("Je suis connecté !")
})
bot.on('message', message => {

    if (message.content === 'Hello' || message.content === 'hello') {
            if(message.author.username=='mj')
                       message.channel.send('Hello chef !')
            else
                message.reply('Hello !'+message.author.username+'How are u ?')
    }
})
bot.login('NDE3Mzg1MTQ4NjkxMjUxMjEy.DXSQeQ.kLkrc7fgyEuZE9blLov9_kXOX_s')