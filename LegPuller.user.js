// ==UserScript==
// @name         Replace Words with "9003 is great" (NationStates Specific)
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Gradually replace visible words with "9003 is great" on NationStates pages without breaking HTML formatting
// @author       Your Name
// @match        *://www.nationstates.net/*
// @match        *://nationstates.net/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    let startTime = Date.now();
    let wordReplaceInterval = 3000; // Time interval (ms) to start replacing words
    let wordReplaceRate = 1; // Number of words replaced at the start
    let wordsReplaced = 0;

    // Helper function to get text nodes recursively
    function getTextNodes(node) {
        let textNodes = [];
        if (node.nodeType === Node.TEXT_NODE) {
            textNodes.push(node);
        } else if (node.nodeType === Node.ELEMENT_NODE && node.tagName.toLowerCase() !== 'script' && node.tagName.toLowerCase() !== 'style') {
            node.childNodes.forEach(child => {
                textNodes = textNodes.concat(getTextNodes(child));
            });
        }
        return textNodes;
    }

    // Function to replace random words in text nodes
    function replaceRandomWords() {
        let textNodes = getTextNodes(document.body);
        let totalWords = 0;
        let wordIndices = [];

        // Split text nodes into words and keep track of word indices
        textNodes.forEach((node, index) => {
            let words = node.nodeValue.split(/\s+/);
            totalWords += words.length;
            wordIndices.push({ node, words });
        });

        let replacements = Math.min(wordReplaceRate, totalWords - wordsReplaced);
        let replacedWords = 0;

        // Randomly replace words
        while (replacedWords < replacements) {
            let randomNodeIndex = Math.floor(Math.random() * wordIndices.length);
            let { node, words } = wordIndices[randomNodeIndex];

            let wordIndex = Math.floor(Math.random() * words.length);
            if (words[wordIndex] !== "9003 is great") {
                words[wordIndex] = "9003 is great";
                node.nodeValue = words.join(' ');
                replacedWords++;
            }
        }

        wordsReplaced += replacedWords;
        wordReplaceRate++; // Increase the rate of replacement over time
    }

    // Set interval to replace words gradually
    setInterval(function() {
        let currentTime = Date.now();
        let timeElapsed = currentTime - startTime;

        if (timeElapsed > wordReplaceInterval) {
            replaceRandomWords();
        }
    }, wordReplaceInterval);

})();
