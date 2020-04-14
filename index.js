const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('pong :ok_hand:');
    msg.react("😍")
  }
  if (msg.content === 'hola' && msg.author.username == 'kernnel'){
    msg.channel.send('hola sumagestad'+msg.author);
      console.log(msg.author.username)
  }else if(msg.content === 'hola'){
    msg.channel.send('hola '+msg.author);
  }
 
  //final de los if
});

client.login('NjEwMDQ0MDYyMjY2OTQ5NjQz.XU_lPQ.kr1vGNm40QYsfT_glXBBwNEn278');