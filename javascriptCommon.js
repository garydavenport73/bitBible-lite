"use strict";
function makeReadingTable(readingPlan) {
    let readingTable = "<tr>";
    let intDay = 1;
    for (let day in readingPlan) {
        let dayArray = readingPlan[day].split(",");
        readingTable += "<td><ul><li class='day-heading'><b>" + day + "</b></li>";
        for (let readingChapter of dayArray) {
            readingTable += "<li class='osis color-hover'>" +
                readingChapter +
                "</li>";

        }
        readingTable += "</ul></td>";
        if (intDay % 7 === 0) {
            readingTable += "</tr><tr>";
        }
        intDay += 1;

    }
    readingTable += "</tr>";
    return readingTable;

}
function switchReadingPlans() {
    if (document.getElementById("reading-plan-name").innerHTML === "Chronological") { loadReadingTable("Old Testament/New Testament", OTNTREADINGPLAN) }
    else if (document.getElementById("reading-plan-name").innerHTML === "Old Testament/New Testament") {
        loadReadingTable("Straight Through", STRAIGHTREADINGPLAN);
    }
    else if (document.getElementById("reading-plan-name").innerHTML === "Straight Through") {
        loadReadingTable("Chronological NT 260 Days", CHRONOLOGICALNT260);
    }
    else if (document.getElementById("reading-plan-name").innerHTML === "Chronological NT 260 Days") {
        loadReadingTable("Chronological", CHRONOLOGICALREADINGPLAN);
    }
    else {
        loadReadingTable("Chronological", CHRONOLOGICALREADINGPLAN);
    }
    addEventListenersToChapterCheckboxes();
    fillChapterCheckBoxValues();
}
function getDateString(year, dayInteger) {
    const d = new Date(year, 0, dayInteger);
    return (d.getFullYear().toString() +
        "-" +
        ("0" + (d.getMonth() + 1).toString()).slice(-2) +
        "-" +
        ("0" + d.getDate().toString()).slice(-2));

}
function getTodaysDate() {
    let now = new Date();
    let day = ("0" + now.getDate()).slice(-2);
    let month = ("0" + (now.getMonth() + 1)).slice(-2);
    let today = now.getFullYear() + "-" + month + "-" + day;
    return today;
}
function subtract2Dates(dateString1, dateString2) {
    let year1 = parseInt(dateString1.split("-")[0]);
    let month1 = parseInt(dateString1.split("-")[1]) - 1;
    let date1 = parseInt(dateString1.split("-")[2]);
    let year2 = parseInt(dateString2.split("-")[0]);
    let month2 = parseInt(dateString2.split("-")[1]) - 1;
    let date2 = parseInt(dateString2.split("-")[2]);
    let dateObject1 = new Date(year1, month1, date1);
    let dateObject2 = new Date(year2, month2, date2);
    let oneDay = 1 * 60 * 60 * 24 * 1000;
    let timeDifference = dateObject1.getTime() - dateObject2.getTime();
    let dayDifference = parseInt(timeDifference / oneDay);
    console.log(typeof (dayDifference));
    console.log(dayDifference);
    return (dayDifference);
}
function loadReadingTable(title,readingPlanObject) {
    buildFlexReadingPlanTable(readingPlanObject);
    document.getElementById("reading-plan-name").innerHTML = title;
    addEventListenersToReferences();
}
"use strict";
"use strict";
function getYFromLatitude(latitude) {
    let topLatitude = 34.0;
    let bottomLatitude = 29.0;
    let bottomPixel = base64Map.offsetHeight;
    console.log("height " + bottomPixel);
    let topPixel = 0;
    let mLat = (bottomPixel - topPixel) / (bottomLatitude - topLatitude);
    let bLat = bottomPixel - mLat * bottomLatitude;
    let yLocation = mLat * latitude + bLat;
    return yLocation;
}
function getXLocationFromLongitude(longitude) {
    let leftLongitude = 33.5;
    let rightLongitude = 36.5;
    let leftPixel = 0;
    let rightPixel = base64Map.offsetWidth;
    console.log("width " + rightPixel);
    let mLong = (rightPixel - leftPixel) / (rightLongitude - leftLongitude);
    let bLong = rightPixel - mLong * rightLongitude;
    return mLong * longitude + bLong;
}
function plotDataPoint(str, latitude, longitude, className = "bullseye") {
    let xLocation = getXLocationFromLongitude(longitude);
    let yLocation = getYFromLatitude(latitude);
    if ((xLocation < 0) || (xLocation > base64Map.offsetWidth) || (yLocation < 0) || (yLocation > base64Map.offsetHeight)) { }
    else {
        let mapContainer = document.getElementById("map-container");
        let bullseye = document.createElement("span");
        bullseye.innerText = str;
        bullseye.style.position = "absolute";
        bullseye.classList.add(className);
        bullseye.style.left = xLocation + "px";
        bullseye.style.top = yLocation + "px";
        mapContainer.appendChild(bullseye);
    }
}
function clearBullsEyes() {
    let bullsEyes = document.getElementsByClassName("bullseye");
    for (let i = bullsEyes.length - 1;
        i >= 0;
        i--) {
            bullsEyes[i].remove();
    }
    document.getElementById("map-info").innerHTML = "&nbsp;";

}
function clearBackgroundLocations() {
    let backgroundLocations = document.getElementsByClassName("background-location");
    for (let i = backgroundLocations.length - 1;
        i >= 0;
        i--) {
            backgroundLocations[i].remove();
    }
    document.getElementById("map-name").innerHTML = "&nbsp;";

}
function addBackgroundLocations(evt) {
    clearBackgroundLocations();
    let mapName = evt.target.id.split("map-")[1];
    console.log(mapName);
    document.getElementById("map-name").innerHTML = mapName;
    if (evt.target.id === "map-Abraham") {
        plotDataPoint("o Canaan", "31.6935295036883", "34.8438828857684", "background-location");
        plotDataPoint("o Ur", "30.9625", "46.103056", "background-location");
        plotDataPoint("o Haran", "36.86", "39.03139", "background-location");
        plotDataPoint("o Damascus", "33.511612", "36.309102", "background-location");
        plotDataPoint("o Shechem", "32.22111", "35.25444", "background-location");
        plotDataPoint("o Bethel", "31.93053921", "35.22103275", "background-location");
        plotDataPoint("o Dan", "33.24856", "35.65252", "background-location");
        plotDataPoint("o Salem", "31.777444", "35.234935", "background-location");
        plotDataPoint("o Gerar", "31.38176", "34.60698", "background-location");
        plotDataPoint("o Beersheba", "31.245", "34.84068", "background-location");
        plotDataPoint("o Egypt", "31.032047", "33.854957", "background-location");
    } else if (evt.target.id === "map-Moses") {
        plotDataPoint("o Sinai", "29.5", "34", "background-location");
        plotDataPoint("o Zin", "31.6935295036883", "34.8438828857684", "background-location");
        plotDataPoint("o Elim", "29.306194", "32.980924", "background-location");
        plotDataPoint("o Beer", "30.998062", "35.498547", "background-location");
        plotDataPoint("o Marah", "29.35", "32.933333", "background-location");
        plotDataPoint("o Red Sea", "19", "39.5", "background-location");
        plotDataPoint("o Wilderness of Sin", "28.838778", "33.420573", "background-location");
    } else if (evt.target.id === "map-12 Tribes") {
        plotDataPoint("o Kedesh", "32.559061", "35.246206", "background-location");
        plotDataPoint("o Golan", "32.80007553", "35.9373013", "background-location");
        plotDataPoint("o Ramoth", "32.049953", "35.733402", "background-location");
        plotDataPoint("o Bezer", "32.51613741", "36.48829076", "background-location");
        plotDataPoint("o Hebron", "31.524354", "35.108539", "background-location");
        plotDataPoint("o Shechem", "32.22111", "35.25444", "background-location");
        plotDataPoint("o Damascus", "33.511612", "36.309102", "background-location");
        plotDataPoint("o Ammon", "31.95522", "35.94503", "background-location");
        plotDataPoint("o Jerusalem", "31.777444", "35.234935", "background-location");
        plotDataPoint("o Samaria", "32.280231", "35.197929", "background-location");
    } else if (evt.target.id === "map-Divided Kingdoms") {
        plotDataPoint("o Shechem", "32.22111", "35.25444", "background-location");
        plotDataPoint("o Samaria", "32.280231", "35.197929", "background-location");
        plotDataPoint("o Jerusalem", "31.777444", "35.234935", "background-location");
        plotDataPoint("o Hebron", "31.524354", "35.108539", "background-location");
        plotDataPoint("o Gaza", "31.503959", "34.46203", "background-location");
        plotDataPoint("o Gerar", "31.38176", "34.60698", "background-location");
        plotDataPoint("o Damascus", "33.511612", "36.309102", "background-location");
        plotDataPoint("o Jezreel", "32.502074", "35.50196", "background-location");
    } else if (evt.target.id === "map-Jesus") {
        plotDataPoint("o Bethlehem", "31.70431", "35.20746", "background-location");
        plotDataPoint("o Damascus", "33.511612", "36.309102", "background-location");
        plotDataPoint("o Phillipi", "41.01316", "24.28409", "background-location");
        plotDataPoint("o Nazareth", "32.701029", "35.300148", "background-location");
        plotDataPoint("o Jezreel", "32.502074", "35.50196", "background-location");
        plotDataPoint("o Samaria", "32.280231", "35.197929", "background-location");
        plotDataPoint("o Sea Galilee", "32.8138046", "35.590564", "background-location");
        plotDataPoint("o Dead Sea", "31.577850349495", "35.52394311", "background-location");
        plotDataPoint("o Mt. Ebal", "31.79819", "35.80986", "background-location");
        plotDataPoint("o Jerusalem", "31.777444", "35.234935", "background-location");
        plotDataPoint("o Hebron", "31.524354", "35.108539", "background-location");
        plotDataPoint("o Carmel", "31.422876", "35.132952", "background-location");
        plotDataPoint("o Gaza", "31.503959", "34.46203", "background-location");
        plotDataPoint("o Bethel", "31.93053921", "35.22103275", "background-location");
    }
}
function locationOffMap(latitude, longitude) {
    let xLocation = getXLocationFromLongitude(longitude);
    let yLocation = getYFromLatitude(latitude);
    if ((xLocation < 0) || (xLocation > base64Map.offsetWidth) || (yLocation < 0) || (yLocation > base64Map.offsetHeight)) {
        return true;
    }
    else {
        return false;
    }
}
function clearAllLocations() {
    clearBullsEyes();
    clearBackgroundLocations();
}
function makeFavicon(letter, color, backgroundColor) {
    let canvas = document.createElement('canvas');
    canvas.width = 16;
    canvas.height = 16;
    let ctx = canvas.getContext('2d');
    ctx.fillStyle = backgroundColor;
    ctx.fillRect(0, 0, 16, 16);
    let ctx2 = canvas.getContext("2d");
    ctx2.fillStyle = color;
    ctx2.font = "bold 12px Arial";
    ctx2.fillText(letter, 4, 12);
    let link = document.getElementById("favicon-link");
    link.href = canvas.toDataURL("image/x-icon");
}
function convertPlainText(txt, obj) {
    txt = "<p>" + txt.split(/\r\n(\s+)?\r\n/).join("</p><p>") + "</p>";
    txt = txt.split("\n").join("<br>");
    txt = txt.replace(/(\r|\n|\r\n)/gi, "");
    txt = txt.split("</p><p>").join("</p>\r\n<p>");
    return txt;
}
function addEventListenersToNestedMenues() {
    let nestedMenues = document.getElementsByClassName("nested-menu");
    for (let nestedmenu of nestedMenues) {
        nestedmenu.addEventListener("click", toggleNest);
    }
}
function closeAllNests() {
    let nestedMenues = document.getElementsByClassName("nested-menu");
    for (let nestedMenu of nestedMenues) {
        let siblings = nestedMenu.parentElement.children;
        for (let sibling of siblings) {
            if (sibling === nestedMenu) { } else {
                sibling.style.display = "none";
            }
        }
    }
}
function toggleNest(evt) {
    console.log("toggleNest called");
    let siblings = evt.target.parentElement.children;
    for (let sibling of siblings) {
        if (sibling === evt.target) { } else {
            console.log("sibling.style.display: " + sibling.style.display);
            if ((sibling.style.display === "none") || (sibling.style.display === "")) {
                sibling.style.display = "inherit";
            } else {
                sibling.style.display = "none";
            }
        }
    }
}
function changeFont(theElement) {
    console.log(theElement);
    let buttons = document.getElementsByTagName('button');
    let h1s = document.getElementsByTagName('h1');
    let id = theElement.id;
    if (id === "increase-font") {
        let pageFontSize = document.getElementsByTagName('*')[0].style.fontSize;
        if (pageFontSize === "") {
            pageFontSize = "1rem";
        }
        let numberFontSize = Number(pageFontSize.replace("rem", ""));
        numberFontSize = numberFontSize * 1.1;
        pageFontSize = numberFontSize.toString() + "rem";
        document.getElementsByTagName('*')[0].style.fontSize = pageFontSize;

    }
    else if (id === "decrease-font") {
        let pageFontSize = document.getElementsByTagName('*')[0].style.fontSize;
        if (pageFontSize === "") {
            pageFontSize = "1rem";
        }
        let numberFontSize = Number(pageFontSize.replace("rem", ""));
        numberFontSize = numberFontSize / 1.1;
        pageFontSize = numberFontSize.toString() + "rem";
        document.getElementsByTagName('*')[0].style.fontSize = pageFontSize;

    }
}
function showMain(id) {
    let mains = document.getElementsByTagName("main");
    for (let main of mains) {
        if (main.id === id) {
            main.style.display = "block";
        }
        else {
            main.style.display = "none";
        }
    }
}
function addEventListenersToPeople() {
    let people = document.getElementsByClassName("definition-relatives");
    for (let person of people) {
        person.addEventListener("click", processPeopleClick);
    }
}
function addEventListenersToLocations() {
    let locations = document.getElementsByClassName("definition-location");
    for (let i = 0;
        i < locations.length;
        i++) {
            locations[i].addEventListener("click", processLocationClick);
    }
}
function addEventListenersToWords() {
    let foundWords = document.getElementsByClassName("word");
    for (let i = 0;
        i < foundWords.length;
        i++) {
            foundWords[i].addEventListener("click", processWordClick);
    }
}
function addEventListenersToReferences() {
    let foundRefs = document.getElementsByClassName("osis");
    for (let i = 0;
        i < foundRefs.length;
        i++) {
            foundRefs[i].addEventListener("click", processOsisRefClick);
    }
}
function processPeopleClick(evt) {
    showMain('dictionary');
    showDictionaryEntry(evt);
}
function processLocationClick(evt) {
    showMain('map');
    console.log(evt.target.innerHTML);
    let str = evt.target.parentElement.id.split("-refs-")[0];
    let latitude = evt.target.innerHTML.split(",")[0];
    let longitude = evt.target.innerHTML.split(",")[1];
    if (locationOffMap(latitude, longitude)) {
        document.getElementById("map-info").innerHTML = "(off map)" + str + ": " + evt.target.innerHTML;
    }
    else {
        document.getElementById("map-info").innerHTML = str + ": " + evt.target.innerHTML;
        plotDataPoint("o" + str, latitude, longitude);
    }
    let url = "http://maps.google.com/maps?q=" + evt.target.innerHTML;
    document.getElementById("btn-open-google-map").innerHTML = "<a href=" + url + " target='_blank'>&#127760;</a>";

}
function processWordClick(evt) {
    showMain('dictionary');
    showDictionaryEntry(evt);
}
function processOsisRefClick(evt) {
    showMain('bible');
    console.log("processOsisRefClick called: " + evt.target.innerHTML);
    let book = evt.target.innerHTML.split(".")[0];
    let chapter = evt.target.innerHTML.split(".")[1];
    bibleBookSelect.value = book;
    populateBibleChapterSelect();
    bibleChapterSelect.value = chapter;
    showBibleChapterUsingDoubleSelect();
}
function processSeeCommentaryBtn() {
    let chapter = bibleChapterSelect.value;
    let book = bibleBookSelect.value;
    if (chapter === "") {
        return;
    }
    commentaryBookSelect.value = book;
    populateCommentaryChapterSelect();
    commentaryChapterSelect.value = chapter;
    showCommentaryChapterUsingDoubleSelect();
    showMain('commentary');

}
function tagRefsAndWords(contents, osisStartTag, osisEndTag, wordStartTag, wordEndTag) {
    let words = dictionaryWords;
    function replacerFunction(something) {
        console.log(something);
    }
    for (let i = 0;
        i < osis.length;
        i++) {
            if (osis[i].length > 1) {
                let regexstring = "\\b" + osis[i] + "\\.\\d?\\d?\\d?\\b";
                let regexp = new RegExp(regexstring, "g");
                contents = contents.replace(regexp, "OSISSTARTTAG" + "$&" + "OSISENDTAG");
            }
    }
    for (let i = 0;
        i < words.length;
        i++) {
            if (words[i].length > 1) {
                let regexstring = "\\b" + words[i] + "\\b";
                let regexp = new RegExp(regexstring, "g");
                contents = contents.replace(regexp, "WORDSTARTTAG" + words[i] + "WORDENDTAG");
                regexstring = "\\b" + words[i].toLowerCase() + "\\b";
                regexp = new RegExp(regexstring, "g");
                contents = contents.replace(regexp, "WORDSTARTTAG" + words[i].toLowerCase() + "WORDENDTAG");
            }
    }
    contents = contents.replace(/OSISSTARTTAG/g, osisStartTag).replace(/OSISENDTAG/g, osisEndTag);
    contents = contents.replace(/WORDSTARTTAG/g, wordStartTag).replace(/WORDENDTAG/g, wordEndTag);
    return contents;

}
function backOneChapterBible() {
    if ((bibleBookSelect.value === "") ||(bibleChapterSelect.value==="")) {
        return;
    }
    let osisValue = bibleBookSelect.value + "." + bibleChapterSelect.value;
    let currentIndex = osis.indexOf(osisValue);
    if (currentIndex > 0) {
        bibleBookSelect.value = osis[currentIndex - 1].split(".")[0];
        populateBibleChapterSelect();
        bibleChapterSelect.value = osis[currentIndex - 1].split(".")[1];
        showBibleChapterUsingDoubleSelect();
    }
}
function forwardOneChapterBible() {
    if ((bibleBookSelect.value === "") ||(bibleChapterSelect.value==="")) {
        return;
    }
    let osisValue = bibleBookSelect.value + "." + bibleChapterSelect.value;
    let currentIndex = osis.indexOf(osisValue);
    if (currentIndex < osis.length - 1) {
        bibleBookSelect.value = osis[currentIndex + 1].split(".")[0];
        populateBibleChapterSelect();
        bibleChapterSelect.value = osis[currentIndex + 1].split(".")[1];
        showBibleChapterUsingDoubleSelect();
    }
}
function backOneChapterCommentary() {
    if ((commentaryBookSelect.value === "") ||(commentaryChapterSelect.value==="")) {
        return;
    }
    let jfbKeysValue = commentaryBookSelect.value + "." + commentaryChapterSelect.value;
    let currentIndex = jfbKeys.indexOf(jfbKeysValue);
    if (currentIndex > 0) {
        commentaryBookSelect.value = jfbKeys[currentIndex - 1].split(".")[0];
        populateCommentaryChapterSelect();
        commentaryChapterSelect.value = jfbKeys[currentIndex - 1].split(".")[1];
        showCommentaryChapterUsingDoubleSelect();
    }
}
function forwardOneChapterCommentary() {
    if ((commentaryBookSelect.value === "") ||(commentaryChapterSelect.value==="")) {
        return;
    }
    let jfbKeysValue = commentaryBookSelect.value + "." + commentaryChapterSelect.value;
    let currentIndex = jfbKeys.indexOf(jfbKeysValue);
    if (currentIndex < jfbKeys.length - 1) {
        commentaryBookSelect.value = jfbKeys[currentIndex + 1].split(".")[0];
        populateCommentaryChapterSelect();
        commentaryChapterSelect.value = jfbKeys[currentIndex + 1].split(".")[1];
        showCommentaryChapterUsingDoubleSelect();
    }
}
"use strict";
let readingPlanTable = document.getElementById("reading-plan-table");
let bibleBookSelect = document.getElementById("bible-book-select");
let bibleChapterSelect = document.getElementById("bible-chapter-select");
let bibleContents = document.getElementById("bible-contents");
let commentarySelect = document.getElementById("commentary-select");
let commentaryChapterSelect = document.getElementById("commentary-chapter-select");
let commentaryBookSelect = document.getElementById("commentary-book-select");
let commentaryContents = document.getElementById("commentary-contents");
let dictionaryInput = document.getElementById("dictionary-input");
let dictionaryContents = document.getElementById("dictionary-contents");
let seeCommentaryButton = document.getElementById("see-commentary-button");
let dictionaryWordLoadButton = document.getElementById("dictionary-word-load");
let base64Map = document.getElementById("base-64-map");
let readingButton = document.getElementById("reading-button");
let bibleButton = document.getElementById("bible-button");
let dictionaryButton = document.getElementById("dictionary-button");
let commentaryButton = document.getElementById("commentary-button");
let mapButton = document.getElementById("map-button");
let helpButton = document.getElementById("help-button");
let buttonSelectMaps = document.getElementsByClassName("btn-select-map");
let jfbKeys = [];
let osis = [];
let dictionaryWords = [];
let useRedLetters = false;
bibleBookSelect.addEventListener("input", populateBibleChapterSelect);
bibleChapterSelect.addEventListener("input", showBibleChapterUsingDoubleSelect);
commentaryBookSelect.addEventListener("input", populateCommentaryChapterSelect);
commentaryChapterSelect.addEventListener("input", showCommentaryChapterUsingDoubleSelect);
seeCommentaryButton.addEventListener("click", processSeeCommentaryBtn);
dictionaryWordLoadButton.addEventListener("click", showDictionaryEntry);
document.getElementById("reading-button").addEventListener("click", () => {
    showMain("reading");
});
document.getElementById("bible-button").addEventListener("click", () => {
    showMain("bible");
});
document.getElementById("dictionary-button").addEventListener("click", () => {
    showMain("dictionary");
});
document.getElementById("commentary-button").addEventListener("click", () => {
    showMain("commentary");
});
document.getElementById("map-button").addEventListener("click", () => {
    showMain("map");
});
document.getElementById("help-button").addEventListener("click", () => {
    showMain("help");
});
document.getElementById("decrease-font").addEventListener("click", (evt) => {
    changeFont(evt.target);
});
document.getElementById("increase-font").addEventListener("click", (evt) => {
    changeFont(evt.target);
});
document.getElementById("switch-reading-plans").addEventListener("click", switchReadingPlans);
document.getElementById("btn-clear-all-locations").addEventListener("click", clearAllLocations);
document.getElementById("bible-chapter-previous").addEventListener("click", backOneChapterBible);
document.getElementById("bible-chapter-next").addEventListener("click", forwardOneChapterBible);
document.getElementById("commentary-chapter-previous").addEventListener("click", backOneChapterCommentary);
document.getElementById("commentary-chapter-next").addEventListener("click", forwardOneChapterCommentary);
document.getElementById("download-reading-progress").addEventListener("click",downloadReadingProgress);
document.getElementById("upload-reading-progress").addEventListener("click",uploadReadingProgress);
for (let button of buttonSelectMaps) {
    button.addEventListener("click", addBackgroundLocations);
}
generateJFBKeys();
buildOsisBibleKeys();
function buildBibleBookSelect() {
    let str = "";
    for (let i = 0;
        i < OSISBOOKS.length;
        i++) {
            str += "<option value='" + OSISBOOKS[i] + "'>" + OSISTOFULLNAME[OSISBOOKS[i]] + "</option>";
    }
    bibleBookSelect.innerHTML = str;
    bibleBookSelect.value = "Gen";
    commentaryBookSelect.innerHTML = str;
    commentaryChapterSelect.value = "Gen";

}
buildBibleBookSelect();
function populateBibleChapterSelect() {
    console.log("called");
    let book = bibleBookSelect.value;
    console.log("book is", book);
    let numberOfChapters = BOOKLENGTHS[book];
    console.log("number of chapters", numberOfChapters);
    let str = "";
    for (let i = 1;
        i < numberOfChapters + 1;
        i++) {
            str += "<option value='" + i.toString() + "'>" + i.toString() + "</option>";
    }
    bibleChapterSelect.innerHTML = str;
    bibleChapterSelect.value = "";
    bibleContents.innerHTML = "Pick a chapter.";
    //showBibleChapterUsingDoubleSelect();
    //???????????????????????????????????????? above needed???//
}
function populateCommentaryChapterSelect() {
    let book = commentaryBookSelect.value;
    let str = "";
    for (let i = 0;
        i < 200;
        i++) {
            if (jfbKeys.includes(book + "." + i.toString())) {
                console.log("includes", book + "." + i.toString());
                str += "<option value='" + i.toString() + "'>" + i.toString() + "</option>";
            }
    }
    commentaryChapterSelect.innerHTML = str;
    commentaryChapterSelect.value = "";
    commentaryContents.innerHTML = "Pick a chapter.";
    showCommentaryChapterUsingDoubleSelect();

}
function showCommentaryChapterUsingDoubleSelect() {
    console.log("called");
    let book = commentaryBookSelect.value;
    let chapter = commentaryChapterSelect.value;
    if (chapter === "") {
        return;
    }
    console.log(book, typeof (book));
    console.log(chapter, typeof (chapter));
    let osisRef = book + "." + chapter;
    console.log(osisRef);
    let contents = JFB[osisRef];
    contents = convertPlainText(contents);
    contents = tagRefsAndWords(contents, "<span class='osis'>", "</span>", "<span class='word'>", "</span>");
    commentaryContents.innerHTML = contents;
    addEventListenersToWords();
    addEventListenersToReferences();

}
populateBibleChapterSelect();
populateCommentaryChapterSelect();
function showBibleChapterUsingDoubleSelect() {
    console.log("called");
    let book = bibleBookSelect.value;
    let chapter = bibleChapterSelect.value;
    if (chapter === "") {
        return;
    }
    let osisRef = book + "." + chapter;
    let chapterContents = "";
    chapterContents = "<h2>" + OSISTOFULLNAME[book].toUpperCase() + " " + chapter + "</h2>";
    for (let i = 0;
        i < 200;
        i++) {
        if (nestedBible[book][chapter][i.toString()] !== undefined) {
            let currentBCV = book + "." + chapter + "." + i.toString();
            if (PARAGRAPHLOCATIONS.includes(currentBCV) && (i > 1)) {
                chapterContents += "<br><br>";
            }
            if (HEADINGS[currentBCV] !== undefined) {
                chapterContents += "<h3>" + HEADINGS[currentBCV] + "</h3>";
            }
            console.log(currentBCV);
            if (!useRedLetters) {
                chapterContents += "<sup>" + i.toString() + ".</sup>" + nestedBible[book][chapter][i.toString()];
            }
            else {
                if (REDLETTERREFERENCES.includes(currentBCV)) {
                    console.log("found red letter");
                    chapterContents += "<span class='redletter\'><sup>" + i.toString() + ".</sup>" + nestedBible[book][chapter][i.toString()] + "</span>";
                } else {
                    console.log("no red letters");
                    chapterContents += "<sup>" + i.toString() + ".</sup>" + nestedBible[book][chapter][i.toString()];
                }
            }
        }
    }
    chapterContents = tagRefsAndWords(chapterContents, "<span class='osis'>", "</span>", "<span class='word'>", "</span>");
    bibleContents.innerHTML = chapterContents;
    addEventListenersToWords();

}
showBibleChapterUsingDoubleSelect();
generateDictionaryWords();
let searchBox = document.getElementById('dictionary-input');
searchBox.addEventListener('input', generateList);
function generateList() {
    let prefix = searchBox.value;
    let wordResultList = [];
    if (prefix.trim() === "") {
        document.getElementById('search-result-list').innerHTML = "";
        return;
    }
    for (let i = 0;
        i < dictionaryWords.length;
        i++) {
            if (dictionaryWords[i].toLowerCase().indexOf(prefix.toLowerCase()) !== -1) {
                wordResultList.push(dictionaryWords[i]);
            }
    }
    console.log(wordResultList);
    document.getElementById('search-result-list').innerHTML = buildUnorderedList(wordResultList);
    addEventListenersToWords();

}
function buildUnorderedList(arr) {
    let str = "";
    for (let i = 0;
        i < arr.length;
        i++) {
            str += "<li class='word generated-search-list-element'>" + arr[i] + "</li>";
    }
    return str;

}

