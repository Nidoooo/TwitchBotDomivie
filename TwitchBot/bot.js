const tmi = require('tmi.js');
const fs = require('fs');
const config = JSON.parse(fs.readFileSync('config.json', 'utf8'))
const plan = JSON.parse(fs.readFileSync('plan.json'))

const options = {
	options: { 
        debug: true,
    },
    connection: {
	    cluster: true,
		reconnect: true
	},
	identity: {
		username: "DomivieBot",
		password:  "[API SCHLÜSSEL]",
	},
	channels: ['nidoo']
};
const client = new tmi.client(options)

client.connect();

client.on('connected', (address, port) => {
	client.action('domivielive',' ');
	setInterval(() => {
	  client.say('domivielive', 'Domivie ist ein Streamer/Youtuber. Ihr Könnt mit den Commands !dc, !yt und !twitter seine weiteren Sozialen  Medien anzeigen lassen. ')
	}, 3600000); // 3600000 == 60 Minuten
});

//Variablen

client.on('message', (channel, userstate, message, self) => {
	if(self) return;
	if(message.toLowerCase() === '!twitch') {
		client.say(channel, `@${userstate.username}, Ernsthaft du bis auf Twitch SeemsGood`)
	}
});

client.on('message', (channel, userstate, message, self) => {
	if(self) return;
	if(message.toLowerCase() === '!domivie') {
		client.say(channel,'Domivie ist ein Streamer/Youtuber. Ihr Könnt mit den Commands !dc, !yt und !twitter seine weiteren Sozialen  Medien anzeigen lassen. ')
	}
});

client.on('message', (channel, userstate, message, self) => {
	if(self) return;
	if(message.toLowerCase() === '!ra') {
		client.say(channel,`@${userstate.username}, hier findest du die Liste meiner abgeschlossenen und noch offenen Retro-Achievements; https://retroachievements.org/user/domivie  `)
	}
});

client.on('message', (channel, userstate, message, self) => {
	if(self) return;
	if(message.toLowerCase() === '!fail') {
		client.say(channel,'FailFish FailFish Domivie - Seal of Quality Fails! FailFish FailFish')
	}
});

client.on('message', (channel, userstate, message, self) => {
	if(self) return;
	if(message.toLowerCase() === '!team') {
		client.say(channel,`@${userstate.username}, Das Team Besteht aus dem 🎬Chef🎥 Domivie.Und den 🧰Moderatoren🧰 Cookie,Whitey und Nidoo (aka die Drei Muskeltiere) `)
	}
});

client.on('message', (channel, userstate, message, self) => {
	if(self) return;
	if(message.toLowerCase() === '!commands') {
		client.say(channel,' Die Commandlist✏️:     ')
	}
});

client.on('message', (channel, userstate, message, self) => {
	if(self) return;
	if(message.toLowerCase() === '!yt') {
		client.say(channel,'🎥Meine Youtube Kanäle: YouTube: https://www.youtube.com/channel/UCCc5zI4-oIUGx4KZGLJf1DQ  YouTubeGaming: "https://www.youtube.com/channel/UCZxxL1UJWngzJ1Ez9fW1JPQ"🎥')
	}
});

client.on('message', (channel, userstate, message, self) => {
	if(self) return;
	if(message.toLowerCase() === '!twitter') {
		client.say(channel, `@${userstate.username} folge mir doch hier: https://twitter.com/Domivie1996 um auf dem Aktuellsten Stand zu bleiben :)  `)
	}
});

client.on('message', (channel, userstate, message, self) => {
	if(self) return;
	if(message.toLowerCase() === '!dc') {
		client.say(channel,'📀Werde Mitglied auf meinem Discord Server📀: https://discord.gg/Nhh2YT4  ')
	}
});

client.on('message', (channel, userstate, message, self) => {
	if(self) return;
	if(message.toLowerCase() === '!plan') {
		client.say(channel, "📅Streamplan,Woche 33📅")
		client.say(channel, plan.FREITAG )
		client.say(channel, plan.SAMSTAG )
		client.say(channel, "[Rest der Woche] Frei 🌞")
	}
});

