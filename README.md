A Better Place
==============

Reading Twitter in the morning can be awful - an endless stream of bad news, anger, and depression. It sets the tone for your day.

Researchers at Facebook conducted unethical research proving the attitude of social media seriously affects mood for extended periods of time.

A Better Place is a positivity filter bubble. It uses terrible sentiment analysis to strip out negative Twitter posts from your timeline; hopefully leaving you with a few morsels that make your day tolerable.

It comes in both [Chrome extension](https://chrome.google.com/webstore/detail/a-better-place/ajihembjdmpchmpcocjlagkfcobmdaog) and bookmarklet flavours, however only the Chrome extension will automatically kick in between the hours of 7am and 11am every day. You can use the bookmarklet whenever you need it.

Have a nice day.

Bookmarklet
=========

Github is terrible and won't let you embed bookmarklets. Create a new bookmark and add the following as the link.
```
javascript:(function(){ document.body.appendChild(document.createElement('script')).src='https://raw.githack.com/Jonty/abetterplace/master/src/load.js'; })();
```
Alternatively there's a draggable link [over on the main site](http://jonty.co.uk/abetterplace).

Developers
========

This is using [AFINN-111](http://www2.imm.dtu.dk/pubdb/views/publication_details.php?id=6010) sentiment analysis, which is awful, but still better than everything else when using twitter. A small amount of the code is taken from [sentiment](https://github.com/thisandagain/sentiment) by [thisandagain](https://github.com/thisandagain). Thanks.

If you want to play around with this you can see debug logging in the JS console, however Twitter disable it - you can re-enable it by issuing `delete console.log` in the console.
