
let boxes = document.querySelectorAll(".boxes");
let btn = document.querySelector("button");

function getColor(){

    const val1 = Math.floor(Math.random()*255);
    const val2 = Math.floor(Math.random()*255);
    const val3 = Math.floor(Math.random()*255);

    return `rgb(${val1}, ${val2}, ${val3})`;
}


btn.addEventListener("click" , () => {
    boxes.forEach((boxess) => {
    
        boxess.style.backgroundColor = getColor();;
        boxess.style.color = getColor();
        btn.style.color = getColor();
        btn.style.backgroundColor = getColor();

    }
    )
})
