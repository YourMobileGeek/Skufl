"use strict";

/*------------------------------------*\
    Skrollr (parallax)
    http://git.io/L7phbA
\*------------------------------------*/

/**
 * Only for desktop, because touch devices is lagging when scrolling
 */
if (!isMobileOrTablet()) {

    /* Setup */
    skrollrParallax();

    /* Init */
    var skrollrP = skrollr.init({
      smoothScrolling: false,
      forceHeight: false
    });

    /* Skrollr-menu  */
    skrollr.menu.init(skrollrP, {easing: 'swing'});   
  
}





/*------------------------------------*\
    Mobile/Tablet detection
\*------------------------------------*/
function isMobileOrTablet() {
  return (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Silk|PlayBook|BB\d+|Meego/i.test(navigator.userAgent)) ? true : false
}





/*------------------------------------*\
    Parallax (for Skrollr)
\*------------------------------------*/

function skrollrParallax() {

  /**
   * Get all parallax section conatiners
   */
  var parallaxSection = document.getElementsByClassName("js-parallax");

  /**
   * forEach method borrowing
   */
  parallaxSection.forEach = [].forEach;

  /**
   * Set parallax effect
   *
   * Add after #skrollr-body parallax images like in
   * the example classic.html (Skrollr plugin examples)
   * for each parallax section
   *
    <div class="skrollr-parallax"
         data-anchor-target="#section-id"
         data-bottom-top="transform:translate3d(0px, 200%, 0px)"
         data-top-bottom="transform:translate3d(0px, 0%, 0px)">

      <div class="skrollr-parallax__image"
           style="background-image:url(section-image)"
           data-anchor-target="#section-id"
           data-bottom-top="transform: translate3d(0px, -80%, 0px);"
           data-top-bottom="transform: translate3d(0px, 80%, 0px);"></div>
    </div>
   */

  parallaxSection.forEach(function(item, i) {

    /* Get the url of the background image from the parent (.c-parallax) */
    var urlBgImage = window.getComputedStyle(item, null).getPropertyValue("background-image");

    /* Random class name instead id */
    var randomClassName = "js-parallax-" + Math.floor((Math.random() * 100000) + 1);

    /* Set random class to the .c-parallax */
    item.className = item.className + " " + randomClassName;

    /* Half height of the viewport */
    var halfSize = item.classList.contains("parallax--50");

    /* Parallax effect */
    var imageWrapperStartTransform = "translate3d(0px, 200%, 0px)";
    var imageWrapperEndTransform = "translate3d(0px, 0%, 0px)";
    var imageStartTransform = "translate3d(0px, -80%, 0px);";
    var imageEndTransform = "translate3d(0px, 80%, 0px);";

    /* If container with half height of the viewport */
    if (halfSize) {
      imageWrapperStartTransform = "translate3d(0px, 300%, 0px)";
      imageStartTransform = "translate3d(0px, -60%, 0px);";
      imageEndTransform = "translate3d(0px, 60%, 0px);";
    }

    var imageWrapper = document.createElement("div");
    imageWrapper.className = halfSize ? "skrollr-parallax skrollr-parallax--50" : "skrollr-parallax";
    imageWrapper.setAttribute("data-anchor-target", "." + randomClassName);
    imageWrapper.setAttribute("data-bottom-top", "transform:" + imageWrapperStartTransform);
    imageWrapper.setAttribute("data-top-bottom", "transform:" + imageWrapperEndTransform);

    var image = document.createElement("div");
    image.className = halfSize ? "skrollr-parallax__image skrollr-parallax__image--50" : "skrollr-parallax__image";
    image.setAttribute("style", "background-image:" + urlBgImage);
    image.setAttribute("data-anchor-target", "." + randomClassName);
    image.setAttribute("data-bottom-top", "transform:" + imageStartTransform);
    image.setAttribute("data-top-bottom", "transform:" + imageEndTransform);

    imageWrapper.appendChild(image);
    document.body.appendChild(imageWrapper);
    
    
    // Parallax body
    var scrollDown = item.firstElementChild;
    scrollDown.setAttribute("data-anchor-target", "#" + item.id);
    scrollDown.setAttribute("data-center", "opacity: 1");
    scrollDown.setAttribute("data-top-bottom", "opacity: 0");
    scrollDown.setAttribute("data-bottom-top", "opacity: 0");
  });

};


