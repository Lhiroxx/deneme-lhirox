const Discord = require('discord.js')

exports.run = (client, message, args) => {
  let user = message.mentions.users.first();
  if(!user) return message.channel.send('Kimi bol bol sikmek istersin...')
  

      var resim = [
      'https://cdn.discordapp.com/attachments/481183472363241472/502450907712192512/unknown.png'];

      var resimler = resim[Math.floor(Math.random() * resim.length)];
  
    const sik = new Discord.RichEmbed()
    .setAuthor(message.author.username + ` ${user.username}'ı sikti`)
    .setColor('RANDOM')
    .setFooter('Boşaldın mı kanka?')
    .setImage(resimler)
     message.channel.send(sik)
    }
  
;

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'sik',
  description: '',
  usage: ''
};