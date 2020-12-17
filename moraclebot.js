// Run dotenv
require('dotenv').config();

// load required libraries
const Discord = require('discord.js');

// Create a new bot object
const myBot = new Discord.Client();

myBot.login(process.env.DISCORD_TOKEN);

// The onReady even handler. Will get executed only once.
myBot.on('ready', function () {
    console.log(`${myBot.user.username} online!`);
});

// Loading global variables
const greeting = "Welcome travelers!\nYou have found the hallowed hall of the Movie Oracle.\nThis months movie will be.....\n  ";
const movieResponse = ["Crimson Peak", "Nightcrawler", "Sorry to Bother You", "Annihilation", "Eraserhead", "Suspiria", "The Thing", "Taxi Driver"]

// The onMessage event handler
myBot.on('message', function (message) {
    // It is considered bad practice to let your bot react to other bots.
    if (message.author.bot) return;

    // If a message doesn't start with your bot's prefix, don't bother going through the cases.
    if (!message.content.startsWith("!")) return;

    // Args length check. #1 is the command, #2 and higher are the arguments
    var args = message.content.substring("!".length).split(" ");

    switch (args[0].toLowerCase()) {
        case "moracle":
            message.channel.send(greeting).then().catch(console.error);
            setTimeout(function(){
                var response = movieResponse[Math.floor(Math.random()*movieResponse .length)];
                var formatResponse = `*** ${response}!***`;
                message.channel.send(formatResponse).then().catch(console.error);
            }, 3500);
            break;
        default:
            break;
    }
});
