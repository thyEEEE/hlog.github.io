const blog = document.getElementById("blog")
const currentDate = new Date();
const month = new Intl.DateTimeFormat('en', { month: 'short' }).format(currentDate);
const day = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(currentDate);
const year = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(currentDate);

const formattedDate = `${month} ${day}, ${year}`;

function send() {
    var url = "https://4682ec87-4ade-4c44-8c44-c8040dc13a7f-00-3tq02wghstal8.sisko.replit.dev/";

    var xhr = new XMLHttpRequest();
    xhr.open("POST", url);

    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            console.log(xhr.status);
            console.log(xhr.responseText);
        }
    }
    const data = { date: formattedDate, text: text.value }
    xhr.send(JSON.stringify(data));
}

fetch('https://4682ec87-4ade-4c44-8c44-c8040dc13a7f-00-3tq02wghstal8.sisko.replit.dev/')
    .then(function (body) {
        return body.text(); // <--- THIS PART WAS MISSING
    })
    .then(data => {
        const lines = data.split("\n");
        blog.innerHTML = lines.reverse().join("</br></br>")
    })
    .catch(err => console.error(err));