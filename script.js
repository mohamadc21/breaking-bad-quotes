const authorEl = document.querySelector(".author");
const quoteEl = document.querySelector(".quote");
const profile = document.querySelector(".profile");
const generate = document.querySelector(".generate");

const apiURL = 'https://api.breakingbadquotes.xyz/v1/quotes';

function generateQuote() {
    quoteEl.innerHTML = '';
    generate.disabled = true;
    fetch(apiURL)
    .then(res => res.json())
    .then(resData => {
        const author = resData[0].author;
        const quote = resData[0].quote;
        let i = 0;
        const intrval = setInterval(() => {
            quoteEl.innerHTML += quote[i];
            i++;
            if(i == quote.length) {
                clearInterval(intrval);
                generate.disabled = false
            }
        }, 50)
        authorEl.innerHTML = author;
    
        if(author.toLowerCase() == "jesse pinkman") {
            profile.src = "./images/jesse.jpg";
        } else if(author.toLowerCase() == "gustavo fring") {
            profile.src = "./images/gus.jpg";
        } else if(author.toLowerCase() == "walter white") {
            profile.src = "./images/walter.jpg";
        } else if(author.toLowerCase() == "hank schrader") {
            profile.src = "./images/hank.jpg";
        } else if(author.toLowerCase() == "skyler white") {
            profile.src = "./images/skyler.jpg";
        } else if(author.toLowerCase() == "saul goodman") {
            profile.src = "./images/saulgoodman.jpg";
            profile.style.objectPosition = "top";
        } else if(author.toLowerCase() == "mike ehrmantraut") {
            profile.src = "./images/mike.jpg";
        }
    
    });
    
}

generateQuote();

generate.addEventListener('click', generateQuote)