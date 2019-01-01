const Discord = require('discord.js');

exports.run = (client, message, args, member) => {
    let mesaj = args.slice(0).join(' ');
    if (mesaj.length < 1) return message.channel.send(':x: Lütfen Siparişinizi Yazınız');
  let incidentchannel = message.guild.channels.find(`name`, "siparişler");
    if(!incidentchannel) return message.channel.send(":x: **siparişler** kanalını bulamıyorum.");

    incidentchannel.send(`<@411204290024046602>| **Sipariş**\n\n- ** ${mesaj}** \n ***Sipariş Veren: ${message.author}***`);
    message.channel.send(':white_check_mark: Siparişiniz Yetkililere İletildi. Teşekkürler')
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 2
};

exports.help = {
  name: 'tasarım',
  description: 'Siparis',
  usage: 'sipariş <mesaj>'
};