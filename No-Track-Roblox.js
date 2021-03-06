// ==UserScript==
// @name         No-Track Roblox (NTR)
// @version      1.0
// @description  Removes Roblox's tracking from game redirects
// @author       Kaid#0001
// @match        *://*.roblox.com/*
// ==/UserScript==

// Only meant for stopping the tracking of game redirects, if you'd like an extension with general page ref id blocking, check this out: https://addons.mozilla.org/en-US/firefox/addon/clearurls/
// May add more tracker-blocking in the future :Shrug:

(function() {
    'use strict';

    let elementsCollectionUwU
    let elementsArrayUwU
    function checkElements()
    {
        elementsCollectionUwU = document.getElementsByTagName('a')
        elementsArrayUwU = Array.from(elementsCollectionUwU)
        elementsArrayUwU.forEach(el => {
            if (el.href.includes("roblox.com/games")){
                if (el.href.includes("roblox.com/games/refer?")){
                    let gameId = el.href.match(/PlaceId.+?(?=&)/g)[0]
                    if (gameId) {
                        gameId = gameId.match(/\d+/g)[0]
                        el.href = el.href.replace(/(?=\?).*/g,"?PlaceId="+gameId)
                    }
                }else{
                    el.href = el.href.replace(/(?=\?).*/g,"")
                }
            }
        })
        setTimeout(checkElements,1000);
    }
    checkElements()
})();
