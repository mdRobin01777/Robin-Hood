const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: 'Robin Hood',
    description: 'This is Robin Hood music bot',
    execute(message, args) {
        const youtubeLink = 'https://www.youtube.com/@jokergametube2908';
        const Facebook = 'https://www.facebook.com/M.a.robin112/';
        const embed = new EmbedBuilder()
            .setColor('#FFFFFF')
            .setTitle(' 🫅 Owner Info')
            .setDescription(`__**About me**__:\n 🤖 Myself Robin Hood. I am a discord bot developer and web developer. I love playing games, watching anime and building different webserver applications. You will get faster replies on instagram than other social media. Feel free to contact me!\n ❤️ [GlceYT](${youtubeLink})\n 💙 [GlaceYTT](${InstagramLink})`)
            .setTimestamp();


        message.reply({ embeds: [embed] });
    },
};

/*

   MADE BY Robin Hood!! FEEL FREE TO USE ANY PART OF CODE

*/
