//the array that runs everything
var nodes = [];

var section = "";
var searchbar = document.getElementById("searchBar");

function search(s) {
    //set up global variables
    if (s != undefined) {
        section = s;
    }

    //order of operations
    keyWords = assembleKeyWords();

    resetSection("options");

    runSearchAlgorith();

    createSelections(section);
}

function selectSection(keyWord) {
    search(keyWord);
}

function assembleKeyWords() {
    //sets up the first element
    var keyWords = [];
    keyWords.push(searchbar.value);

    //removes the space at the end if there is one
    if (keyWords[0].substring(keyWords[0].length - 1) == " ") {
        keyWords[0] = keyWords[0].substring(0, keyWords[0].length - 1);
    }

    //by manipulating the most recently added keyword it turns the raw input into a series of keywords defined by the usage of spaces inside the search bar 
    while (keyWords[keyWords.length - 1].search(" ") != -1) {
        var arg = keyWords[keyWords.length - 1];
        var next = arg.substring(arg.search(" ") + 1);
        keyWords[keyWords.length - 1] = arg.substring(0, arg.search(" "));
        keyWords.push(next);
    }

    return keyWords;
}

function runSearchAlgorith() {
    //for each possible node
    for (let i = 0; i < nodes.length; i++) {
        //resets the node
        nodes[i].active = true;
        nodes[i].highlights = [];
        for (let a = 0; a < keyWords.length; a++) {
            //logic set up for the search bar
            var sectionMatch = (nodes[i].parent.toLowerCase() == section.toLowerCase() || section == "");
            var searchMatch = (nodes[i].name.toLowerCase().search(keyWords[a].toLowerCase()) != -1 || keyWords[a] == "");

            //the decision maker that decides whether the individual node meets search bar criteria
            if (!sectionMatch || !searchMatch) {
                nodes[i].active = false;
                nodes[i].highlights = [];
                break;
            } else if (searchMatch) {
                var temp = new Highlight(nodes[i].name.toLowerCase().search(keyWords[a].toLowerCase()), keyWords[a].length);
                nodes[i].highlights.push(temp);
            }
        }
        //if the node is still active at this point it has all its highligh settings set up and meets the search criteria
        if (nodes[i].active) {
            createNode(nodes[i]);
        }
    }
}