client.on('message', (channel, userstate, message, self) => {
	if(self) return;
	if(message.toLowerCase() === '!game') {
		client.say(channel, plan.GAME)
	}
});

client.on('message', (channel, userstate, message, self) => {
	if(self) return;
	if(message.toLowerCase() === '!infovideo') {
		client.say(channel, `@${userstate.username} das Infovideo gibt es hier https://www.youtube.com/watch?v=UWgDW-kfwbY wäre gut wenn du es dir anschauen würdes :)`)
	}
});

client.on('message', (channel, userstate, message, self) => {
	if(self) return;
	if(message.toLowerCase() === '!chip') {
		client.say(channel, `@${userstate.username} gönnt sich ein DoritosChip `)
	}
});

client.on('message', (channel, userstate, message, self) => {
	if(self) return;
	if(message.toLowerCase() === '!fish') {
		client.say(channel, `@${userstate.username} gönnt sich ein SabaPing `)
	}
});

client.on('message', (channel, userstate, message, self) => {
	if(self) return;
	if(message.toLowerCase() === '!cookie') {
		client.say(channel, `@${userstate.username} gönnt sich ein NomNom `)
	}
});

client.on('message', (channel, userstate, message, self) => {
	if(self) return;
	if(message.toLowerCase() === '!popcorn') {
		client.say(channel, `@${userstate.username} gönnt sich PopCorn `)
	}
});

client.on('message', (channel, userstate, message, self) => {
	if(self) return;
	if(message.toLowerCase() === '!turnier') {
		client.say(channel, `Der MarioKart8 Deluxe Turnier-Code: 2533-1956-6891`)
	}
});

client.on('message', (channel, userstate, message, self) => {
	if(self) return;
	if(message.toLowerCase() === '!fc') {
		client.say(channel, `Mein Freundes Code von der Switch: SW-7457-2838-3681`)
	}
});

client.on('message', (channel, userstate, message, self) => {
	if(self) return;
	if(message.toLowerCase() === '!cooldude') {
		client.say(channel,`B) B) B) B) B)`)
	}
});

client.on('message', (channel, userstate, message, self) => {
	if(self) return;
	if(message.toLowerCase() === '!coolmusic') {
		client.say(channel,`SingsNote SingsNote SingsNote SingsNote SingsNote`)
	}
});

client.on('message', (channel, userstate, message, self) => {
	if(self) return;
	if(message.toLowerCase() === '!herrlich') {
		client.say(channel,`Herrrlich! Herrrlich!`)
	}
});

client.on('message', (channel, userstate, message, self) => {
	if(self) return;
	if(message.toLowerCase() === '!sad') {
		client.say(channel,`BibleThump BibleThump BibleThump BibleThump BibleThump`)
	}
});

client.on('message', (channel, userstate, message, self) => {
	if(self) return;
	if(message.toLowerCase() === '!salt') {
		client.say(channel,`PJSalt PJSalt PJSalt PJSalt PJSalt`)
	}
});

client.on('message', (channel, userstate, message, self) => {
	if(self) return;
	if(message.toLowerCase() === '!sugar') {
		client.say(channel,`PJSugar PJSugar PJSugar PJSugar PJSugar`)
	}
});

client.on('message', (channel, userstate, message, self) => {
	if(self) return;
	if(message.toLowerCase() === '!troll') {
		client.say(channel,`Kappa Kappa Kappa Kappa Kappa`)
	}
});

client.on('message', (channel, userstate, message, self) => {
	if(self) return;
	if(message.toLowerCase() === '!unfair') {
		client.say(channel,`NotLikeThis NotLikeThis NotLikeThis NotLikeThis NotLikeThis`)
	}
});


client.on('message', (channel, userstate, message, self) => {
	if(self) return;
	if(message.toLowerCase() === message) {
		client.say(channel, Glück[Math.floor(Math.random() * Glück.length)]);
	}
});

client.on('message', (channel, userstate, message, self) => {
	if(self) return;
	if(message.toLowerCase() === 'Abonniere Domivie auf YT LUL') {
		client.say(channel,`@${userstate.username} ich mag dich <3`)
	}
});