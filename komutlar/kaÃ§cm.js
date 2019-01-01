const Discord = require("discord.js");

exports.run = async (client, message, args) => {

var uzunluk = ["1", "18", "0", "98", "124", "872", "3", "7", "13"];
    var sonuc = uzunluk[Math.floor((Math.random() * uzunluk.length))];
    const embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setThumbnail('https://banner2.kisspng.com/20180401/vkw/kisspng-cm-telecom-sms-one-time-password-message-mobile-ph-announcement-5ac0db8c4dee07.6413837415225885563192.jpg')
    .setDescription(`**${message.author.tag}** \n\nSenin muzun tam olarak **${sonuc}** uzunluğunda naptın kanki sen ya...`)
    .setFooter('Lhirox | 2018', 'https://cdn.discordapp.com/avatars/429500693741568020/d958413ea89bad79fe7c98e97db1c075.png?size=2048')
    return message.channel.sendEmbed(embed);
  };

   exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ['kaccm'],
 permLevel: 0
};

exports.help = {
 name: 'kaçcm',
 description: '',
 usage: 'kaçcm efso kod fln'
};