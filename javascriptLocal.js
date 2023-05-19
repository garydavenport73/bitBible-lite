"use strict";

//function showBibleChapter() {
//showBibleChapterUsingDoubleSelect();
//}

function showCommentaryChapter() {
	showCommentaryChapterUsingDoubleSelect();
}

function showDictionaryEntry(evt) {
	document.getElementById('search-result-list').innerHTML="";

    let baseName = "";
    if (evt.target.id === "dictionary-word-load") {
        baseName = dictionaryInput.value;
    }
    else {
        baseName = evt.target.innerHTML;
    }

    console.log(baseName);
    //dictionaryInput.value = evt.target.innerHTML;
    // console.log("***************************");
    console.log("showDictionaryCalled", evt);
    // console.log(evt.target.classList);
    // console.log(evt.target.parentElement.id);
    console.log(evt.target.innerHTML);
    // console.log("***************************");

    ///Place the right word as the dictionary inpu
    if (evt.target.classList.contains("definition-relatives")) {//take number off if using relative
        baseName = baseName.replace(/\d/g, "").trim();
    }

    if (baseName.length < 1) { return; }// make sure a string length of at least 1 is present

    ///Make sure its capitalized
    baseName = baseName[0].toUpperCase() + baseName.slice(1);
    //dictionaryInput.value = dictionaryInput.value[0].toUpperCase() + dictionaryInput.value.slice(1);
    console.log(baseName);

    //handle no word in dictionary
    let wordIndex = dictionaryWords.indexOf(baseName);
    if (wordIndex === -1) {
        dictionaryContents.innerHTML = "Word not found!";
        return;
    }

    //

    let entries = eastons[wordIndex]["entries"];;


    let str = ""; //for building html contents
    let senderRefArrayStr = ""; //a csv string of osis references from sending event
    //let referenceFound = false; //a flag that will stop searching once a reference is dound
    let bestWordToOpen = ""; //
    let bestId = ""; //the id of a div that should be opened
    let referencesCount = 0;
    let matchKnown = false;

    if (evt.target.classList.contains("generated-search-list-element")){
        console.log("was from generated list");
    }

    else if (evt.target.parentElement.id.indexOf("-refs-") !== -1) {//event is coming from contents of definition
        senderRefArrayStr = evt.target.parentElement.id.split("-refs-")[1];
    }

    else if (evt.target.parentElement.id === "bible-contents") {//event is coming from bible chapter verse
		senderRefArrayStr = bibleBookSelect.value+"."+bibleChapterSelect.value;
        //senderRefArrayStr = bibleSelect.value;

    } else if (evt.target.parentElement.id === "commentary-contents") {//event coming from commentary
        senderRefArrayStr = commentarySelect.value;
    }

    if (entries.length === 1) {//there is only one entry, so open that entry
        bestId = entries[0]["Entry"].split(" ").join("-") + "-refs-" + entries[0]["References"];
        //referenceFound = true;
        //matchKnown=true;
    }

    let entriesMatching = 0;

    //console.log(entries);
    for (let i = 0; i < entries.length; i++) {

        let id = entries[i]["Entry"].split(" ").join("-") + "-refs-" + entries[i]["References"];

        if (evt.target.classList.contains("definition-relatives")) {//event coming from a person click
            if (entries[i]["Entry"] === evt.target.innerHTML) {//name matches entry best id knwn
                console.log("coming from a person click");
                bestId = id;
                matchKnown = true;
                entriesMatching = 1;
            }
        }
        //start building contents of dictionary entry
        str += "<div><span class='definition-entry nested-menu'>" + entries[i]["Entry"] + "</span><div id='" + id + "'>";

        let contents = "";
        let entryProperties = Object.keys(entries[i]);
        for (let j = 0; j < entryProperties.length; j++) {

            if (entryProperties[j] === "Entry") {
                //do nothing, entry already listed
            }
            else {
                str += "<b>" + entryProperties[j] + "</b>: "
                contents = entries[i][entryProperties[j]];
                if (entryProperties[j] === "References") {
                    referencesCount = 0;
                    //go through each reference and tag them, that is the main purpose of loop
                    let refsArray = contents.split(",");
                    {
                        for (let k = 0; k < refsArray.length; k++) {
                            //also while looping see if the reference is in the senders references
                            //if so make note of a match.
                            if (matchKnown === false) {//only look if not already found

                                let refsBCV = refsArray[k].split(".");//removing the verse just match by book chap
                                let refsBC = refsBCV[0] + "." + refsBCV[1];
                                //console.log("checking for ",refsBC,"in",senderRefArrayStr);
                                if (senderRefArrayStr.includes(refsBC)) {
                                    console.log("Found!" + refsBC);
                                    bestWordToOpen = entries[i]["Entry"];
                                    bestId = id;
                                    //referenceFound = true;
                                    referencesCount += 1;
                                }
                            }
                            refsArray[k] = "<span class='osis'>" + refsArray[k] + "</span>";
                        }
                    }
                    contents = refsArray.join(", ");
                }
                else if (entryProperties[j] === "Definition") {
                    contents = tagRefsAndWords(contents, "<span class='osis'>", "</span>", "<span class='word'>", "</span>");
                }

                else if (entryProperties[j] === "Entry") {
                    contents = "<span class='definition-entry'>" + contents + "</span>";
                }
                else if (entryProperties[j] === "Location") {
                    contents = "<span class='definition-location'>" + contents + "</span>";
                }
                else if (
                    (entryProperties[j] === "Father") ||
                    (entryProperties[j] === "Children") ||
                    (entryProperties[j] === "Siblings") ||
                    (entryProperties[j] === "Mother") ||
                    (entryProperties[j] === "Father") ||
                    (entryProperties[j] === "Partners") ||
                    (entryProperties[j] === "Half Siblings Same Mother") ||
                    (entryProperties[j] === "Half Siblings Same Father")
                ) {
                    let contentsSplit = contents.split(",");
                    for (let k = 0; k < contentsSplit.length; k++) {
                        contentsSplit[k] = "<span class='definition-relatives'>" + contentsSplit[k] + "</span>";
                    }
                    contents = contentsSplit.join(", ");
                }
            }
            str += contents;
            str += "<br>";
        }
        if (referencesCount > 0) {
            entriesMatching += 1;
        };
        str += "<br>";
        str += "</div></div>";
    }
    console.log("Number of matches: " + entriesMatching);
    dictionaryContents.innerHTML = str;

    dictionaryInput.value = baseName;//taken from the process function
    addEventListenersToWords();
    addEventListenersToPeople();
    addEventListenersToReferences();
    addEventListenersToLocations();
    addEventListenersToNestedMenues();
    if (evt.target.id === "dictionary-word-load") {
        //dictionary-word-load button pressed, so leave open all words
    }
    else {
        closeAllNests();
    }
    if ((bestId !== "") && (entriesMatching === 1)) { //must have just one match to open
        document.getElementById(bestId).style.display = "unset";
    }
}
function generateJFBKeys() {//**will change if not local */
    for (let i = 0; i < OSISBOOKS.length; i++) {
        let book = OSISBOOKS[i];
        for (let j = 0; j < 200; j++) {
            let key = book + "." + j.toString();
            if (JFB.hasOwnProperty(key)) {
                jfbKeys.push(key);
            }
        }
    }
}
function buildOsisBibleKeys() {//**will change if not local */
    for (let i = 0; i < OSISBOOKS.length; i++) {
        let book = OSISBOOKS[i];
        for (let j = 0; j < 200; j++) {
            if (nestedBible[book].hasOwnProperty(j.toString())) {
                osis.push(book + "." + j.toString());
            }
        }
    }
}
function generateDictionaryWords() {//**will change if not local */
    for (let i = 0; i < eastons.length; i++) {
        dictionaryWords.push(eastons[i]["word"]);
    }
}

function displayBibleName(name) {
    document.getElementById("bible-name").innerHTML = name;
}

displayBibleName("Bible");
