// Game

class Game {
    constructor() {
        this.noteArr = ["1", "2", "3", "4", "5", "6", "7", "8"];
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
        }
        const activeBtn = document.querySelector(`.note-${element}`); 
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
    // document.removeEventListener("click", clickEvent)
    $(".notes-container").css("display", "inline-block");
    $("#boneHeader").text("See if you can play back the pattern...")
    $("#scoreBox").css("visibility", "visible")
    const game = new Game()
    $("#scoreBox").text(`Score: ${game.score}`)
    console.log(game.userPattern)

    document.addEventListener("click", (event) => {
        const idString = event.path[0].id
        const userNote = idString[idString.length-1]
        console.log(idString)
        console.log(userNote)
        if (userNote in game.noteArr) {
            game.userPattern.push(userNote)
        }
        console.log(game.userPattern)
        if (game.userPattern.length === game.gamePattern.length) {
            if (game.checkPattern) {
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
    })

    game.loadGamePattern(4)
    game.playNotes()
    console.log(game.gamePattern)
    console.log(game.userPattern)
    console.log(game.playing)
})