
$(".site").mouseover(()=> {
    $(".site").animate({fontSize: "2.1rem"}, "fast").animate({fontSize: "2rem"}, "fast")
});


// Trombone Sounds

function buttonCheck(button) {
    switch (button) {
        case "1":     
            const bFlat = new Audio("../sounds/bFlat.mp3")
            bFlat.play();
        break;

        case "2":
            const c = new Audio('../sounds/c.mp3');
            c.play();
        break;

        case "3":
            const d = new Audio('../sounds/d.mp3');
            d.play();
        break;

        case "4":
            const eFlat = new Audio('../sounds/eFlat.mp3');
            eFlat.play();
        break;

        case "5":
            const f = new Audio('../sounds/f.mp3');
            f.play();
        break;

        case "6":
            const g = new Audio('../sounds/g.mp3');
            g.play();
        break;

        case "7":
            const a = new Audio('../sounds/a.mp3');
            a.play();
        break;

        case "8":
            const bFlatHigh = new Audio('../sounds/bFlatHigh.mp3');
            bFlatHigh.play();
        break;

        default: console.log(button);
}}

document.addEventListener("keydown", (event) => {
    buttonCheck(event.key);
    buttonAnimation(event.key)
});

function buttonAnimation(currentKey) {
    const activeBtn = document.querySelector(".note-" + currentKey); 
    activeBtn.classList.add("pressed");
    setTimeout(() => activeBtn.classList.toggle("pressed"), 200);
}
