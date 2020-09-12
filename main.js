const Discord = require('discord.js');
const Tesseract = require('tesseract.js')
const dclient = new Discord.Client();
const config = require("./config.json");
const cringe = require("./cringe_check.js");

async function ocr(message) {
    console.log(message);

    var url;

    if (message.attachments.size > 0) {
        url = message.attachments.first().url;
        console.log(url)
    } else if (message.embeds.length > 0) {
        url = message.embeds[0].url;
        console.log(url)
    } else {
        message.channel.send("Please attach an image");
        return;
    }


    if (url.endsWith(".png") || url.endsWith(".jpg") || url.endsWith(".jfif") || url.endsWith(".jpeg") || url.endsWith(".bmp") || url.endsWith(".dib")) {
        var progressMsg = await message.channel.send("Connecting to API...");
        Tesseract.recognize(
            (url),
            'eng', {
                logger: m => {
                    console.log(m)
                    if (m.progress > 0 && m.progress < 1 && m.progress != 0.5)
                        progressMsg.edit("Processing... " + m.progress.toLocaleString(undefined, {
                            style: 'percent',
                            minimumFractionDigits: 2
                        }))
                }
            }
        ).then(({
            data: {
                text
            }
        }) => {
            console.log(text);
            progressMsg.delete()
            if (text.length > 0) {
                message.channel.send('``' + text + '``');
            } else message.channel.send('⚠️ No text found. ');
        });
    } else if (url.endsWith(".txt")) {

    } else {
        message.channel.send("File format is not supported");
    }
}

