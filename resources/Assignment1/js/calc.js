var temp = "";
var status = false;
function event1(x){
    if(x === '+' || x === '-'|| x === '/' || x === '*'){
        if (temp.slice(-1) !== '+' && temp.slice(-1) !== '-' && temp.slice(-1) !== '/' && temp.slice(-1) !== '*'){
            try {
                event2()
            } catch (e) {
                if (e instanceof SyntaxError) {
                    console.log("not yet");
                }
            }
            temp += x;
            console.log("executed");

        }
    }
    else if(temp.slice(-1) === '+' || temp.slice(-1) === '-'||temp.slice(-1) === '/' || temp.slice(-1) === '*'){
        document.getElementById("text1").value= x;
        temp += x;
        console.log("executed");
    }
    else if( x === '.'){
        var e = document.getElementById("text1").value;
        var isDot = false;
        for (var i = 0; i <  e.length; i++){
            if(e.charAt(i) === '.'){
                isDot = true;
            }
        }
        if (!isDot){
            temp += x;
            document.getElementById("text1").value += x;
        }
    }
    else{
        temp += x;
        document.getElementById("text1").value += x;
        console.log("executed");
    }
    console.log("temp: " + temp);
    console.log(("x: ") +document.getElementById("text1").value);

}
function event2(){
    document.getElementById("text1").value = eval(temp);
}
var count = 0;
function event3(){
    count += 1;
    document.getElementById("text1").value = 0;
    if (count === 2){
        count = 0;
        temp = "";
        document.getElementById("text1").value = null;
    }
    console.log("temp: " + temp);
    console.log(("x: ") +document.getElementById("text1").value);
}