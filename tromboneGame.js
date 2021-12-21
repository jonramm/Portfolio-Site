
const noteArr = [".note-1", ".note-2", ".note-3", ".note-4", ".note-5", ".note-6", ".note-7", ".note-8"]
const gamePattern = []

function nextSequence() {
    const randomNumber = Math.floor(Math.random() * 9)
    gamePattern.push(noteArr[randomNumber])
}

for (let i=0; i<4; i++) {
    nextSequence()
}

for (el in gamePattern) {
    setTimeout(() => $(`${el}`).click(), 2000);
}

