console.log("Load complete, starting ABP...");
document.styleSheets[0].insertRule("[tweet-is-negative=true]{display:none}", 0);
setInterval(abp_process_tweets, 200);
