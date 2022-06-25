
$(".site").mouseover(()=> {
    $(".site").animate({fontSize: "2.1rem"}, "fast").animate({fontSize: "2rem"}, "fast")
});

const interests = ["basketball encyclopedia.", "brewery enthusiast.", "jazz lover.", "cat dad.", "dog father.", "cyclist."]
const interestsLength = interests.length
const interestsDiv = document.getElementById("rotatingInterests");
const inst = setInterval(setInterest, 2000)

function setInterest() {
    const index = (Math.floor((Math.random()*interestsLength)))
    interestsDiv.innerHTML = interests[index]
}




