const Discord = require('discord.js');


exports.run = function(client, message) {
const embed = new Discord.RichEmbed()
.setColor('RANDOM')
.setTitle('» © KucukTasel  Müzik  Komutları')
.setTimestamp()
.addField('» -Çal- Müzik Açar', '.play')
.addField('» -Devam- Şarkıya Devam Eder', '.resum ')
.addField('» -Duraklat- Şarkıyı Durdurur', '.stop')
.addField('» -Kapat- Şarkıyı Kapatır', '.disconnect')
.addField('» -Geç- Şarkıyı Geçersiniz', '.skip')
.setFooter('© KucukTasel  Müzik', client.user.avatarURL)
.setTimestamp()
.setThumbnail(client.user.avatarURL)
message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: ['y','yardım','müzik','muzik','mz'], 
  permLevel: 0 
};

exports.help = {
  name: 'help',
  description: 'Tüm komutları gösterir.',
  usage: 'müzik'
};