function downloadReadingProgress(){
    console.log("downloadReadingProgress called");
    saveStringToTextFile(JSON.stringify(readChapters),"readingProgress",".json");
}
function uploadReadingProgress(){
    console.log("uploadReadingProgress called");
    let fileContents = "";
    let inputTypeIsFile = document.createElement("input");
    inputTypeIsFile.type = "file";
    inputTypeIsFile.addEventListener("change", function () {
        let fileInput = inputTypeIsFile.files[0];
        let fileReader = new FileReader();
        fileReader.onload = function (fileLoadedEvent) {
            let savedData = JSON.parse(fileLoadedEvent.target.result);
            //console.log(readingPlanData);
            readChapters={};
            readChapters=savedData;
            fillChapterCheckBoxValues();
        };
        fileReader.readAsText(fileInput, "UTF-8");
    });
    inputTypeIsFile.click();
}


function saveStringToTextFile(
    str1,
    basename = "readingPlanProgress",
    fileType = ".json"
) {
    let filename = basename + fileType;
    let blobVersionOfText = new Blob([str1], {
        type: "text/plain",
    });
    let urlToBlob = window.URL.createObjectURL(blobVersionOfText);
    let downloadLink = document.createElement("a");
    downloadLink.style.display = "none";
    downloadLink.download = filename;
    downloadLink.href = urlToBlob;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    downloadLink.parentElement.removeChild(downloadLink);
}

bibleBookSelect.value = "Gen";
bibleChapterSelect.value = "1";
showBibleChapterUsingDoubleSelect();
commentaryBookSelect.value = "Gen";
commentaryChapterSelect.value = "1";
showCommentaryChapterUsingDoubleSelect();
showMain('bible');
addEventListenersToNestedMenues();
makeFavicon("B", "white", "blue");
