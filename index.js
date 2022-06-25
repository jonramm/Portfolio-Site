
$(".site").mouseover(()=> {
    $(".site").animate({fontSize: "2.1rem"}, "fast").animate({fontSize: "2rem"}, "fast")
});

const interests = [
                    "basketball encyclopedia.", 
                    "brewery enthusiast.", 
                    "jazz lover.", 
                    "cat dad.",
                    "burrito connoisseur.", 
                    "dog father.", 
                    "cyclist."
                ]
const interestsLength = interests.length
const interestsDiv = document.getElementById("rotatingInterests");
const inst = setInterval(setInterest, 1500)

let index = 0

function setInterest() {
    console.log(index)
    interestsDiv.innerHTML = interests[index]
    if (index === interestsLength-1) {
        index = 0
    } else {
        index ++
    }
}




