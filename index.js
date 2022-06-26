
$(".site").mouseover(()=> {
    $(".site").animate({fontSize: "2.1rem"}, "fast").animate({fontSize: "2rem"}, "fast")
});

// smooth scroll animation
// https://stackoverflow.com/questions/7717527/smooth-scrolling-when-clicking-an-anchor-link
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// change active color of navbar links
// https://www.geeksforgeeks.org/how-to-change-font-color-of-the-active-nav-item-in-bootstrap/
$(document).ready(function () {
    $("ul.navbar-nav > li > a").click(
      function (e) {
        $("ul.navbar-nav > li").removeClass(
          "active");
        $("ul.navbar-nav > li > a").css(
          "color", "");

        $(this).addClass("active");
        $(this).css("color", "#ef838a");
    });
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




