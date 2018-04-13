function convert() {
    var conv = document.getElementById("conversion");
    document.getElementById("conversion").innerHTML = "";
    var from = (document.getElementById('from').value);
    var to = (document.getElementById('to').value);
    // second argument not supplied
    if ( to  === ""){
        to = parseInt(from) + 10;
    }

    var text = document.createElement("h2");
    text.appendChild(document.createTextNode("Miles to Kilometers"));
    conv.append(text);
    var pre = document.createElement("pre");
    conv.appendChild(pre);
    var tab = pre.appendChild(document.createElement("table"));
    var head = tab.appendChild(document.createElement("thead"));
    var row = head.appendChild(document.createElement("tr"));
    var h = row.appendChild(document.createElement("th"));
    h.appendChild(document.createTextNode("Miles"));
    h = row.appendChild(document.createElement("th"));
    h.appendChild(document.createTextNode("Kilometers"));
    var body = tab.appendChild(document.createElement("tbody"));
    // ascending vs descending order
    if (from > to){
        for (var i = from; i >= to; i--) {
            row = body.appendChild(document.createElement("tr"));
            if (i % 2 == 0) row.setAttribute("class", "even");
            else row.setAttribute("class", "odd");
            var data = row.appendChild(document.createElement("td"));
            data.appendChild(document.createTextNode(i));
            data = row.appendChild(document.createElement("td"));
            data.appendChild(document.createTextNode(k2m(i)));
        }
    }
    else{
        for (var i = from; i <= to; i++) {
            row = body.appendChild(document.createElement("tr"));
            if (i % 2 == 0) row.setAttribute("class", "even");
            else row.setAttribute("class", "odd");
            var data = row.appendChild(document.createElement("td"));
            data.appendChild(document.createTextNode(i));
            data = row.appendChild(document.createElement("td"));
            data.appendChild(document.createTextNode(k2m(i)));
        }
    }
    // check value to be positive
    if (from < 0 || to < 0){
        document.getElementById("conversion").innerHTML = "";
        alert("The value must be positive");
    }

}
function k2m(c){
    return (c * 1.609).toFixed(2);
}
// ----------------------------------------------------------------------------------------
function convert2() {
    var conv = document.getElementById("conversion");
    document.getElementById("conversion").innerHTML = "";
    var from = (document.getElementById('from').value);
    var to = (document.getElementById('to').value);
    // second argument not supplied
    if ( to  === ""){
        to = parseInt(from) + 10;
    }
    var text = document.createElement("h2");
    text.appendChild(document.createTextNode("Kilometers to Miles"));
    conv.append(text);
    var pre = document.createElement("pre");
    conv.appendChild(pre);
    var tab = pre.appendChild(document.createElement("table"));
    var head = tab.appendChild(document.createElement("thead"));
    var row = head.appendChild(document.createElement("tr"));
    var h = row.appendChild(document.createElement("th"));
    h.appendChild(document.createTextNode("Kilometers"));
    h = row.appendChild(document.createElement("th"));
    h.appendChild(document.createTextNode("Miles"));
    var body = tab.appendChild(document.createElement("tbody"));
    // ascending vs descending order
    if (from > to){
        for (var i = from; i >= to; i--) {
            row = body.appendChild(document.createElement("tr"));
            if (i % 2 == 0) row.setAttribute("class", "even");
            else row.setAttribute("class", "odd");
            var data = row.appendChild(document.createElement("td"));
            data.appendChild(document.createTextNode(i));
            data = row.appendChild(document.createElement("td"));
            data.appendChild(document.createTextNode(m2k(i)));
        }
    }
    else{
        for (var i = from; i <= to; i++) {
            row = body.appendChild(document.createElement("tr"));
            if (i % 2 == 0) row.setAttribute("class", "even");
            else row.setAttribute("class", "odd");
            var data = row.appendChild(document.createElement("td"));
            data.appendChild(document.createTextNode(i));
            data = row.appendChild(document.createElement("td"));
            data.appendChild(document.createTextNode(m2k(i)));
        }
    }
    // check value to be positive
    if (from < 0 || to < 0){
        document.getElementById("conversion").innerHTML = "";
        alert("The value must be positive");
    }
}
function m2k(c){
    return (0.62137119 * c).toFixed(2);
}