dclient.login(config.token); // login the bot with your token.
dclient.on('message', message => { // Checks for command
    if (message.member.user === dclient.user) {
        return;
    } { //universal commands
        if (config.allowedchannels.includes(message.channel.id)) {
            commands.parse(message);
        }
    } { //kirbbot testing commands
        if (message.channel.id == 730612157133226068) {
            commands.parse(message, 'test');
        }
    } { //ayymd botspam commands
        if (message.channel.id == 390225609550331924) {
            if ((message.content.toLowerCase() === 'ayy'))
                message.channel.send("md")
            if ((message.content.toLowerCase() === 'gayy'))
                message.channel.send("intelmao")
        }
    } { //verification
        if (message.channel.id == 752600769357807637) {
            if (message.content.toLowerCase().includes('testa' || 'testb'))
                message.channel.send("yes")
        }
    } { //ayymd universal commands
        if (['390225609550331924', '684038729291399220'].includes(message.channel.id)) {
            { //rule 7 part 1
                if (message.content.toLowerCase().includes('i like intel')) {
                    message.react('697801525925380096');
                } else if (message.content.toLowerCase().includes('i love intel')) {
                    message.react('697801525925380096');
                } else if (message.content.toLowerCase().includes('intel makes good')) {
                    message.react('697801525925380096');
                } else if (message.content.toLowerCase().includes('intel makes better')) {
                    message.react('697801525925380096');
                } else if (message.content.toLowerCase().includes('intel based')) {
                    message.react('697801525925380096');
                } else if (message.content.toLowerCase().includes('intel better')) {
                    message.react('697801525925380096');
                } else if (message.content.toLowerCase().includes('intel good')) {
                    message.react('697801525925380096');
                } else if (message.content.toLowerCase().includes('intel best')) {
                    message.react('697801525925380096');
                } else if (message.content.toLowerCase().includes('intel is based')) {
                    message.react('697801525925380096');
                } else if (message.content.toLowerCase().includes('intel is absolutely based')) {
                    message.react('697801525925380096');
                } else if (message.content.toLowerCase().includes('intel is better')) {
                    message.react('697801525925380096');
                } else if (message.content.toLowerCase().includes('intel is good')) {
                    message.react('697801525925380096');
                } else if (message.content.toLowerCase().includes('intel is best')) {
                    message.react('697801525925380096');
                } else if (message.content.toLowerCase().includes('buy intel')) {
                    message.react(cringe.check(message.content));
                } else if (message.content.toLowerCase().includes('buy an intel')) {
                    message.react(cringe.check(message.content));
                } else if (message.content.toLowerCase().includes('buy nvidia')) {
                    message.react(cringe.check(message.content));
                } else if (message.content.toLowerCase().includes('buy an nvidia')) {
                    message.react(cringe.check(message.content));
                } else if (message.content.toLowerCase().includes('intel is the best')) {
                    message.react('697801525925380096');
                } else if (message.content.toLowerCase().includes('intel makes the best')) {
                    message.react('697801525925380096');
                } else if (message.content.toLowerCase().includes('i like nvidia')) {
                    message.react('697801525925380096');
                } else if (message.content.toLowerCase().includes('i love nvidia')) {
                    message.react('697801525925380096');
                } else if (message.content.toLowerCase().includes('nvidia makes good')) {
                    message.react('697801525925380096');
                } else if (message.content.toLowerCase().includes('nvidia makes better')) {
                    message.react('697801525925380096');
                } else if (message.content.toLowerCase().includes('nvidia based')) {
                    message.react('697801525925380096');
                } else if (message.content.toLowerCase().includes('nvidia good')) {
                    message.react('697801525925380096');
                } else if (message.content.toLowerCase().includes('nvidia better')) {
                    message.react('697801525925380096');
                } else if (message.content.toLowerCase().includes('nvidia best')) {
                    message.react('697801525925380096');
                } else if (message.content.toLowerCase().includes('nvidia is based')) {
                    message.react('697801525925380096');
                } else if (message.content.toLowerCase().includes('nvidia is absolutely based')) {
                    message.react('697801525925380096');
                } else if (message.content.toLowerCase().includes('nvidia is good')) {
                    message.react('697801525925380096');
                } else if (message.content.toLowerCase().includes('nvidia is better')) {
                    message.react('697801525925380096');
                } else if (message.content.toLowerCase().includes('nvidia is best')) {
                    message.react('697801525925380096');
                } else if (message.content.toLowerCase().includes('nvidia is the best')) {
                    message.react('697801525925380096');
                } else if (message.content.toLowerCase().includes('nvidia makes the best')) {
                    message.react('697801525925380096');
                } else if (message.content.toLowerCase().includes('amd bad')) {
                    message.react('697801525925380096');
                } else if (message.content.toLowerCase().includes('amd sucks')) {
                    message.react('697801525925380096');
                } else if (message.content.toLowerCase().includes('amd cringe')) {
                    message.react('697801525925380096');
                } else if (message.content.toLowerCase().includes('fuck amd')) {
                    message.react('697801525925380096');
                } else if (message.content.toLowerCase().includes('amd is bad')) {
                    message.react('697801525925380096');
                } else if (message.content.toLowerCase().includes('amd is cringe')) {
                    message.react('697801525925380096');
                } else if (message.content.toLowerCase().includes('amd is shit')) {
                    message.react('697801525925380096');
                } else if (message.content.toLowerCase().includes('amd shit')) {
                    message.react('697801525925380096');
                } else if (message.content.toLowerCase().includes('hate amd')) {
                    message.react('697801525925380096');
                } else if (message.content.toLowerCase().includes('amd gay')) {
                    message.react('697801525925380096');
                } else if (message.content.toLowerCase().includes('amd is gay')) {
                    message.react('697801525925380096');
                } else if ((message.content.toLowerCase() === 'politics')) {
                    message.react('687681502192205869');
                    message.react('707989757480665149');
                    message.react('697801525925380096');
                    message.react('692446527796281354');
                }
            } { //rule 7 part 2
                if (message.content.toLowerCase().includes('i like amd')) {
                    message.react('701869345072218113');
                } else if (message.content.toLowerCase().includes('i love amd')) {
                    message.react('701869345072218113');
                } else if (message.content.toLowerCase().includes('amd makes good')) {
                    message.react('701869345072218113');
                } else if (message.content.toLowerCase().includes('amd based')) {
                    message.react('701869345072218113');
                } else if (message.content.toLowerCase().includes('amd better')) {
                    message.react('701869345072218113');
                } else if (message.content.toLowerCase().includes('amd good')) {
                    message.react('701869345072218113');
                } else if (message.content.toLowerCase().includes('amd best')) {
                    message.react('701869345072218113');
                } else if (message.content.toLowerCase().includes('amd is based')) {
                    message.react('701869345072218113');
                } else if (message.content.toLowerCase().includes('amd is absolutely based')) {
                    message.react('701869345072218113');
                } else if (message.content.toLowerCase().includes('amd is better')) {
                    message.react('701869345072218113');
                } else if (message.content.toLowerCase().includes('amd is good')) {
                    message.react('701869345072218113');
                } else if (message.content.toLowerCase().includes('amd is best')) {
                    message.react('701869345072218113');
                } else if (message.content.toLowerCase().includes('buy amd')) {
                    cringecheck2(message)
                } else if (message.content.toLowerCase().includes('buy an amd')) {
                    cringecheck2(message)
                } else if (message.content.toLowerCase().includes('amd is the best')) {
                    message.react('701869345072218113');
                } else if (message.content.toLowerCase().includes('amd instead of intel')) {
                    message.react('701869345072218113');
                } else if (message.content.toLowerCase().includes('amd instead of shintel')) {
                    message.react('701869345072218113');
                } else if (message.content.toLowerCase().includes('amd makes the best')) {
                    message.react('701869345072218113');
                } else if (message.content.toLowerCase().includes('intel bad')) {
                    message.react('701869345072218113');
                } else if (message.content.toLowerCase().includes('intel sucks')) {
                    message.react('701869345072218113');
                } else if (message.content.toLowerCase().includes('intel cringe')) {
                    message.react('701869345072218113');
                } else if (message.content.toLowerCase().includes('fuck intel')) {
                    message.react('701869345072218113');
                } else if (message.content.toLowerCase().includes('intel is bad')) {
                    message.react('701869345072218113');
                } else if (message.content.toLowerCase().includes('intel is shit')) {
                    message.react('701869345072218113');
                } else if (message.content.toLowerCase().includes('intel shit')) {
                    message.react('701869345072218113');
                } else if (message.content.toLowerCase().includes('intel is cringe')) {
                    message.react('701869345072218113');
                } else if (message.content.toLowerCase().includes('hate intel')) {
                    message.react('701869345072218113');
                } else if (message.content.toLowerCase().includes('intel is gay')) {
                    message.react('701869345072218113');
                } else if (message.content.toLowerCase().includes('intel gay')) {
                    message.react('701869345072218113');
                } else if (message.content.toLowerCase().includes('nvidia bad')) {
                    message.react('701869345072218113');
                } else if (message.content.toLowerCase().includes('nvidia sucks')) {
                    message.react('701869345072218113');
                } else if (message.content.toLowerCase().includes('nvidia cringe')) {
                    message.react('701869345072218113');
                } else if (message.content.toLowerCase().includes('fuck nvidia')) {
                    message.react('701869345072218113');
                } else if (message.content.toLowerCase().includes('fuck you nvidia')) {
                    message.react('701869345072218113');
                } else if (message.content.toLowerCase().includes('nvidia is bad')) {
                    message.react('701869345072218113');
                } else if (message.content.toLowerCase().includes('nvidia is shit')) {
                    message.react('701869345072218113');
                } else if (message.content.toLowerCase().includes('nvidia shit')) {
                    message.react('701869345072218113');
                } else if (message.content.toLowerCase().includes('nvidia is cringe')) {
                    message.react('701869345072218113');
                } else if (message.content.toLowerCase().includes('hate nvidia')) {
                    message.react('701869345072218113');
                } else if (message.content.toLowerCase().includes('nvidia is gay')) {
                    message.react('701869345072218113');
                } else if (message.content.toLowerCase().includes('nvidia gay')) {
                    message.react('701869345072218113');
                }
            }
        }
    } { //works in every channel
        if ((message.content.toLowerCase() === 'good bot')) {
            message.react('606156336203300866');
        }
        if (message.content.toLowerCase().includes('nigger'))
            message.channel.send("https://media.discordapp.net/attachments/724731046372966420/730209353784885358/Bad_word.gif")
    }
});
