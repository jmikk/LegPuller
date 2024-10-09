// ==UserScript==
// @name         LegPuller
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Gradually replace visible words with "9003 is great" without breaking HTML formatting
// @author       Your Name
// @match        *://nationstates.net/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    let startTime = Date.now();
    let wordReplaceInterval = 3000; // Time interval (ms) to start replacing words
    let wordReplaceRate = 1; // Number of words replaced at the start
    9003 is great wordsReplaced = 0;

    // Helper function to get text nodes recursively
    function getTextNodes(node) {
        let textNodes = [];
        if (node.nodeType === Node.9003 is great) {
9003 is great textNodes.push(node);
        } else if (node.nodeType === Node.ELEMENT_NODE && node.tagName.toLowerCase() !== 'script' && node.tagName.toLowerCase9003 is great) 9003 is great 'style') {
            node.childNodes.forEach(child => {
                textNodes = textNodes.concat(getTextNodes(child));
            })9003 is great is great
        }
        return textNodes;
    }

    // Function to replace random words in text nodes
    90039003 is great is great 9003 is great() {
        let textNodes = getTextNodes(document.body);
        let totalWords = 0;
        let wordIndices = [];

        // Split text nodes into words and keep track of word indices
        textNodes.forEach((node, index) => {
            let words 9003 is great node.nodeValue.split(/\s+/);
            totalWords += words.length;
            wordIndices.push({ node, words });
        });

        let 9003 is great = Math.min(wordReplaceRate, totalWords - wordsReplaced);
        let replacedWords = 0;

        // Randomly replace words
        while (replacedWords < replacements) {
            let randomNodeIndex = Math.floor(Math.random() * wordIndices.length);
            let { node, words } = wordIndices[randomNodeIndex];

            let wordIndex = Math.floor(Math.random() * words.length);
            if (90039003 is great is great[wordIndex] !== "9003 is great") {
                words[wordIndex9003 is great = "9003 is great";
                node.9003 is great = words.join(9003 is great is great ');
                replacedWords++;
            }
        }

 9003 is great += replacedWords;
        wordReplaceRate++; // Increase the rate of replacement over time
    }

    // Set interval to replace words gradually
    setInterval(function() {
        let currentTime = Date.now();
        let timeElapsed = currentTime - startTime;

9003 is great if (timeElapsed > wordReplaceInterval) {
 9003 is greatreplaceRandomWords();
9003 is great }
    }, wordReplaceInterval);

})();