var quotes = ['MY FACE SAYS IT ALL', 
              'I HOPE EVERYTHING WORKS OUT ',
              'I REALLY SUCK AT THIS INTERNET SHIT', 
              'OKAY I’M LOST',
              'I HATE LEAVING VOICEMAILS', 
              'YOU’RE SO FUCKING ANNOYING', 
              'I CAN’T FUCKING STAND YOU', 
              'MAYBE THIS JUST ISN’T FOR ME',
              'I DON’T KNOW ANYMORE', 
              'FUCK MAN', 
              'LOVE IS SIMPLE BUT WE FUCK IT UP WITH EXPECTATIONS', 
              'FUCK DOUBTS',
              'EVERYTHING IS GOING TO BE OKAY',
              'TAKE YOUR BULLSHIT SOMEWHERE ELSE PLEASE',
              'FEELING OVERWHELMED',
              'KISS MY ASS',
              'I LOVE YOU SO MUCH',
              'THERE YOU GO FUCKING UP MY DAY AGAIN',
              'WHAT DO YOU WANT?',
              'I WANNA SCREAM RIGHT NOW',
              'OKAY, I FINISHED THE BOTTLE',
              'LIFE IS STRANGE',
              'WHERE DID MY HEART GO?',
              "I'M NOT PERFECT",
              'I HATE THINKING ABOUT THE INTERNET',
              'AM I REALLY HAPPY?',
              'FUCK KYLIE JENNER',
              'I LOVE KYLIE JENNER',
              'FUCK I’M BROKE',
              'I CAN’T FEEL ANYTHING',
              'I HATE THE INTERNET',
              'I’M NEVER EXCITED',
              'WILL I EVER BE HAPPY?',
              'I FEEL LOST SOMETIMES',
              'STILL TRYING TO FIGURE IT OUT',
              'DAMN, I KEEP FUCKING UP',
              'BUTT STUFF',
              'BITCH!',
              'I HAVEN’T BEEN CHASING MY LIQOUR LATELY',
              'THAT BOTTLE ON TOP OF THE FRIDGE IS ALMOST OUT',
              'I HAVEN’T SEEN A BARBER IN MONTHS',
              'NOBODY WANTS TO LOSE',
              'EVERYTHING IS CHANGING',
              'FUCK, THIS IS A LOT',
              'I LOVE SEX',
              'NOTHING EVER GOES AS PLANNED',
              'MORE SEX',
              'FEELING EMPTY INSIDE',
              'WHEN COFFEE DOESN’T WORK',
              'LOSING MY PATIENCE RIGHT NOW',
              'RACISM IS A LIE',
              'STRESS IS TOO MUCH',
              'MY HAIR IS STILL GROWING',
              'SOME HEAD WOULD BE NICE',
              'DRUGS CAN BE GOOD, IF USED RESPONSIBLY',
              'FUCK RENT',
              "I'M IN PAIN BUT, LIFE IS BEAUTIFUL",
              "MOM, DON'T WORRY",
              "I JUST WANNA FUCKING WIN",
              "I DON'T FUCKING CARE",
              "THE INTERNET'S A FUCKING JOKE",
              "I HATE DOUBT",
              "DOUBT KILLS, SO STOP DOING IT"
             ];

getQuotes();
changeBackground();

function getQuotes() {
    var randomIndex = getRandomNumber(quotes.length);
    var randomQuote = quotes[randomIndex];
    document.getElementById("quoteContainer").innerHTML = randomQuote;
}

function changeBackground() {
    var colors = ['#feafbc', '#f4b3dc','#c19bdf','#70d0ec','#9ae7d9'];
    document.body.style.background = getRandomNumber(colors.length);
};

function refresh() {
    history.go();
}

function getRandomNumber(upperBound) {
  return Math.floor(Math.random() * (upperBound - 1));
}