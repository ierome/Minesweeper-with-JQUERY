let oneLeft = document.querySelector('.oneLeft');
let oneRight = document.querySelector('.oneRight');
let twoLeft = document.querySelector('.twoLeft');
let twoRight = document.querySelector('.twoRight');
let threeLeft = document.querySelector('.threeLeft');
let threeRight = document.querySelector('.threeRight');
let twoButtons = document.querySelector('.twoButtons');
let threeButtons = document.querySelector('.threeButtons');
let winnerText = document.querySelector('.winner');
winCount = 0;
lossCount = 0;

document.getElementById("wins").innerHTML = winCount;
document.getElementById("losses").innerHTML = lossCount;

oneLeft.addEventListener("click", function(){
    document.getElementById("r1").innerHTML = "BOOM! Sorry try again!";
    lossCount++
    document.getElementById("losses").innerHTML = lossCount;
    setTimeout(function(){
        document.getElementById("r1").innerHTML = " ";
    }, 2000);
})
oneRight.addEventListener("click", function(){
    twoButtons.style.visibility = "visible"
})
twoLeft.addEventListener("click", function(){
    document.getElementById("r2").innerHTML = "BOOM! Sorry try again!";
    lossCount++
    document.getElementById("losses").innerHTML = lossCount;
    setTimeout(function(){
        document.getElementById("r2").innerHTML = " ";
        twoButtons.style.visibility = "hidden"
    }, 2000);
})
twoRight.addEventListener("click", function(){
    threeButtons.style.visibility = "visible"
})
threeLeft.addEventListener("click", function(){
    winnerText.style.visibility = "visible"
    winCount++
    document.getElementById("wins").innerHTML = winCount;
    setTimeout(function(){
        winnerText.style.visibility = "hidden"
        twoButtons.style.visibility = "hidden"
        threeButtons.style.visibility = "hidden"
    }, 5000);

})
threeRight.addEventListener("click", function(){
    document.getElementById("r3").innerHTML = "BOOM! Sorry try again!";
    lossCount++
    document.getElementById("losses").innerHTML = lossCount;
    setTimeout(function(){
        document.getElementById("r3").innerHTML = " ";
        twoButtons.style.visibility = "hidden"
        threeButtons.style.visibility = "hidden"
    }, 2000);
})