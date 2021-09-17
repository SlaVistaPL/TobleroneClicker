console.log("%cZaczekaj!","color: #F93154; font-size: 20px");
console.log("Jeżeli ktoś powiedział Ci, żeby coś tutaj wkleić - istnieje duża szansa, że dajesz się właśnie zrickrollować.");
console.log("Jeżeli mimo wszystko wiesz, co robisz, kliknij w ten link: https://svst.pl/how-to-get-unlimited-toblerone-points");

function countToblerone() {
    localStorage.setItem("tobclicks", Number(localStorage.getItem("tobclicks")) + 1);
    return document.getElementById("clicks").innerHTML = `Tobleron Points: ${Number(localStorage.getItem("tobclicks"))}`;
}

function loadShopData() {
    // elementy
    let buyItemOneButton = document.getElementById("buy-item-1");
    let buyItemTwoButton = document.getElementById("buy-item-2");
    let buyItemThreeButton = document.getElementById("buy-item-3");
    let buyItemFourButton = document.getElementById("buy-item-4");

    // nie miałem innego wyjścia. przepraszam
    if (localStorage.getItem("tobclicks") < 50) {
        buyItemOneButton.disabled = true;
        buyItemOneButton.innerHTML = "<i class='fas fa-times'></i> Nie stać Cię!";
    } else if (localStorage.getItem("itemOneBought")) {
        buyItemOneButton.disabled = true;
        buyItemOneButton.innerHTML = "<i class='fas fa-times'></i> Już to posiadasz!";
    } else {
        buyItemOneButton.disabled = false;
        buyItemOneButton.innerHTML = "<i class='fas fa-shopping-basket'></i> Kup ulepszenie";
    }

    if (localStorage.getItem("tobclicks") < 100) {
        buyItemTwoButton.disabled = true;
        buyItemTwoButton.innerHTML = "<i class='fas fa-times'></i> Nie stać Cię!";
    } else if (localStorage.getItem("itemTwoBought")) {
        buyItemTwoButton.disabled = true;
        buyItemTwoButton.innerHTML = "<i class='fas fa-times'></i> Już to posiadasz!";
    } else {
        buyItemTwoButton.disabled = false;
        buyItemTwoButton.innerHTML = "<i class='fas fa-shopping-basket'></i> Kup ulepszenie";
    }

    if (localStorage.getItem("tobclicks") < 250) {
        buyItemThreeButton.disabled = true;
        buyItemThreeButton.innerHTML = "<i class='fas fa-times'></i> Nie stać Cię!";
    } else if (localStorage.getItem("itemThreeBought")) {
        buyItemThreeButton.disabled = true;
        buyItemThreeButton.innerHTML = "<i class='fas fa-times'></i> Już to posiadasz!";
    } else {
        buyItemThreeButton.disabled = false;
        buyItemThreeButton.innerHTML = "<i class='fas fa-shopping-basket'></i> Kup ulepszenie";
    }

    if (localStorage.getItem("tobclicks") < 1000) {
        buyItemFourButton.disabled = true;
        buyItemFourButton.innerHTML = "<i class='fas fa-times'></i> Nie stać Cię!";
    } else if (localStorage.getItem("itemFourBought")) {
        buyItemFourButton.disabled = true;
        buyItemFourButton.innerHTML = "<i class='fas fa-times'></i> Już to posiadasz!";
    } else {
        buyItemFourButton.disabled = false;
        buyItemFourButton.innerHTML = "<i class='fas fa-shopping-basket'></i> Kup ulepszenie";
    }

    // automatyczne naliczanie na podstawie zakupionych ulepszeń
    if (localStorage.getItem("itemOneBought")) {
        setInterval(function() {
            localStorage.setItem("tobclicks", Number(localStorage.getItem("tobclicks")) + 0.5);
            document.getElementById("clicks").innerHTML = `Tobleron Points: ${Number(localStorage.getItem("tobclicks"))}`;
        }, 1000);
    } else return;
    if (localStorage.getItem("itemTwoBought")) {
        setInterval(function() {
            localStorage.setItem("tobclicks", Number(localStorage.getItem("tobclicks")) + 1);
            document.getElementById("clicks").innerHTML = `Tobleron Points: ${Number(localStorage.getItem("tobclicks"))}`;
        }, 1000);
    } else return;
    if (localStorage.getItem("itemThreeBought")) {
        setInterval(function() {
            localStorage.setItem("tobclicks", Number(localStorage.getItem("tobclicks")) + 2);
            document.getElementById("clicks").innerHTML = `Tobleron Points: ${Number(localStorage.getItem("tobclicks"))}`;
        }, 1000);
    } else return;
    if (localStorage.getItem("itemFourBought")) {
        setInterval(function() {
            localStorage.setItem("tobclicks", Number(localStorage.getItem("tobclicks")) + 5);
            document.getElementById("clicks").innerHTML = `Tobleron Points: ${Number(localStorage.getItem("tobclicks"))}`;
        }, 1000);
    } else return;
}

