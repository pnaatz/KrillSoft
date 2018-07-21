var x = 0;
var y = 0;
enlarge = false;
function enlarge(number){
    enlarge = !enlarge;

    if (enlarge) {
        createEnlargedPhoto(number);
    } else {
        deleteEnlargedPhoto();
    }
}

function createEnlargedPhoto(number) {
    var picture = document.createElement("img");
    picture.id = "enlarged";
    picture.src = meetSRCRequirements(number);

    var main = document.getElementById("main");
    var enlargedContainer = document.createElement("div");
    enlargedContainer.id = "enlargedContainer";
    main.appendChild(enlargedContainer);
    appendChildren("enlargedContainer", [picture]);

    //to avoid remaking the wheel
    onLoad();
}

function closeEnlarged() {
    var enlargedContainer = document.getElementById("enlargedContainer");
    var main = document.getElementById("main");
    main.removeChild(enlargedContainer);
}

function changeEnlarged(direction) {
    var picture = document.getElementById("enlarged");
    number = picture.src.substring(picture.src.search(".png") - 3, picture.src.search(".png"));
    number = parseInt(number);
    number += direction;
    picture.src = meetSRCRequirements(number);
}

function meetSRCRequirements(number) {
    while (String(number).length < 3) {
        number = String(number);
        number = "0" + number;
    }
    number = "images/protocols/treatment-protocols-2018_Page_" + number + ".png";
    return number;
}