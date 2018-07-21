searchbar.oninput = function () {
    search();
};

var btns = document.getElementsByClassName("sections");
for (var i = 0; i < btns.length; i++) {
    btns[i].onclick = function () {
        selectSection(this.innerHTML);
    };
}