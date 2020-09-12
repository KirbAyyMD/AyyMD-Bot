const test_commands = [
    ['a!ctoast', function(msg) {
        msg.channel.send("are you tired of burning your toast? does it always ruin the morning? do you constantly have to get new toast because of the toast burning? well with the all new ctoast toaster you will never burn your toast again you use it just like a regular toaster you put your toast in put it down and set your heat you can toast up to 2 pieces of toast at once and you can see the toast toasting from either side through the tempered glass windows and with all these features in one toaster it will ensure that you get the perfect toast every time it can be yours for only $79.99 yes you hear that right only $79.99 you can pick it up at your local appliance dealer or on amazon for only $79.99 you can also order it from us and get a complimentary loaf of bread call 1800-1-ctoast once again that is 1800-128-6278 and it can be yours for only $79.99");
    }],
    ['a!quaaludes', function(msg) {
        msg.channel.send("Ey, the big man's baca! www dot the kid from brooklyn dot com. Ever see them signs on a highway billboards years ago? I'd walk a mile for a camel. Or they used to have cigarette commercials, the guy used to say, I'd walk a mile for a camel.? Well, let me tell all you young people out there: The big man would walk 20 miles for a Quaalude, let me tell ya! That was the drug back then, in the late 70s and 80s: Quaaludes! The good old Rorer 714, then they changed it to Lemmon. I tell ya! I wish I had a couple of them fucking Lemmons now! That was the best fucking drug ever made! It was so fucking good, the government took them off the fucking market 'cause they were putting the fucking drug-dealers out of fucking business! Non-narcotic, non-addictive, bring back those fucking Quaaludes! You can take all the fucking cocaine, marijuana, and all them fucking designer drugs they make today, and stick them up your fucking ass! There's nothing like a fucking Quaalude! I figured they were the fucking best, having sex and a Quaalude, you thought you'd died and went to heaven, let me tell ya. And when you had an orgasm, you thought you were on the fucking moon! Bring back those fucking Quaaludes! Anyway, think about it! This is the big man, the voice! The voice of the people! Rorer 714! And the big man's always, alway haha happy to see you!");
    }],
];

const global_commands = [
    ['a!help', function(msg) {
        msg.reply('``Command Help``\na!woag - wide woag\na!doge - wide doge\na!putin - wide putin be walkin\na!ocr - identifies text in an image using tesseract api\na!say - repeats the text after say\na!yandev - yandere dev\na!custom - lists custom commands for the server this command is sent in\n``Other Miscellaneous Features``\nRule 8 Sensor - if nvidiotism or uninteligence is detected in a message, I will say <:peepocringe:697801525925380097>\nSwear Filter - if I detect a hard r in a message, I will delete it and send a funny gif\nInactivity Timer - if a channel is inactive for a specified amount of time, I will send a message custom to that server')
    }],
    ['a!woag', function(msg) {
        msg.reply('<:woag1:730641000145616906><:woag2:730640992797196339>');
    }],
    ['a!doge', function(msg) {
        msg.reply('<:doge1:730637136629465188><:doge2:730637219278356542>');
    }],
    ['a!putin', function(msg) {
        msg.reply('<:putin1:730931077450956810><:putin2:730931099890352265>');
    }],
    ['a!pogfish', function(msg) {
        msg.reply('<a:pogfish:663943285328445465>');
    }],
    ['a!yandev', function(msg) {
        msg.reply('<:yandevstare:736768240226795653>')
    }],
    ['a!ocr', function(msg) {
        msg.reply('UNIMPLEMENTED');
    }],
    ['a!say', function(msg) {
        msg.channel.send(msg.slice('a!say '.length));
    }],
    ['im', function(msg) {
        msg.reply('hi ' + msg.substr(msg.indexOf(' ')) + ', I\'m AyyMD bot!');
    }],
];

function parse(discord_message, type='default') {
    var message = discord_message.content;
    var command_list = global_commands;

    switch (type) {
        case 'test':
            command_list = test_commands;
        default:
            command_list = global_commands;
    }

    for (i in command_list) {
        var cmd = command_list[i];
        if (message.startsWith(cmd[0])) {
            cmd[1]();
            return true;
        }
    }
    return false;
}
