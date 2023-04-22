var btnclick = document.querySelector("#btn_Click");
var input = document.querySelector("#inputText");
var output=document.querySelector("#outputText");

var url="https://api.funtranslations.com/translate/minion.json"
function urlHandler(text){
   return url + "?" + "text=" + text;
} 

function errorHandler(error){
    console.log("Error occured" , error)
}

function handleEvent(){
    var finalInput = input.value;
    fetch(urlHandler(finalInput))
        .then(response => response.json())
        .then(json =>  {
            output.innerText=json.contents.translated;
        })
        .catch(errorHandler)
}


btnclick.addEventListener("click", handleEvent);
   



