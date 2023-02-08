// ==UserScript==
// @name         No-Track Roblox (NTR)
// @version      1.2
// @description  Removes Roblox's tracking from game redirects
// @author       Kaid
// @match        *://*.roblox.com/*
// ==/UserScript==

/*
Changelog:
1.2: Fixed servers tab and possibly some other bugs
1.1: Removed /refer entirely!
1.0: Initial Release
*/

// Only meant for stopping the tracking of game redirects, if you'd like an extension with general page ref id blocking, check this out: https://addons.mozilla.org/en-US/firefox/addon/clearurls/
// May add more tracker-blocking in the future :Shrug:

(function() {
    'use strict';

    function checkElements()
    {
        Array.from(document.getElementsByTagName('a')).forEach(el => {
            if (el.href.includes("roblox.com/games") && (!el.getAttribute("class") || el.getAttribute("class") != "rbx-tab-heading")){
                if (el.href.includes("roblox.com/games/refer?")){
                    let gameId = el.href.match(/PlaceId.+?(?=&)/g)[0]
                    if (gameId) {
                        gameId = gameId.match(/\d+/g)[0]
                        el.href = "https://roblox.com/games/"+gameId+"/"
                    }
                }else{
                    el.href = el.href.replace(/(?=\?).*/g,"")
                }
            }
        })
        setTimeout(checkElements,800);
    }
    checkElements()
})();
