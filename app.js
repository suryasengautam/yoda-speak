var btntranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

var serverUrl = "https://api.funtranslations.com/translate/yoda.json"


function getTranslationURL(serverUrl) {
    return serverUrl + "?" + "text=" + txtInput.value
    
}


function errorHandler(error) {
    console.log("error",error);
    alert("something went wrong with the server. please try after some time")
}

function clickHandler() {
    // calloing server for processing
    fetch(getTranslationURL(serverUrl))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            outputDiv.innerText=translatedText;
             })
        .catch(errorHandler)
    
};


btntranslate.addEventListener("click",clickHandler)
