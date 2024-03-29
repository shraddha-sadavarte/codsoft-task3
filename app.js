function buttonPress(buttonvalue)
    {
        let calText=document.querySelector(".input-screen").value + buttonvalue + " ";
        document.querySelector(".input-screen").value=calText;
    }
function calculate()
    {
        let calText=document.querySelector(".input-screen").value;
        document.querySelector(".input-screen").value=eval(calText);  
    }
function clearScreen()
    {
        document.querySelector(".input-screen").value="";
    }

function disableEnableButtons(disable){
    const buttons=document.querySelectorAll('.myBtn');
    buttons.forEach(button => {
        button.disabled=disable;
    });
}

document.getElementById('disableBtn').addEventListener('click', function(){
    disableEnableButtons(true);
});

document.getElementById('enableBtn').addEventListener('click', function(){
    disableEnableButtons(false);
});