const {Client,
	Attachment
} = require('discord.js'); //do 'npm install discord.js' please refer to README.txt
const bot = new Client();

const cheerio = require('cheerio'); //do 'npm install cheerio --save' in your terminal or command line to install this feature. Refer to README.txt


const request = require('request'); //do 'npm install request -save' to install this. Refer to README.txt

const token = 'YOUR TOKEN HERE'; //change this to your bot's token

const PREFIX = '$'; //change this to whatever you want

var version = '1.0';

bot.on('ready', () =>{
	console.log('this bot is online');
	bot.user.setActivity('');
})

bot.on('message', msg=>{

	let args = msg.content.substring(PREFIX.length).split(" ");

	switch(args[0]){
		case 'cursed': //change the 'cursed to whatever you want'
        image(msg);

        break;
	case 'discord': //you can change 'discord' to whatever you please.
		msg.reply('here is the official coderbot server https://discord.gg/rtjbdHu') //this is my discord link if you want to join.
		break;
	case 'help': //you can also change the 'help' to whatever you please and the output which is below this text.
		msg.reply('bro you should know this but anyway here are all the commands: ```cursed```, ```discord```, ```help```, and ```invite```')
		break;
	case 'invite': //you can also change 'invite' to whatever you want your bot to do and the link here but this is my "coderbot's" link if you want to invite it.
		msg.reply('here invite me to your server https://discordapp.com/oauth2/authorize?client_id=719920504806309948&scope=bot&permissions=2146958847')
		break;
		}


});

function image(msg){

    var options = {
        url: "http://results.dogpile.com/serp?qc=images&q=" + "minecraft cursed images", //change the 'minecraft cursed images' to whatever you want
        method: "GET",
        headers: {
            "Accept": "text/html",
            "User-Agent": "Chrome"
        }
    };





    request(options, function(error, response, responseBody) {
        if (error) {
            return;
        }


        $ = cheerio.load(responseBody);


        var links = $(".image a.link");

        var urls = new Array(links.length).fill(0).map((v, i) => links.eq(i).attr("href"));

        console.log(urls);

        if (!urls.length) {

            return;
        }

        // Send resul
        msg.channel.send( urls[Math.floor(Math.random() * urls.length)]);
    });








}

bot.login(token); //don't change this param change the 'YOUR TOKEN HERE' on line 11
