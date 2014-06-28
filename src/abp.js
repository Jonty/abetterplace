function abp_tokenise (input) {
    return input
            .replace(/[^a-zA-Z ]+/g, '')
            .replace('/ {2,}/',' ')
            .toLowerCase()
            .split(' ');
}

function abp_sentiment (phrase) {
    var tokens      = abp_tokenise(phrase),
        score       = 0;

    var len = tokens.length;
    while (len--) { 
        var obj = tokens[len];
        var item = afinn[obj];
        if (typeof item === 'undefined') continue;

        score += item;
    }

    return score;
}

function abp_process_tweets() {
    $('.tweet-text').not('.abp_processed').each(function(i, node) {
        var score = abp_sentiment(node.textContent);
        if (score <= 0) {
            console.log('Removing: ' + node.textContent + '(Score: ' + score + ')');
            node.parentNode.parentNode.setAttribute('tweet-is-negative', 'true');
        } else {
            console.log('Leaving: ' + node.textContent + '(Score: ' + score + ')');
        }

        node.className = node.className + 'abp_processed';
    })
}
