var txtInput = document.querySelector("#text-input")
var btnTranslate = document.querySelector("#translate-groot")
var outputDiv = document.querySelector("#translated-output")

var serverURL = "https://api.funtranslations.com/translate/groot.json"

function generateUrl(input){

    return serverURL + "?" + "text=" + input;
}

//catch error

function errorHandler(error){
    console.log("Error occured", error);
    alert("Oops! There is a surver error.Please try again")
}


function clickHandler(){

    var inputText = txtInput.value;

    fetch(generateUrl(serverURL))
        .then(response=>response.json())
        .then(json =>{
            var translatedText = json.contents.translated;
            outputDiv.innerText = translatedText;//output
        })
        .catch(errorHandler)
}

btnTranslate.addEventListener("click",clickHandler)