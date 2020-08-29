const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require("fs");
const config = require('./config.json');


var prefix = ("*")
var footer = ("Dungeons Bot by IceGod#7002 | Tout droits réservés")
var invisible = (" 󠇰󠇰  ")

longcode = require("./longcode");

client.login(config.token);

client.on('ready', function() {
    client.user.setStatus("idle")
    client.user.setActivity("Skyblock Dungeons")
    console.log(`💾 longcode.js is working!`);
});
  
  client.on('message', message => {
    
    msg = message.content.toLowerCase();
    mention = message.mentions.users.first();
    field = (`:arrow_right: Command requested by <@${message.author.id}>`)

    if(message.author.bot) return;

    if (msg.startsWith (prefix + "starter")){
      if (message.channel.type === 'dm') return;
      if (message.guild.me.hasPermission("MANAGE_MESSAGES")){
            message.delete();
          }
        var embed = new Discord.MessageEmbed()
        .setTitle(":test_tube: How to start out in dungeons :test_tube:  **1/6**")
        .setDescription(" 󠇰󠇰  ")
        .setColor("#f5980c")
        .addField(":thinking: So you want to start out in dungeons?", "In this guide I will show you how to start out from not even being able to do the entrance floor to be able to beat the last floor! This guide will gradually upgrade as the new floors come out.")
        .addField(":warning: Disclamer!", "This guide applies the most if you are currently in unstable and can work if you're in strong. People in ender armor (To early) and people with Superior armor should definitely look somewhere else.")
        .addField(":speaking_head: How will this work:", "Below every message, there will be a little arrow that leads you to the other page. If you missclick the arrow without wanting to, please redo the *starter command.")
        .addField(invisible, field)
        .setFooter(footer)
        message.channel.send(embed).then(embed => {
        embed.react("➡️");
        console.log(`🧪 ${message.author.tag} used Starter [1]`)
        const filter = (reaction, user) => {
          return ['➡️'].includes(reaction.emoji.name) && user.id === message.author.id;
        };
      
        embed.awaitReactions(filter, { max: 1, time: 600000, errors: ['time'] })
        .then(collected => {
        const reaction = collected.first();

        if (reaction.emoji.name === '➡️'){
        {
        var embed = new Discord.MessageEmbed()
        .setTitle(":test_tube: When and How to Start? (Entrance) :test_tube: **2/6**")
        .setDescription(" 󠇰󠇰  ")
        .setColor("#f5980c")
        .addField(":thinking: What class should I pick?" , "I really recommend running Archer, but getting Berserker gear for the first floor. This class does not require additional stuff to buy, just to stuff you are supposed to buy for the normal game progress.")
        .addField(`:crossed_swords: What gear should I get?`, `You should ATLEAST get a unstable set and a AOTD, and strong dragon is recommended. For the bow, get a magma bow. For a pet, get a common enderman. **COMMON MISTAKE:** people tend to get a uncommon or rare enderman. They are worse.`)
        .addField(":skull: Still not able to do it?", "Remember. Stay with your teammates and get the max amount of blessings. And don't forget to do all fairy souls if that's not already done for some reason.")
        .addField(":smiling_imp: Boss Strat:", "For the watcher, take the mobs one by one with your entire team.")
        .addField(invisible, `:arrow_right: Command requested by <@${message.author.id}>`)
        .setFooter(footer)
        message.channel.send(embed).then(embed => {
        embed.react("➡️");
        console.log(`🧪 ${message.author.tag} used Starter [2]`)
        const filter = (reaction, user) => {
          return ['➡️'].includes(reaction.emoji.name) && user.id === message.author.id;
        };

        embed.awaitReactions(filter, { max: 1, time: 600000, errors: ['time'] })
        .then(collected => {
        const reaction = collected.first();

        if (reaction.emoji.name === '➡️'){

        var embed = new Discord.MessageEmbed()
        .setTitle(":test_tube: How to beat bonzo? :test_tube: **3/6**")
        .setDescription(" 󠇰󠇰  ")
        .setColor("#f5980c")
        .addField(":thinking: Should I stay Archer?", "Yes! Archer is the current best class to skip all the floors and get to floor 4. Don't worry, you will be able to be mage or other later on.")
        .addField(":crossed_swords: Gear Requierements:", "The gear needed in floor 1 is basically the same as the entrance, but now, strong dragon is the only option. If you still had unstable, well you need strong now! The AOTD, magma bow and enderman pet are still the lowest priced items.")
        .addField(":skull: Still dying again and again?", "Don't forget to place your radiant power orb when you are at short range! You can buy an uncommon tiger to have a slight strenght boost.")
        .addField(":smiling_imp: Boss Strat:", "When bonzo is in his mage form, just kill him really quick. When he gets in his clown form, hide behind the pillars while he shoots balloons and attack when not.")
        .addField(invisible, `:arrow_right: Command requested by <@${message.author.id}>`)
        .setFooter(footer)
        message.channel.send(embed).then(embed => {
        embed.react("➡️");
        console.log(`🧪 ${message.author.tag} used Starter [3]`)
        const filter = (reaction, user) => {
        return ['➡️'].includes(reaction.emoji.name) && user.id === message.author.id;
        };

        embed.awaitReactions(filter, { max: 1, time: 600000, errors: ['time'] })
        .then(collected => {
        const reaction = collected.first();

        if (reaction.emoji.name === '➡️'){

        var embed = new Discord.MessageEmbed()
        .setTitle(":test_tube: Beating Scarf :test_tube: **4/6**")
        .setDescription(" 󠇰󠇰  ")
        .setColor("#f5980c")
        .addField(":thinking: Do I still need to be Archer?", "Not anymore, you need to be mage! Mage is the best class in the game, but we didn't use it in floor 0-1 cause there was not enough affordable mage weapons.")
        .addField(":crossed_swords: Mage gear needed:", "You don't need a sword anymore, but you need a Bonzo Staff! For the armor, the best choice is 3/4 Wise armor with Dark goggles. The best pet is a legendary sheep, but that is very expensive so if you are not going for mage as a main grinding class in the future, buy an epic sheep.")
        .addField(":skull: Getting memed by the mobs?", "Buy a mana flux or an ornate zombie sword! When you are low, they will instantly heal you.")
        .addField(":smiling_imp: Boss Strat:", 'Target the priest in both rounds, because he can revive the other 3 "mini-bosses"')
        .addField(invisible, `:arrow_right: Command requested by <@${message.author.id}>`)
        .setFooter(footer)
        message.channel.send(embed).then(embed => {
        embed.react("➡️");
        console.log(`🧪 ${message.author.tag} used Starter [4]`)
        const filter = (reaction, user) => {
          return ['➡️'].includes(reaction.emoji.name) && user.id === message.author.id;
        };

        embed.awaitReactions(filter, { max: 1, time: 600000, errors: ['time'] })
        .then(collected => {
        const reaction = collected.first();

        if (reaction.emoji.name === '➡️'){

        var embed = new Discord.MessageEmbed()
        .setTitle(":test_tube: Defeating the Professor :test_tube: **5/6**")
        .setDescription(" 󠇰󠇰  ")
        .setColor("#f5980c")
        .addField(":thinking: Is mage still good?", "It is, and it will still be for all the floors. If you want absolutely to change classes, wait till the last floor.")
        .addField(":crossed_swords: Mage gear needed:", "A bonzo staff, 3/4 wise with dark goggles and a legendary sheep pet is still the best! A mana flux now is really important because it is getting harder and harder.")
        .addField(":skull: Really can't do it?", "There is really no tip other then not forget to aote away when low! The floor 3 is one the hardest floor to first clear.")
        .addField(":smiling_imp: Boss Strat:", 'Put one member of your squad on each guardian, and put your last teammate on the reinforced guardian.')
        .addField(invisible, `:arrow_right: Command requested by <@${message.author.id}>`)
        .setFooter(footer)
        message.channel.send(embed).then(embed => {
        embed.react("➡️");
        console.log(`🧪 ${message.author.tag} used Starter [5]`)
        const filter = (reaction, user) => {
          return ['➡️'].includes(reaction.emoji.name) && user.id === message.author.id;
        };

        embed.awaitReactions(filter, { max: 1, time: 600000, errors: ['time'] })
        .then(collected => {
        const reaction = collected.first();

        if (reaction.emoji.name === '➡️'){

        var embed = new Discord.MessageEmbed()
        .setTitle(":test_tube: Killing Thorn :test_tube: **6/6**")
        .setDescription(" 󠇰󠇰  ")
        .setColor("#f5980c")
        .addField(":thinking: Do I still need to run mage?", "No, but it is strongly reccomended, and this guide will always cover the best way possible. (Currently mage.)")
        .addField(":crossed_swords: Mage gear needed:", "A spirit sceptre, 3/4 adaptive with shadow goggles and a legendary sheep. A bonzo staff is ok for starting, but you should really get a spirit sceptre.")
        .addField(":skull: Really can't do it?", "Try dodging the withermancers because they have 90% magic resistance.")
        .addField(":smiling_imp: Boss Strat:", 'Put a decoy on the balcony for the bats to target it, and let someone with tiger shoot the boss for the double damage glitch.')
        .addField(invisible, `:arrow_right: Command requested by <@${message.author.id}>`)
        .setFooter(footer)
        message.channel.send(embed)
        console.log(`🧪 ${message.author.tag} used Starter [6]`)
        }})})}})})}})})}})})}}})
        .catch(collected => {
          message.reply("**You didn't click in time! Your session expired.** :dvd:")
          console.log(`🧪 ${message.author.tag} closed Starter [1]`)
        });
        });
}



    if (msg.startsWith (prefix + "class")){
      if (message.channel.type === 'dm') return;
      if (message.guild.me.hasPermission("MANAGE_MESSAGES")){
            message.delete();
          }
        var embed = new Discord.MessageEmbed()
            .setTitle(":arrow_down_small: Please Select your Class by putting a reaction :arrow_down_small:")
            .setDescription(" 󠇰󠇰  ")
            .setColor("#f5980c")
            .addField("Mage   🧙‍♂️" , " ￶ ￶")
            .addField("Berserker   ⚔️", " ￶ ￶￶")
            .addField("Tank   🛡️", " ￶ ￶")
            .addField("Healer   ⚗️", " ￶ ￶")
            .addField("Archer   🏹", " ￶ ￶")
            .addField(invisible, field)
            .setFooter(footer)
        message.channel.send(embed).then(embed => {
          embed.react("🧙‍♂️");
          embed.react("⚔️");
          embed.react("🛡️");
          embed.react("⚗️");
          embed.react("🏹");
          console.log(`🔮 ${message.author.tag} used Classhelp [1]`)
          const filter = (reaction, user) => {
            return ['🧙‍♂️', '⚔️', '🛡️', '⚗️', '🏹'].includes(reaction.emoji.name) && user.id === message.author.id;
          };
          
          embed.awaitReactions(filter, { max: 1, time: 20000, errors: ['time'] })
            .then(collected => {
              const reaction = collected.first();
          
              if (reaction.emoji.name === '🧙‍♂️') {
                {
                  var embed = new Discord.MessageEmbed()
                      .setTitle(":man_mage: THE MAGE CLASS :man_mage:")
                      .setDescription(" 󠇰󠇰  ")
                      .setColor("#f5980c")
                      .addField("Weapons: ⚔️" , "Spirit Sceptre is a good main weapon and Ice Spray Wand is a good second weapon. If you can't afford them, Bonzo staff and voodoo doll are the best ones.￶")
                      .addField("Armor: 🛡️", "Wise and Young dragon armor with 5 dungeon stars is the best, but if you are not Catacombs level 25/28, use 3/4 Adaptive or Zombie Soldier with Dark goggles.")
                      .addField("Pet: 🐶", "The only option for mage pets is Sheep. The intelligence boost and the mana cost reduction makes it by far the best pet.￶")
                      .addField("Reforges: ⚒️", "Put Heroic on Weapons, Necrotic on 3/4 armor and Loving on chestplate and Bizzare on all your talismans.")
                      .addField(invisible, `:arrow_right: Command requested by <@${message.author.id}>`)
                      .setFooter(footer)
                      .setImage("https://cdn.discordapp.com/attachments/746469713214963893/746469772018843718/Mage.png")
                      .setThumbnail('https://cdn.discordapp.com/attachments/746469713214963893/746470218720608296/Mage_Icon.png')
                  message.channel.send(embed)
                    console.log(`🔮 ${message.author.tag} used Classhelp [2-1]`)
              }
              
              }
              if (reaction.emoji.name === '⚔️') {
                {
                  var embed = new Discord.MessageEmbed()
                      .setTitle(":crossed_swords: THE BERSERKER CLASS :crossed_swords:")
                      .setDescription(" 󠇰󠇰  ")
                      .setColor("#f5980c")
                      .addField("Weapons: ⚔️" , "The Silent Death and The spirit Sword are the best options. The spirit sceptre is a good side weapon.￶")
                      .addField("Armor: 🛡️", "Strong Dragon armor with 5 stars is the best set, But a good set when not level 28 is full adaptive.")
                      .addField("Pet: 🐶", "Ender Dragon is the best option. Wither Skeleton and Tiger are really good too.￶")
                      .addField("Reforges: ⚒️", "For the berserker reforges, just use talisman optimizer.")
                      .addField(invisible, `:arrow_right: Command requested by <@${message.author.id}>`)
                      .setFooter(footer)
                      .setImage("https://cdn.discordapp.com/attachments/746469713214963893/746535602509578280/Berserker.png")
                      .setThumbnail('https://cdn.discordapp.com/attachments/746469713214963893/746535737595527208/Berserker_Icon.png')
                  message.channel.send(embed)
                    console.log(`🔮 ${message.author.tag} used Classhelp [2-2]`)
              }
              }
              if (reaction.emoji.name === '🛡️') {
                {
                  var embed = new Discord.MessageEmbed()
                      .setTitle(":shield: THE TANK CLASS :shield:")
                      .setDescription(" 󠇰󠇰  ")
                      .setColor("#f5980c")
                      .addField("Weapons: ⚔️" , "You can use the silent death or the Spirit Sceptre, depens if u want to be melee or ranged oriented tank￶")
                      .addField("Armor: 🛡️", "Put the highest tier of Perfect armor that you can put on (Starting at tier 8) and if u are lower then catacombs 19 put adaptive armor.")
                      .addField("Pet: 🐶", "The Turtle pet and Blue Whale pet are the only 2 good pets for tank. ")
                      .addField("Reforges: ⚒️", "Fierce is the best reforge for more EHP.")
                      .addField(invisible, `:arrow_right: Command requested by <@${message.author.id}>`)
                      .setFooter(footer)
                      .setImage("https://cdn.discordapp.com/attachments/746469713214963893/746583973710397490/Tank.png")
                      .setThumbnail('https://cdn.discordapp.com/attachments/746469713214963893/746584067713007652/Tank_Icon.png')
                  message.channel.send(embed)
                    console.log(`🔮 ${message.author.tag} used Classhelp [2-3]`)
                }
              }
              if (reaction.emoji.name === '⚗️') {
                {
                  var embed = new Discord.MessageEmbed()
                      .setTitle(":alembic: THE HEALER CLASS :alembic:")
                      .setDescription(" 󠇰󠇰  ")
                      .setColor("#f5980c")
                      .addField("Weapons: ⚔️" , "The Spirit Sceptre is the best healer weapon. The silent death is not an option as in the 4 MAGES 1 HEALER strat, the healer plays as a mage.")
                      .addField("Armor: 🛡️", "3/4 Adaptive with Mender Fedora is the only option right now. You can use mender helmet if you are starting in dungeons, but switch at floor 3.")
                      .addField("Pet: 🐶", "The Jellyfish pet is the only good option. If you can't afford one, just take whatever pet you have.")
                      .addField("Reforges: ⚒️", "Bizzare is the best as a healer plays mage.")
                      .addField(invisible, `:arrow_right: Command requested by <@${message.author.id}>`)
                      .setFooter(footer)
                      .setImage("https://cdn.discordapp.com/attachments/746469713214963893/746586137518407730/Healer.png")
                      .setThumbnail('https://cdn.discordapp.com/attachments/746469713214963893/746586283568005210/Healer_Icon.png')
                  message.channel.send(embed)
                    console.log(`🔮 ${message.author.tag} used Classhelp [2-4]`)
                }
              }
              if (reaction.emoji.name === '🏹') {
                {
                  var embed = new Discord.MessageEmbed()
                      .setTitle(":bow_and_arrow: THE ARCHER CLASS :bow_and_arrow:")
                      .setDescription(" 󠇰󠇰  ")
                      .setColor("#f5980c")
                      .addField("Weapons: ⚔️" , "The spirit bow is the best one. For starters, Magma Bow is good.")
                      .addField("Armor: 🛡️", "The Skeleton Master is the best set. You can use skeleton Soldier if you are starting out.")
                      .addField("Pet: 🐶", "Skeleton Pet is really good.")
                      .addField("Reforges: ⚒️", "As berserker, Use the talisman Optimizer.")
                      .addField(invisible, `:arrow_right: Command requested by <@${message.author.id}>`)
                      .setFooter(footer)
                      .setImage("https://cdn.discordapp.com/attachments/746469713214963893/746587926544121897/Archer.png")
                      .setThumbnail('https://cdn.discordapp.com/attachments/746469713214963893/746588016822452244/Archer_Icon.png')
                  message.channel.send(embed)
                    console.log(`🔮 ${message.author.tag} used Classhelp [2-5]`)
                }
              }
            })
            .catch(collected => {
              message.reply("**You didn't click in time! Your session expired.** :dvd:")
              console.log(`🔮 ${message.author.tag} closed Classhelp [1]`)
            });
        });
    }



});
