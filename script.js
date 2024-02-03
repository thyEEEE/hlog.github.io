import secret from "./config.js"

const main = document.getElementById("tweet")
function add() {
    var url = secret.url;

    var xhr = new XMLHttpRequest();
    xhr.open("POST", url);

    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            console.log(xhr.status);
            console.log(xhr.responseText);
        }
    }
    const data = { text: new Date().toLocaleString() + " - " + ` [${username.replace("null", "anonymous")}] ` + text.value }
    xhr.send(JSON.stringify(data));
    text.value = ""
}

// function isEven(value) {
//     return !(value % 2)
// }

// setInterval(() => {
//     fetch(secret.url)
//         .then(function (body) {
//             return body.text();
//         })
//         .then(data => {
//             const lines = data.split("\n");
//             let joinedLines = []
//             for (let i = 0; i < lines.length; i++) {
//                 if (isEven(i)) {
//                     if (i === 0) {
//                         joinedLines.push(lines[i])
//                     } else {
//                         joinedLines.push("<br/><br/>")
//                         joinedLines.push(lines[i])
//                     }
//                 } else {
//                     joinedLines.push(lines[i])
//                 }
//             }
//             // main.innerHTML = joinedLines;
//                 main.innerHTML = joinedLines.join(" ")
//         })
//         .catch(err => console.error(err));
// }, 50)
