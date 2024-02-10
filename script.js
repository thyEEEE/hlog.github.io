import secret from "./config.js"

const main = document.getElementById("tweet")

function isEven(value) {
    return !(value % 2)
}
fetch(secret.url)
    .then(function (body) {
        return body.text();
    })
    .then(data => {
        const lines = data.split("\n");
        let joinedLines = []
        for (let i = 0; i < lines.length; i++) {
            if (isEven(i)) {
                if (i === 0) {
                    joinedLines.push(lines[i])
                } else {
                    joinedLines.push("")
                    joinedLines.push(lines[i])
                }
            } else {
                joinedLines.push(lines[i])
            }
        }
        // main.innerHTML = joinedLines;
        main.innerHTML = `${joinedLines.join(" ")}</p1>`
    })
    .catch(err => console.error(err));
