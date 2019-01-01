const Discord = require("discord.js");
const google = require("google");

module.exports.run = async (client, message, args) => {

  google.resultsPerPage = 1
  google.protocol = 'https'
  var nextCounter = 0

  google(args, function (err, res) {
    if (err) console.log(err);

    for (var i = 0; i < res.links.length; ++i) {
      var link = res.links[i];
      if (link.title == null) {
      return void(0)
    }
      if (link.href == null)    {
      return void(0)
    }
      const gEmbed = new Discord.RichEmbed()
        .setAuthor(`Google aranıyor... ${args}`.split(',').join(' '))
        .setColor('#ffc1cc')
        .setThumbnail('http://www.stickpng.com/assets/images/5847f9cbcef1014c0b5e48c8.png')
        .addField('Site', link.title)
        .addField('Açıklama', link.description)
        .addField('Link', link.href);

        message.channel.send(gEmbed);
    }

    if (nextCounter < 1) {
      nextCounter += 1
      if (res.next) res.next()
    }

  });

}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'google',
  description: 'Yazdığınız şeyin google en iyi sonucunun linki verir.(yani google de arama yapar)',
  usage: 'google "aranacak şey"'
};