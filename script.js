const card = document.getElementById("card");
const btn = document.getElementById("btn")

const url = "https://api.quotable.io/random";
const author = document.querySelector(".author")
const content = document.querySelector(".content")


function getQuote(){
   
    fetch(url)
    .then((response)=>response.json())
    .then((data)=>{
           author.textContent = data.author;
           content.textContent = data.content

        })
   
      
}




window.addEventListener("load", getQuote)
btn.addEventListener("click", getQuote)
