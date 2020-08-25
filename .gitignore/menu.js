const Discord = require('discord.js');
const client = new Discord.Client();

var prefix = ("*")
var footer = ("Dungeons Bot by IceGod#7002 | Tout droits réservés")
var invisible = (" 󠇰󠇰  ")

const fs = require("fs");

longc = require("./longcode");

client.login(process.env.TOKEN);

client.on('ready', function() {
    client.user.setStatus("idle")
    client.user.setActivity("Skyblock Dungeons")
    console.log(`💾 menu.js is working! Logged in as ${client.user.tag}`);
});
  
  client.on('message', message => {
    
    msg = message.content.toLowerCase();
    mention = message.mentions.users.first();
    field = (`:arrow_right: Command requested by <@${message.author.id}>`) 

    if(message.author.bot) return;

    if (msg.startsWith (prefix + "help")){
        message.delete();
      var embed = new Discord.MessageEmbed()
          .setTitle(":question: Need help? Here is the bot's Command list: :question:")
          .setDescription(` 󠇰󠇰  `)
          .setColor("#f5980c")
          .addField(":grey_question: *help", "Shows the command list.")
          .addField(":crystal_ball: *class", "Shows you the best gear for each class.")
          .addField(":crossed_swords: *starter", "A full guide that covers all dungeon floors.")
          .addField(":envelope: *mail", "Write something to your friends! Admins only for now!")
          .addField(":dvd: *update", "Shows the ongoing progress in the bot. Will dissapear at 1.0.0") 
          .addField(invisible, field)         
          .setImage("https://cdn.discordapp.com/attachments/746432034054078635/747555898876100628/hiderdungeon.png")
          .setFooter(footer)
      message.channel.send(embed)
      console.log(`❔ ${message.author.tag} used Help`)
    }

    if (msg.startsWith (prefix + "update")){
      var embed = new Discord.MessageEmbed()
          .setTitle(":dvd: As the bot is in developpement, here is all the updates/flaws regarding the bot :dvd:")
          .setDescription(" 󠇰󠇰  ")
          .setColor("#f5980c")
          .addField(":desktop: Version:", "0.0.1 | Alpha")
          .addField(":cd: Finished commands:", "*class")
          .addField(":x: Unfinished commands:", "*help (Image and new commands), *mail (Can send empty msg's)")
          .addField(invisible, field)
          .setFooter(footer)
      message.channel.send(embed)
      console.log(`📀 ${message.author.tag} used Update`)
    }

//  if (msg.startsWith (prefix + "mail")){
//    if (mention == null) { return; }
//    message.delete();
//    mentionMessage = message.content.slice (28);
//    mention.send (("**You recieved a mail from **") + (message.author.tag) + ":\n```" + (mentionMessage) + "```")
//    var embed = new Discord.MessageEmbed()
//        .setTitle(`:envelope: Your mail has been sent to: :envelope:`)
//        .setDescription(`${mention}`)
//        .addField(invisible, field)
//        .setColor("#f5980c")
//    message.channel.send(embed)
//    console.log(`✉️ ${message.author.tag} used Mail`)
//  }

  if (msg.startsWith (prefix + "pelpinobambino")){
    if (mention == null) { return; }
    var embed = new Discord.MessageEmbed()
        .setTitle(`:wave: Bien le bonjour :wave:`)
        .setDescription(`${mention}!`)
        .setColor("#f5980c")
        .addField(":exclamation: Disclamer:", "Ce message est automatisé.")
        .addField(":date: Depuis quelques jours, le dungeon bot a beaucoup improuvé, et moi aussi", "Il y a une semaine, je ne savais pas comment ignorer les majuscules, et maintenant je suis la avec des menus customisés et un système de mp.")
        .addField(":envelope: Nouvelle importante:", "Le bot va passer en 0.1, c'est a dire en beta! Cela veut dire que maintenant, le bot a au moins quelques commandes finies et qu'il n'y a aucun risque de se faire hack si vous ajoutez ce bot a votre serveur. Je ne le reccomande pas encore car le bot est très peu en ligne car je ne l'héberge pas encore, mais c'est dans les plans!")
        .setImage("https://cdn.discordapp.com/attachments/746432034054078635/747555898876100628/hiderdungeon.png")
        .setFooter(footer)
    mention.send(embed)
    var embed = new Discord.MessageEmbed()
        .setTitle(`:envelope: Your mail has been sent to: :envelope:`)
        .setDescription(`${mention}`)
        .addField(invisible, field)
        .setColor("#f5980c")
    message.channel.send(embed)
    console.log(`✉️ ${message.author.tag} used Mail`)
  }

    });
