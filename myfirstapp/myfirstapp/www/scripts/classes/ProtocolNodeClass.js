function ProtocolNode(n, p, s, f) {
    //node variables
    this.name = n;
    this.imageURLstart = s;
    if (f == undefined) {
        this.imageURLfinish = s;
    } else {
        this.imageURLfinish = f;
    }

    //search variables
    this.active = true;
    this.parent = p;
    this.highlights = [];

    //fills the panel given to the function with its images
    this.fillPanel = function (panel) {
        //loops through each image assosiated with the choice
        for (var i = 0; i <= this.imageURLfinish - this.imageURLstart; i++) {
            var image = document.createElement("img");
            var number = String(this.imageURLstart + i);
            while (number.length < 3) {
                number = "0" + number;
            }

            image.src = "images/protocols/treatment-protocols-2018_Page_" + number + ".png";
            image.classList.add("image");
            image.onclick = function () { createEnlargedPhoto(parseInt(number)); };
            panel.appendChild(image);
        }
        return panel;
    }

    //fills the text of the buttons with highlights
    this.fillText = function (button) {
        if (this.highlights.length >= 2) {
            //bubble sort the highlights variable
            for (var i = 0; i < this.highlights.length - 1; i++) {
                for (var a = i; a < this.highlights.length; a++) {
                    if (this.highlights[i].start > this.highlights[a].start) {
                        var temp = this.highlights[i];
                        this.highlights[i] = this.highlights[a];
                        this.highlights[a] = temp;
                        a = i;
                    }
                }
            }
            //sets up for overlapping highlighted words
            for (var i = 0; i < this.highlights.length - 1; i++) {
                if (this.highlights[i].combineCheck(this.highlights[i + 1])) {          
                    this.highlights.splice(i + 1, 0, this.highlights[i].combine(this.highlights[i + 1]));
                    i = 0;
                }
            }
        }

        //exports the entire word with the highlights inside
        var totalLength = 0;
        while (totalLength < this.name.length) {
            if (this.highlights.length > 0) {
                //will loop through this one part of the if statement until there are no more highlights to be done
                var txt = document.createTextNode(this.name.substring(totalLength, this.highlights[0].start));
                totalLength += txt.length;
                button.appendChild(txt);
                var span = document.createElement("span");
                txt = document.createTextNode(this.highlights[0].createStr(this.name));
                totalLength += txt.length;
                span.classList.add("highlight");
                span.style.backgroundColor = "rgba(0,0,255," + String(this.highlights[0].alpha) + ")";
                span.appendChild(txt);
                button.appendChild(span);
                this.highlights.splice(0, 1);
            } else {
                //when there is no more highlights to be done finishes off the rest off the word
                var txt = document.createTextNode(this.name.substring(totalLength, this.name.length));
                totalLength += txt.length;
                button.appendChild(txt);
            }
        }
    }
}

function Highlight(s, l) {
    //highlight variables
    this.start = s;
    this.finish = this.start + l;
    this.str;
    this.alpha = .2;

    //checks to see if this and another highlight over laps
    this.combineCheck = function (highlight) {
        if (this.finish > highlight.start) {
            return true;
        } else {
            return false;
        }
    }

    //adjusts this and the other highlight so they no longer overlap creating a brand new highlight with a higher opacity
    this.combine = function (highlight) {
        var newHighlight = new Highlight(highlight.start, this.finish - highlight.start);
        this.finish = newHighlight.start - 1;
        highlight.start = newHighlight.finish + 1;
        return newHighlight;
    }

    //create the string
    this.createStr = function (string) {
        this.str = string.substring(this.start, this.finish);
        return this.str;
    }
}