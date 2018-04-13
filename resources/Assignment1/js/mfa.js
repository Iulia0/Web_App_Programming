var arr = [];
function form(){
    var id = document.getElementById("container");
    var pre = document.createElement("pre");
    id.appendChild(pre);

    pre.innerHTML = "<h2>Total marks:</h2>";
    var div = document.createElement("div");
    pre.appendChild(div);
    div.className= "up";
    div.id = "up";

    // 1. Create the button
    var button = document.createElement("button");
    button.innerHTML = "Clear";

// 2. Append somewhere
    var p = document.createElement("p");
    p.appendChild(button);
    pre.appendChild(p);

// 3. Add event handler
    button.addEventListener ("click", function() {
        document.getElementById("up").innerHTML = "";
        for (var i = 0; i < arr.length; i++){
            document.getElementById("mark" + i).selectedIndex = 0;
            document.getElementById("comment" + i).value = "";
        }
    });

    var tab = pre.appendChild(document.createElement("table"));
    var head = tab.appendChild(document.createElement("thead"));
    var row = head.appendChild(document.createElement("tr"));
    var h = row.appendChild(document.createElement("th"));
    h.appendChild(document.createTextNode("Section"));
    h = row.appendChild(document.createElement("th"));
    h.appendChild(document.createTextNode("Max"));
    h = row.appendChild(document.createElement("th"));
    h.appendChild(document.createTextNode("Comments"));
    h = row.appendChild(document.createElement("th"));
    h.appendChild(document.createTextNode("Mark"));




    var body = tab.appendChild(document.createElement("tbody"));

    var line = {Section:"Dynamic Table", Max:"20"};
    arr.push(line);
    line = {Section:"Intellij Usage", Max:"10"};
    arr.push(line);
    line = {Section:"Calendar Control", Max:"30"};
    arr.push(line);
    line = {Section:"Active From", Max:"20"};
    arr.push(line);
    line = {Section:"Object Databse", Max:"15"};
    arr.push(line);
    line = {Section:"Test", Max:"5"};
    arr.push(line);

    for (var i = 0; i < arr.length; i++){
        row = body.appendChild(document.createElement("tr"));
        row.setAttribute("class","mark");
        var data = row.appendChild(document.createElement("td"));
        data.appendChild(document.createTextNode(arr[i].Section)); // here add 1st object
        data = row.appendChild(document.createElement("td"));
        data.appendChild(document.createTextNode(arr[i].Max)); // here add 2nd object
        data = row.appendChild(document.createElement("td"));
        textArea(data); // add the comments section
        data = row.appendChild(document.createElement("td"));
        dropdownList(data,arr[i].Max); // add the drop down list
    }
    actionListener();

}
//---------------------------------------------------------------------------------------------------

function actionListener(){
    for (var i = 0; i < arr.length; i++){
        document.getElementById("mark" + i).addEventListener("change", totalMark);
    }
}

function totalMark() {
    var sum = 0;
    for (var i = 0; i < arr.length; i++){
        var c = document.getElementById("mark" + i);
        var strUser = c.options[c.selectedIndex].value;
        sum =sum + parseInt(strUser);
        console.log(sum);
    }
    document.getElementById("up").innerHTML = sum.toString();

}
var count = 0;
function textArea(data){
    var input = document.createElement("textarea");
    input.maxLength = "1000";
    input.cols = "50";
    input.rows = "6";
    input.id = "comment" + count;
    input.name = "comment" + count;
    count++;

    data.appendChild(input); //appendChild
}
var keepTrack = 0;
function dropdownList(data, mark){
    var select = document.createElement('select');
    select.id = "mark" + keepTrack;
    keepTrack++;

    for (var i = 0; i <= mark; i++){
        // Use the Option constructor: args text, value, defaultSelected, selected
        var option = new Option(i, i, false, false);
        select.appendChild(option);
        // Use createElement to add an option:
        option = document.createElement('option');
        option.value = i;
        option.text = i;
    }
    data.appendChild(select);
}

function clear() {
    document.getElementById("comment").reset();
    document.getElementById("mark").reset();
}
