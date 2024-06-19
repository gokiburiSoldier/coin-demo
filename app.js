var money = document.querySelector("span.money");
var char = ["","YI","ER","SAN","SI","WU","LIU","QI","BA","JIU",""];
var em = document.getElementById("num");
var counter = 1;
var have_had = false;
document.querySelector("div.coin").addEventListener("click",() => {
    if(counter < 9) counter ++;
    else {
        counter = 1;
        if(!have_had) {
            let chengjiu = document.createElement("div");
            chengjiu.className = "chengjiu";
            chengjiu.innerHTML = "<h3>获得成就</h3>归零";
            document.body.appendChild(chengjiu);
            have_had = true;
        }
    }
    money.setAttribute('style',`--m: "${counter}"`);
    em.innerHTML = char[counter];
});