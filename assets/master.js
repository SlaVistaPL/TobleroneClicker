function countToblerone() {
    localStorage.setItem("tobclicks", Number(localStorage.getItem("tobclicks")) + 1);
    return document.getElementById("clicks").innerHTML = `Clicks: ${Number(localStorage.getItem("tobclicks"))}`;
}

function checkSupport() {
    if (typeof(Storage) !== "undefined") {
        if (localStorage.getItem("tobclicks") === null) return localStorage.setItem("tobclicks", Number(0));
        return document.getElementById("clicks").innerHTML = `Clicks: ${Number(localStorage.getItem("tobclicks"))}`;
    } else {
        document.getElementById("game").innerHTML = "Sorry to bother you, but your browser does not support some JavaScript parts (like LocalStorage for saving your progress) to function properly.";
    }
}