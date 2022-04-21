var translatebutton = document.querySelector("#translate");
var inputtext = document.querySelector("#input");
var outputtext = document.querySelector("#output");

var serverURL = "https://api.funtranslations.com/translate/braille.json"

function errorHandler(error){
    console.log("Error occured", error);
    alert("Try later- server down");
}


function clickHandler(){
    var inputtext1 = inputtext.value;

    fetch(getTranslation(inputtext1))
    .then(response =>response.json())
    .then(json =>{
        var translatedtext = json.contents.translated;
         outputtext.innerText = translatedtext;
    })
    .catch(errorHandler)
};

function getTranslation(text){
    return serverURL+"?"+"text="+text;
}

translatebutton.addEventListener("click", clickHandler)
