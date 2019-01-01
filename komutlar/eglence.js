const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setThumbnail("https://78.media.tumblr.com/10b366f294d47b40d857d6e47872d0dc/tumblr_ntubqoYYsF1sqwlqgo3_250.gif")
  .setTitle("**Eğlence!**")
  .setDescription('')
  .setColor(0x00ffff)
  .addField("<a:WeeWoo:502333005449134080> **:Eğlence Komutları:** <a:WeeWoo:502333005449134080>", `<:asbayraklari:502174044871720961>`)
       .addField("**.balıktut = Balık Tutarsınız**", `**.1vs1 = 1 VS 1**`)
  .addField("**.bjk = Avatarınıza BJK Efekti Verir**", `**.tavsiye = Tavsiyenizi Yapımcıya İletir**`)
    .addField("**.fb = Avatarınıza FB Efekti Verir**", `**.gs = Avatarınıza GS Efekti verir**`)
    .addField("**.kartopu = Etiketldeiğiniz Kişiye kartopu atarsınız.**", `**.öneri = Önerilerinizi Yapımcıya İletir**`)
  .addField("**.özlüsöz = Şakir Bir Özlü Söz Söyler.**", `**.sik = Etiketlediğiniz kişiyi sikersiniz.**`)
  .addField("**.brilliance = Avatarınıza Brilliance Efekti Verir.**", `**.çekiliş = Sunucudaki Üyeler Arasında Çekiliş Yaparsınız..**`)
  .addField("**.kralol = Avatarınıza Kral Efekti Verir.**", `**.bravery = Avatarınıza Bravery Efekti Verir.**`)
  .addField("**.level = Seviyenizi Gösterir.**", `**.korkut = İstediğiniz Kişiyi Korkutursunuz**`)
  .addField("**.fakemesaj  = Fake Mesaj Atar**", `**.atatürk-çerçeve = Avatarınıza Ataürk Çerçevesi Ekler.**`)
  .addField("**.trigger  = Avatarınıza Triggered Efekti Verir.**", `**.simit = Simit Yersiniz.**`)
  .addField("**.rastgeleşifre  = Rastgele Şifre Oluşturur.**", `**.bayrak = Bayrak **`)
  .addField("**.kaslı = Kaslı Olursunuz**", `**.tersrenk = Avatarınızın Rengini Tersine Çevirir.**`)
  .addField("**.sniper = Avatarınıza Sniper Efekti Verir.**", `**.wasted = Avatarınıza Wasted Efekti Verir.**`)  
  .addField("**.reklamlar = Rek-lam-lar.**", `**.su = Şakir Çok Susadı! Ona Su Ver**`)  
  .addField("**.kurabiye = Kurabiye Yersin**", `**.nahçek = İstediğin Kişiye Nah Çekersin**`)   
  .addField("**.kedi = Rastgele Kedi Gifleri.**", `**.bilezik = Bilezik Alırsınız.**`) 
  .addField("**.ascii**", `**Ascii Yazı Yazmanızı Sağlar.** `) 
  .addField("**.mcbaşarım**", `**Mesajınızı Minecraft Başarımına Dönüştürür.**`) 
  .addField("**.geldim/.afk** = **AFK Moduna Girmenizi-Çıkmanızı Sağlar**", `**.atatürk** = **Atatürk Resimleri Gösterir.**`) 
  .addField("**.şakir = Şakiri Tanıtır**", `**.espri = Şakir Espri Yapar** `) 
  .addField("**.gif = Rastgele Gifler**", `**.tokat = İstediğiniz Kişiye Tokat Atarsınız**`) 
  .addField("**EĞLENCE KOMUTLARININ DEVAMI İÇİN .eğlence2**", `**-----------**`) 

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
  aliases: ['e', 'eğ', '1'],
  permLevel: 0
};

exports.help = {
  name: 'eğlence',
  description: 'Eğlence komutlarını gösterir.',
  usage: 'eğlence'
};
