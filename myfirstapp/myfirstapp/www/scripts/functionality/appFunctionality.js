//creates node
function createNode(node) {
    name = node.name;
    var btn = document.createElement("button");
    btn.classList.add("accordion");
    node.fillText(btn);
    var panel = document.createElement("div");
    panel = node.fillPanel(panel);
    panel.classList.add("panel");

    appendChildren("options", [ btn, panel ]);

    btn.addEventListener("click", function () {
        //accordion functionality
        this.classList.toggle("active");
        var panel = this.nextElementSibling;

        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });

}

function appendChildren(parentName, theChildren) {
    //loops through array of children until all have been pended
    var parent = document.getElementById(parentName);
    for (var i = 0; i < theChildren.length; i++) {
        parent.appendChild(theChildren[i]);
    }
}

function resetSection(section) {
    //set up useful variables
    var main = document.getElementById("main");
    var selection = document.getElementById(section);
    var nextElement = selection.nextElementSibling;

    //deletes and resets the target
    main.removeChild(selection);
    selection = document.createElement("div");
    selection.id = section;
    main.insertBefore(selection, nextElement);
}

function createNfill(create, fill) {
    //creates nodes and fills them with thte desired text
    var object = document.createElement(create);
    var text = document.createTextNode(fill);
    object.appendChild(text);

    return object;
}

function createSelections(active) {
    resetSection("sections");
    var sections = document.getElementById("sections");

    if (active == "") {
        //craetes all buttons if that button has a child that pretains to the search criteria
        var btns = document.getElementsByClassName("sections");
        for (var i = 0; i < nodes.length; i++) {
            var create = true;
            for (var a = 0; a < btns.length; a++) {
                if (btns[a].innerHTML.toLowerCase() == nodes[i].parent.toLowerCase()) {
                    create = false;
                }
            }
            if (create && nodes[i].active) {
                var button = createNfill("button", nodes[i].parent);
                button.onclick = function () {
                    selectSection(this.innerHTML);
                };
                button.classList.toggle("sections");
                sections.appendChild(button);
            }
        }
    } else {
        //creates only the chosen tab and the back button
        var button = createNfill("button", active);
        button.onclick = function () {
            selectSection(active);
        };
        button.id = "active";
        button.classList.toggle("sections");

        var back = createNfill("button", "BACK");
        back.onclick = function () {
            //undose all section settings
            var active = document.getElementById("active");
            active.id = "";
            search("");
        };
        back.id = "back";
        back.classList.toggle("sections");
        appendChildren("sections", [back, button]);
    }
}