const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setThumbnail("https://78.media.tumblr.com/10b366f294d47b40d857d6e47872d0dc/tumblr_ntubqoYYsF1sqwlqgo3_250.gif")
  .setTitle("**Eğlence!**")
  .setDescription('')
  .setColor(0x00ffff)
  .addField("<a:WeeWoo:502333005449134080> **:Eğlence Komutları 2:** <a:WeeWoo:502333005449134080>", `<:asbayraklari:502174044871720961>`)
  .addField("**.hayvan = Rastgele Hayvan Gifleri**", `**.stresçarkı = Stres Çarkı Çevirirsiniz**`) 
  .addField("**.tkm = Şakirle Taş-Kağıt-Makas Oynarsınız. **", `**.starwars = StarWars izlersiniz.**`) 
  .addField("**.kahkaha = Kahkaha Atarsınız**", `**.sigara = Sigara Sağlığa Zararlıdır! **`) 
  .addField("**.urfagönder = Urfa Yersiniz.**", `**.sins-aga = Johnny Sins Gifi.**`) 
  .addField("**.arkadaşın = Şakir Arkadaşını Bilir.**", `**.söv = İstediğiniz Kişiye Söversiniz.**`) 
  .addField("**.emojiyazı = Mesajınızı Emoji Metnine Dönüştürür. **", `**.8ball = Sihirli 8ball Sorularınızı Yanıtlar.**`) 
  .addField("**.avatarım = Avatarınızı Gösterir.**", `**.banned = Admin Banhammeri .**`) 
  .addField("**.koş = Koşarsınız **", `**.çayiç = Çay İçersiniz.**`) 
  .addField("**.çekiç = İstediğiniz Kişiye Çekiç Atarsınız**", `**.yumruh-at = İstediğiniz Kişiye Yumruk Atarsınız**`) 
  .addField("**.sunucubilgi = Sunucu Bilgisini Verir**", `**.kullanıcıbilgim = Kullanıcı Bilginizi Verir.**`) 

  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
    message.channel.send(embedyardim);
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.author.send('asciidoc', `= ${command.help.name} = \n${command.help.description}\nDoğru kullanım: ` + prefix + `${command.help.usage}`);
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['e2', 'eğ2', '4'],
  permLevel: 0
};

exports.help = {
  name: 'eğlence2',
  description: 'Eğlence komutlarını gösterir.',
  usage: 'eğlence2'
};
