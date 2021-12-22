
$(".site").mouseover(()=> {
    $(".site").animate({fontSize: "2.1rem"}, "fast").animate({fontSize: "2rem"}, "fast")
});


// Trombone Sounds

function buttonCheck(button) {
    if ($(".notes-container").css("display") === "inline-block") {
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
                let d = new Audio('../sounds/d.mp3');
                if ($("#minor").prop("checked")) {
                    d = new Audio('../sounds/dFlat.mp3');
                }         
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
                let a = new Audio('../sounds/a.mp3');
                if ($("#minor").prop("checked")) {
                    a = new Audio('../sounds/aFlat.mp3');
                }
                a.play();
            break;
    
            case "8":
                const bFlatHigh = new Audio('../sounds/bFlatHigh.mp3');
                bFlatHigh.play();
            break;
    
            default: console.log(button);
    }
    
}}


document.addEventListener("keydown", (event) => {
    try {
        buttonCheck(event.key);
        buttonAnimation(event.key)
    } 
    catch(err) {
        console.log(err)
    }    
});

function clickEvent(event) {
    try {
        const classString = event.path[0].classList.value
        const button = classString[classString.length-1]
        buttonCheck(button);
        buttonAnimation(button)
    }
    catch(err) {
    }
}

document.addEventListener("click", clickEvent)

// document.addEventListener("click", (event) => {
//     try {
//         const classString = event.path[0].classList.value
//         const button = classString[classString.length-1]
//         buttonCheck(button);
//         buttonAnimation(button)
//     }
//     catch(err) {
//     }
// });


function buttonAnimation(currentKey) {
    console.log(currentKey)
    const activeBtn = document.querySelector(".note-" + currentKey); 
    console.log(activeBtn)
    activeBtn.classList.add("pressed");
    setTimeout(() => activeBtn.classList.toggle("pressed"), 200);
}

$("#free").click(() => {
    $(".notes-container").css("display", "inline-block");
    $("#boneHeader").text("Play your horn, man")
})

$("#major").change(() => {
    $(".note-3").text("D")
    $(".note-7").text("A")
})

$("#minor").change(() => {
    $(".note-3").text("Db")
    $(".note-7").text("Ab")
})


// Game

class Game {
    constructor() {
        this.noteArr = [".note-1", ".note-2", ".note-3", ".note-4", ".note-5", ".note-6", ".note-7", ".note-8"];
        this.gamePattern = []
        this.userPattern = []
        this.score = 0
        this.playing = true
    }

    nextSequence() {
        const randomNumber = Math.floor(Math.random() * 8)
        this.gamePattern.push(this.noteArr[randomNumber])
    }

    loadGamePattern(num) {
        this.gamePattern = []
        for (let i=0; i<num; i++) {
            this.nextSequence()
        }
    }

    playNote(element) {
        console.log(element)
        switch (element) {
            case ".note-1":     
                const bFlat = new Audio("../sounds/bFlat.mp3")
                bFlat.play();
            break;
    
            case ".note-2":
                const c = new Audio('../sounds/c.mp3');
                c.play();
            break;
    
            case ".note-3":
                const d = new Audio('../sounds/d.mp3');  
                d.play();
            break;
    
            case ".note-4":
                const eFlat = new Audio('../sounds/eFlat.mp3');
                eFlat.play();
            break;
    
            case ".note-5":
                const f = new Audio('../sounds/f.mp3');
                f.play();
            break;
    
            case ".note-6":
                const g = new Audio('../sounds/g.mp3');
                g.play();
            break;
    
            case ".note-7":
                const a = new Audio('../sounds/a.mp3');
                a.play();
            break;
    
            case ".note-8":
                const bFlatHigh = new Audio('../sounds/bFlatHigh.mp3');
                bFlatHigh.play();
            break;
        }
        const activeBtn = document.querySelector(element); 
        activeBtn.classList.add("pressed");
        setTimeout(() => activeBtn.classList.toggle("pressed"), 200);
    }

    playNotes() {
        let time = 1000
        for (const i in this.gamePattern) {
            setTimeout(() => {
                this.playNote(this.gamePattern[i]);
            }, time)
            time = time + 1000
        }
    }

    checkPattern() {
        for (let i=0; i<this.gamePattern.length; i++) {
            if (this.gamePattern[i] !== this.userPattern[i]) {
                return false;
            }
        }
        return true;
    }
}





$("#play").click(() => {
    document.removeEventListener("click", clickEvent)
    $(".notes-container").css("display", "inline-block");
    $("#boneHeader").text("See if you can play back the pattern...")
    $("#scoreBox").css("visibility", "visible")
    const game = new Game()
    $("#scoreBox").text(`Score: ${game.score}`)
    console.log(game.userPattern)
    document.addEventListener("click", (event) => {
        const classString = event.path[0].classList.value
        const userNote = "note-" + classString[classString.length-1]
        console.log(userNote)
        game.userPattern.push(userNote)
    })
    game.loadGamePattern(4)
    game.playNotes()
    console.log(game.gamePattern)
    console.log(game.userPattern)
    while (this.playing) {
        if (game.userPattern.length === game.gamePattern.length) {
            if (checkPattern) {
                this.score++
                $("#scoreBox").text(`Score: ${game.score}`)
                $("#boneHeader").text("You got it!")
                game.loadGamePattern(4)
                game.playNotes()
            } else {
                game.playing = false;
                $("#boneHeader").text("You lose...click 'play' to play again!")
            }
        }
    }
})
