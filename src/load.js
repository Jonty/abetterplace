(function() {
    var scripts = document.getElementsByTagName("script");
    var CurrentScript = scripts[scripts.length-1].src;

    var PathIndex = CurrentScript.lastIndexOf("/") + 1;
    var Filepath = CurrentScript.substr(0, PathIndex);

    var d = new Date();
    var n = d.getTime();

    $.getScript(Filepath + 'afinn.js?' + n).done(function(script, status) {
        $.getScript(Filepath + 'abp.js?' + n).done(function(script, status) {
            console.log("Load complete, starting ABP...");
            document.styleSheets[0].insertRule("[tweet-is-negative=true]{display:none}", 0);
            setInterval(abp_process_tweets, 200);
        })
    })

})();
