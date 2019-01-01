const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, params) => {
	if (!message.guild) {
    const ozelmesajuyari = new Discord.RichEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('**Eğlence Komutları Özel Mesajlarda Kullanılamaz!**')
    return message.author.sendEmbed(ozelmesajuyari); }
    if (message.channel.type !== 'dm') {
      const sunucubilgi = new Discord.RichEmbed()
    .setAuthor("`Her ülkenin bir kurucusu vardır ancak her ülkenin Atatürk'ü yoktur! Mustafa Kemal Atatürkü Sevgi ve Rahmetle Anıyoruz ❤`")
    .setColor(3447003)
    .setTimestamp()
    .setDescription('')
		.setImage(`https://i.sozcu.com.tr/wp-content/uploads/2016/09/mustafa-kemal-ataturk.jpg`)
    return message.channel.sendEmbed(sunucubilgi);
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'atatürk',
  description: 'Yumruk Atar.',
  usage: 'yumruh-at'
};
