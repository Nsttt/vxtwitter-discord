const Discord = require("discord.js");
require("dotenv").config();
const client = new Discord.Client();

client.on("ready", () => {
  console.log(`Logged`);
});

client.on("message", (msg) => {
  const filter = (reaction, user) => {
    return reaction.emoji.name === "🐦" && user.id === msg.author.id;
  };

  const collector = msg.createReactionCollector(filter, { time: 15000 });

  collector.on("collect", (reaction, user) => {});

  if (msg.content.startsWith("https://twitter.com/")) {
    const url = new URL(msg);
    url.hostname = "fxtwitter.com";

    msg.react("🐦");

    msg
      .awaitReactions(filter, { max: 1, time: 60000, errors: ["time"] })
      .then(() => {
        msg.delete({ timeout: "1000" });
        msg.channel.send(url.href);
      });
  }
});

client.login(process.env.TOKEN);
