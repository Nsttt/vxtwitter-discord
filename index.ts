import "dotenv/config";

import { Client, Events, IntentsBitField } from "discord.js";

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ],
});

const urlRegex =
  /https?:\/\/(www\.)?(twitter\.com|x\.com)([a-zA-Z0-9/:%._\+~#?&//=]*)/g;

client.once(Events.ClientReady, (c) =>
  console.log(`Ready! Logged in as ${c.user.tag}`)
);

client.on("messageCreate", async (message) => {
  if (message.author.bot) return;

  if (!message.content.match(urlRegex)) {
    console.warn("No twitter links found");
    return;
  }

  const alteredMessage = message.content.replace(
    urlRegex,
    (_match, _p1, _p2, p3) => `https://vxtwitter.com${p3}`
  );

  if (alteredMessage === message.content) {
    console.warn("No changes made to message");
    return;
  }

  console.log(`Original Message: ${message.content}`);
  console.log(`New Message: ${alteredMessage}`);

  await message.channel.send(alteredMessage);
});

client.on("error", (e) => {
  console.error(e);
});

client.login(process.env.DISCORD_TOKEN);
