AOS.init();

let intro = document.querySelector('.intro');
let logo = document.querySelector('.logo-header');
let logoSpan = document.querySelectorAll('.logo');
let splashLogo = document.getElementById('pic');
let textWrapper = document.querySelector('.logo-next');
let enterBtn = document.querySelector('.enter-btn');
let yesBtnSmall = document.getElementById('yesBtnOneSmall');
let yesBtnBig = document.getElementById('yesBtnOneBig');
let audio = document.getElementById("audio");

window.addEventListener('DOMContentLoaded', () => {
    if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual';
    }

    window.scrollTo(0, 0);
    
    setTimeout(() => {
        logoSpan.forEach((span, idx) => {
            setTimeout(() => {
                span.classList.add('active');
            }, (idx + 1) * 400);
        });

        setTimeout(() => {
            logoSpan.forEach((span, idx) => {
                setTimeout(() => {
                    span.classList.remove('active');
                    span.classList.add('fade');
                }, (idx + 1) * 120);
            })
        }, 2000);

        setTimeout(() => {
            textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
            textWrapper.classList.add('active');
            anime.timeline({loop: false, endDelay: 1000})
            .add({
                targets: '.logo-next .letter',
                translateX: [40,0],
                translateZ: 0,
                opacity: [0,1],
                easing: "easeOutExpo",
                delay: (el, i) => 500 + 30 * i
            }).add({
                targets: '.logo-next .letter',
                translateX: [0,-30],
                opacity: [1,0],
                easing: "easeInExpo",
                delay: (el, i) => 100 + 30 * i
            });
        }, 2400);

        setTimeout(() => {
            enterBtn.classList.add('active');
        }, 6000);
    });

});

enterBtn.addEventListener('click', () => {
    audio.currentTime = 24;
    audio.play();
    intro.classList.add('fade');
})

yesBtnSmall.addEventListener('click', () => {
  Swal.fire({
    title: "I Love YOU",
    text: "I have something for you",
    imageUrl: "././assets/f1.png",
    imageWidth: 458,
    imageHeight: 262,
    backdrop: "linear-gradient(to bottom, #FF0080, #FF8C00, #40E0D0)",
    background: "white",
    allowOutsideClick: true,
    allowEscapeKey: true,
    allowEnterKey: true,
    showConfirmButton: false,
    showCancelButton: false,
    confirmButtonText: 'YES',
    confirmButtonColor: '#ffb8b8'
  });
})

yesBtnBig.addEventListener('click', () => {
  Swal.fire({
    title: "I Love YOU (bohot jaldi hai na tumko)",
    text: "I have something for you",
    imageUrl: "././assets/f1.png",
    imageWidth: 458,
    imageHeight: 262,
    backdrop: "linear-gradient(to bottom, #FF0080, #FF8C00, #40E0D0)",
    background: "white",
    allowOutsideClick: true,
    allowEscapeKey: true,
    allowEnterKey: true,
    showConfirmButton: false,
    showCancelButton: false,
    confirmButtonText: 'YES',
    confirmButtonColor: '#ffb8b8'
  });
})

// Detect request animation frame
var scroll = window.requestAnimationFrame ||
             // IE Fallback
             function(callback){ window.setTimeout(callback, 1000/60)};
var elementsToShow = document.querySelectorAll('.show-on-scroll'); 

function loop() {

    Array.prototype.forEach.call(elementsToShow, function(element){
      if (isElementInViewport(element)) {
        element.classList.add('is-visible');
      } else {
        element.classList.remove('is-visible');
      }
    });

    scroll(loop);
}

// Call the loop for the first time
loop();

// Helper function from: http://stackoverflow.com/a/7557433/274826
function isElementInViewport(el) {
  // special bonus for those using jQuery
  if (typeof jQuery === "function" && el instanceof jQuery) {
    el = el[0];
  }
  var rect = el.getBoundingClientRect();
  return (
    (rect.top <= 0
      && rect.bottom >= 0)
    ||
    (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.top <= (window.innerHeight || document.documentElement.clientHeight))
    ||
    (rect.top >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
  );
}
