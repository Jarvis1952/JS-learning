const buttons = document.querySelectorAll('.button');
const body = document.querySelector("body");

buttons.forEach(function (btn) {
    console.log(btn)
    btn.addEventListener('click',function(event){
        console.log(event)
        body.style.backgroundColor = btn.id;
    })
})  