function buyItemOne() {
    let buyItemOneButton = document.getElementById("buy-item-1");
    if (localStorage.getItem("tobclicks") < 50) alert("Nie stać Cię na to ulepszenie!");
    else if (localStorage.getItem("itemOneBought")) alert("Już posiadasz to ulepszenie!");
    else {
        localStorage.setItem("tobclicks", Number(localStorage.getItem("tobclicks")) - 50);
        document.getElementById("clicks").innerHTML = `Tobleron Points: ${Number(localStorage.getItem("tobclicks"))}`;
        localStorage.setItem("itemOneBought", true);
        buyItemOneButton.disabled = true;
        buyItemOneButton.innerHTML = "<i class='fas fa-times'></i> Już to posiadasz!";
    }
}

function buyItemTwo() {
    let buyItemTwoButton = document.getElementById("buy-item-2");
    if (localStorage.getItem("tobclicks") < 100) alert("Nie stać Cię na to ulepszenie!");
    else if (localStorage.getItem("itemTwoBought")) alert("Już posiadasz to ulepszenie!");
    else {
        localStorage.setItem("tobclicks", Number(localStorage.getItem("tobclicks")) - 100);
        document.getElementById("clicks").innerHTML = `Tobleron Points: ${Number(localStorage.getItem("tobclicks"))}`;
        localStorage.setItem("itemTwoBought", true);
        buyItemTwoButton.disabled = true;
        buyItemTwoButton.innerHTML = "<i class='fas fa-times'></i> Już to posiadasz!";
    }
}

function buyItemThree() {
    let buyItemThreeButton = document.getElementById("buy-item-3");
    if (localStorage.getItem("tobclicks") < 250) alert("Nie stać Cię na to ulepszenie!");
    else if (localStorage.getItem("itemThreeBought")) alert("Już posiadasz to ulepszenie!");
    else {
        localStorage.setItem("tobclicks", Number(localStorage.getItem("tobclicks")) - 250);
        document.getElementById("clicks").innerHTML = `Tobleron Points: ${Number(localStorage.getItem("tobclicks"))}`;
        localStorage.setItem("itemThreeBought", true);
        buyItemThreeButton.disabled = true;
        buyItemThreeButton.innerHTML = "<i class='fas fa-times'></i> Już to posiadasz!";
    }
}

function buyItemFour() {
    let buyItemFourButton = document.getElementById("buy-item-4");
    if (localStorage.getItem("tobclicks") < 1000) alert("Nie stać Cię na to ulepszenie!");
    else if (localStorage.getItem("itemFourBought")) alert("Już posiadasz to ulepszenie!");
    else {
        localStorage.setItem("tobclicks", Number(localStorage.getItem("tobclicks")) - 1000);
        document.getElementById("clicks").innerHTML = `Tobleron Points: ${Number(localStorage.getItem("tobclicks"))}`;
        localStorage.setItem("itemFourBought", true);
        buyItemFourButton.disabled = true;
        buyItemFourButton.innerHTML = "<i class='fas fa-times'></i> Już to posiadasz!";
    }
}

function checkSupport() {
    if (typeof(Storage) !== "undefined") {
        if (localStorage.getItem("tobclicks") === null) return localStorage.setItem("tobclicks", Number(0));
        return document.getElementById("clicks").innerHTML = `Tobleron Points: ${Number(localStorage.getItem("tobclicks"))}`;
    } else {
        document.getElementById("game").innerHTML = "Sorry to bother you, but your browser does not support some JavaScript parts (like LocalStorage for saving your progress) to function properly.";
    }
}