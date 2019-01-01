const Discord = require("discord.js");
const moment = require("moment");
require("moment-duration-format");

exports.run = (client, msg) => {
  const duration = moment.duration(client.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]")
   const istatistikler = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setFooter('Şakir Bot | sakir.sitem.xyz', client.user.avatarURL)
  .addField("» Botun Sahibi",  "<@358674744817614848>")
  .addField("» Bellek kullanımı", (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2) + " MB", true)
  .addField("» Çalışma süresi", duration)
  .addField("» Sunucular", client.guilds.size.toLocaleString(), true)
  .addField("» Kanallar", client.channels.size.toLocaleString(), true)
  .addField("» Discord.JS sürüm", "v"+Discord.version, true)
  .addField("» Ping", client.ping+" ms", true)
  .addField("» Linkler", `[Bot Davet Linki](https://discordapp.com/oauth2/authorize?client_id=429500693741568020&scope=bot&permissions=805314622)` + "** | **" + `[Destek Sunucusu](https://discord.gg/bamkeg7)`, false);
  return msg.channel.send(istatistikler);
  };


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['bot durum', 'i', 'bi', 'istatistikler', 'kullanımlar', 'botdurum', 'bd', 'istatisik', 'stats', 'stat'],
  permLevel: 0
};

exports.help = {
  name: 'istatistik',
  description: 'c',
  usage: 'istatistik'
};