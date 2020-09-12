/// Checks if a message contains keywords
/// RETURNS: Reaction ID
function check(message) {
    // A list of possible reactions
    const reactions = [
        '701869345072218113',
        '697801525925380096',
    ];
    // A list of keywords that trigger the 'react'
    const keywords = ['dont', 'don\'t', 'do not', 'ever'];

    var msg = message.toLowerCase();

    // Look for keywords in message
    var found = false;
    for (i in keywords) {
        var word = keywords[i];
        if (msg.includes(word)) {
            // Create a substring of message NOT including the keywords
            var keyword_index = msg.indexOf(word);
            msg = msg.slice(keyword_index + word.length, msg.end);
            found = true;
            break;
        }
    }

    if (found) {
        var reaction_id = reactions[0];
        // Get number of instances of the word "not"
        var not_count = (msg.match(/not/g) || []).length;
        // If the user said something like "don't not not not" or "do not not"
        if (not_count > 0) {
            reaction_id = reactions[1];
        }

        return reaction_id;
    }

    return null;
}
