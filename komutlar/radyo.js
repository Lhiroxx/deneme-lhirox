const Discord = require("discord.js");

exports.run = async (client, msg) => {

const radio = {
    "franceinfo": "http://roo8ohho.cdn.dvmr.fr/live/franceinfo-midfi.mp3",
    "nrj": "http://185.52.127.132/fr/30001/mp3_128.mp3?origine=fluxradios",
    "rtl2": "http://streaming.radio.rtl2.fr/rtl2-1-48-192",
    "skyrock": "http://icecast.skyrock.net/s/natio_mp3_128k?tvr_name=tunein16&tvr_section1=128mp3",
    "rtl": "http://streaming.radio.rtl.fr/rtl-1-48-192",
    "rfm": "http://rfm-live-mp3-128.scdn.arkena.com/rfm.mp3",
    "bfm": "http://chai5she.cdn.dvmr.fr/bfmbusiness",
    "efkarlı": "http://www.radyodinle.fm/#best-fm-98-4"
}
            if (!msg.guild.voiceConnection) {

                if (!msg.member.voiceChannel) return msg.channel.send(':x: | Lütfen Bir Odaya Gir  !')

            }

            let args = msg.content.split(" ").slice(1).join(" ").toLowerCase();

      if (!args) return msg.channel.send(':x: | Bir Radyo Seçin : **franceinfo**, **efkarlı**, **rtl2**, **skyrock**, **rtl**, **rfm**, **bfm**')

        if(!radio[args]) return msg.channel.send(':x: | Lütfen Yandaki Radiolardan Birini Seç : **franceinfo**, **efkarlı**, **rtl2**, **skyrock**, **rtl**, **rfm**, **bfm**')

    msg.member.voiceChannel.join().then(connection => {

    require('http').get(radio[args], (res) => {

            connection.playStream(res);

     let embed = new Discord.RichEmbed()
        .setAuthor(args)
        .setColor(0xFF0000)
        .addField("Radyo", args)
        .addField("Bağlantı", radio[args])
        .setFooter(msg.author.tag);

     msg.channel.send("**İyi Dinlemeler**", embed);

          });

  });

}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["radio"],
    permLevel: 0
  };
exports.help = {
    name : "radyo",
    usage: "radio <nom de radio>",
    description: "Donner l'ordre au bot d'écouter la radio"
}