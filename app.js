var btnclick = document.querySelector("#btn_Click");
var input = document.querySelector("#inputText");
var output=document.querySelector("#outputText");


btnclick.addEventListener("click", function handleEvent() {
    // console.log("input", input.value);
    console.log(output.innerText = "hello " + input.value);

}); 



