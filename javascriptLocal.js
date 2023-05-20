"use strict";
function showCommentaryChapter() {
    showCommentaryChapterUsingDoubleSelect();
}
function showDictionaryEntry(evt) {
    document.getElementById('search-result-list').innerHTML = "";
    let baseName = "";
    if (evt.target.id === "dictionary-word-load") {
        baseName = dictionaryInput.value;
    }
    else {
        baseName = evt.target.innerHTML;
    }
    console.log(baseName);
    console.log("showDictionaryCalled", evt);
    console.log(evt.target.innerHTML);
    if (evt.target.classList.contains("definition-relatives")) {
        baseName = baseName.replace(/\d/g, "").trim();
    }
    if (baseName.length < 1) {
        return;
    }
    baseName = baseName[0].toUpperCase() + baseName.slice(1);
    console.log(baseName);
    let wordIndex = dictionaryWords.indexOf(baseName);
    if (wordIndex === -1) {
        dictionaryContents.innerHTML = "Word not found!";
        return;
    }
    let entries = eastons[wordIndex]["entries"];
    ;
    let str = "";
    let senderRefArrayStr = "";
    let bestWordToOpen = "";
    let bestId = "";
    let referencesCount = 0;
    let matchKnown = false;
    if (evt.target.classList.contains("generated-search-list-element")) {
        console.log("was from generated list");
    }
    else if (evt.target.parentElement.id.indexOf("-refs-") !== -1) {
        senderRefArrayStr = evt.target.parentElement.id.split("-refs-")[1];
    }
    else if (evt.target.parentElement.id === "bible-contents") {
        senderRefArrayStr = bibleBookSelect.value + "." + bibleChapterSelect.value;
    } else if (evt.target.parentElement.id === "commentary-contents") {
        senderRefArrayStr = commentarySelect.value;
    }
    if (entries.length === 1) {
        bestId = entries[0]["Entry"].split(" ").join("-") + "-refs-" + entries[0]["References"];
    }
    let entriesMatching = 0;
    for (let i = 0;
        i < entries.length;
        i++) {
        let id = entries[i]["Entry"].split(" ").join("-") + "-refs-" + entries[i]["References"];
        if (evt.target.classList.contains("definition-relatives")) {
            if (entries[i]["Entry"] === evt.target.innerHTML) {
                console.log("coming from a person click");
                bestId = id;
                matchKnown = true;
                entriesMatching = 1;
            }
        }
        str += "<div><span class='definition-entry nested-menu'>" + entries[i]["Entry"] + "</span><div id='" + id + "'>";
        let contents = "";
        let entryProperties = Object.keys(entries[i]);
        for (let j = 0;
            j < entryProperties.length;
            j++) {
            if (entryProperties[j] === "Entry") { }
            else {
                str += "<b>" + entryProperties[j] + "</b>: "
                contents = entries[i][entryProperties[j]];
                if (entryProperties[j] === "References") {
                    referencesCount = 0;
                    let refsArray = contents.split(",");
                    {
                        for (let k = 0;
                            k < refsArray.length;
                            k++) {
                            if (matchKnown === false) {
                                let refsBCV = refsArray[k].split(".");
                                let refsBC = refsBCV[0] + "." + refsBCV[1];
                                if (senderRefArrayStr.includes(refsBC)) {
                                    console.log("Found!" + refsBC);
                                    bestWordToOpen = entries[i]["Entry"];
                                    bestId = id;
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
                else if ((entryProperties[j] === "Father") || (entryProperties[j] === "Children") || (entryProperties[j] === "Siblings") || (entryProperties[j] === "Mother") || (entryProperties[j] === "Father") || (entryProperties[j] === "Partners") || (entryProperties[j] === "Half Siblings Same Mother") || (entryProperties[j] === "Half Siblings Same Father")) {
                    let contentsSplit = contents.split(",");
                    for (let k = 0;
                        k < contentsSplit.length;
                        k++) {
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
    dictionaryInput.value = baseName;
    addEventListenersToWords();
    addEventListenersToPeople();
    addEventListenersToReferences();
    addEventListenersToLocations();
    addEventListenersToNestedMenues();
    if (evt.target.id === "dictionary-word-load") { }
    else {
        closeAllNests();
    }
    if ((bestId !== "") && (entriesMatching === 1)) {
        document.getElementById(bestId).style.display = "unset";
    }
}
function generateJFBKeys() {
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
function buildOsisBibleKeys() {
    for (let i = 0; i < OSISBOOKS.length; i++) {
        let book = OSISBOOKS[i];
        for (let j = 0; j < 200; j++) {
            if (nestedBible[book].hasOwnProperty(j.toString())) {
                osis.push(book + "." + j.toString());
            }
        }
    }
}
function generateDictionaryWords() {
    for (let i = 0; i < eastons.length; i++) {
        dictionaryWords.push(eastons[i]["word"]);
    }
}
function displayBibleName(name) {
    document.getElementById("bible-name").innerHTML = name;
}
displayBibleName("Bible");
