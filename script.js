function displayAlert() {
    alert("Loading weather report...");
}

function dismissCookie() {
    document.getElementById("cookie").remove();
}

function convertTemp(element) {
    console.log(element.value);
    for (var i = 1; i <= 8; i++) {
        if (element.value == "C") {
            document.querySelector("#t" + i).innerText = Math.round((9 / 5 * parseInt(document.querySelector("#t" + i).innerText)) + 32);
        } else {
            document.querySelector("#t" + i).innerText = Math.round((5 / 9 * parseInt(document.querySelector("#t" + i).innerText)) - 32);
        }
    }
}