//first rec
let colorWhite = document.getElementById("colorWhite");
colorWhite.style.backgroundColor ="white";


//second rec
let colorLightblue = document.getElementById("colorLightblue");
colorLightblue.style.backgroundColor = "lightblue";

//third rec
let colorGreen = document.getElementById("colorGreen");
colorGreen.style.backgroundColor ="green";

//fourth rec
let colorCyan = document.getElementById("colorCyan");
colorCyan.style.backgroundColor = "cyan";

//fifth rec
let colorIndigo = document.getElementById("colorIndigo");
colorIndigo.style.backgroundColor = "indigo";

//sixth rec
let colorPink = document.getElementById("colorPink");
colorPink.style.backgroundColor = "pink";


//seventh rec
let colorYellow = document.getElementById("colorYellow");
colorYellow.style.backgroundColor = "yellow";

//eigth rec
let colorSkyblue = document.getElementById("colorSkyblue");
colorSkyblue.style.backgroundColor = "skyblue";

//nineth rec
let colorGrey = document.getElementById("colorGrey");
colorGrey.style.backgroundColor ="grey";

//tenth rec
let colorRed = document.getElementById("colorRed");
colorRed.style.backgroundColor = "red";


let recId = ["colorWhite", "colorLightblue","colorGreen", "colorCyan", "colorIndigo", "colorPink"," colorYellow", "colorSkyblue", "colorGrey", "colorRed"]
function consoleLoger(arrId){
    let i = 0;
   do{
        console.log(arrId[i]);
        i++;
    }while(i<=arrId.length)
    return 1;
}
let stopInterval = setInterval(() => {
    consoleLoger(recId);
}, 1000);
//clearInterval(stopInterval);

