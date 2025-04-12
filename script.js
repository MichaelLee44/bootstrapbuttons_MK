let q2check = document.querySelector("#q2-check");
let q3check = document.querySelector("#q3-check")
console.log(q2check)

q2check.addEventListener("click", (answer)=>{
    let score = 0;
    let checked_buttons = document.querySelectorAll(
        "input[type=checkbox]:checked"
    );
    let correct_buttons = document.querySelectorAll("[correct]");

    if(checked_buttons.length>2){
        alert("Please select just two options.")
    } else{
        console.log(correct_buttons);
        console.log(checked_buttons);
        if (checked_buttons[0] == correct_buttons[0] && checked_buttons[1] == correct_buttons[1]){
            document.querySelector("#q2-output").innerHTML = "Correct"
        } else{
            document.querySelector("#q2-output").innerHTML = "Wrong" 
        }
    }
    console.log(score);
});

q3check.addEventListener("click", (answer)=>{
    let correctradio = document.querySelector("#correctradio")
    let output = document.querySelector("#q3-output")

    console.log(correctradio)
    if(correctradio.checked == true){
        output.innerHTML = "Correct"
    } else {
        output.innerHTML = "Wrong"
    }
})