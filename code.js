/* Code barra rolagem */

let slideIndex = 0;
showSlides();

function plusSlides(n) {
    showSlides()
}


function showSlides() {
    let i;
    let slides = document.getElementsByClassName("issue");
    for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}

    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 4000);
}

function showSlidesB(n) {
    let i;
    let slides = document.getElementsByClassName("issue");
    for (i = 0; i < slides.length; i++) {
        slides[0].style.display = "none";
    }


}

// Code slide fotos 

let sIndex = 0;
goSlides()
//goSlides(sIndex);

// Next/previous controls
function slides(n) {
    goSlidesClick(sIndex += n);
}


function goSlides() {
    let i;
    let slides = document.getElementsByClassName("slide");
    for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
    }
    sIndex++;
    if (sIndex > slides.length) {sIndex = 1}

    slides[sIndex-1].style.display = "block";

    if (sIndex == 1 ) {
        let button = document.querySelector('.prev2')
        let button2 = document.querySelector('.next2')
        button.style.backgroundColor = "white"
        button.style.color = "gray"
        button2.style.backgroundColor = ""
        button2.style.color = ""


    } else if (sIndex == slides.length){
        let button = document.querySelector('.next2')
        button.style.backgroundColor = "white"
        button.style.color = "gray"
    }else{
        let button = document.querySelector('.prev2')
        let button2 = document.querySelector('.next2')
        button.style.backgroundColor = ""
        button.style.color = ""
        button2.style.backgroundColor = ""
        button2.style.color = ""
    }


 

    setTimeout(goSlides, 4000);
}

function goSlidesClick(n) {
    let i;
    let slides = document.getElementsByClassName('slide');
    
    if (n > slides.length) {sIndex = 1}
    if (n < 1) {sIndex = slides.length}
    
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }

    slides[sIndex - 1].style.display = 'block';
} 


// footer js help

document.querySelector(".plus").addEventListener("click", showOptions)

function showOptions () {
    let ancher = document.querySelector(".anch");
    let plus = document.querySelector(".plus");
    let minus = document.querySelector(".minus");
    let inner = document.querySelector(".innerTitle1");
    ancher.style.display = "block";
    plus.style.display = "none";
    minus.style.display = "block";
    inner.style.borderBottomWidth = "1px"
    inner.style.marginBottom = "15px"
    ancher.style.paddingBottom = "10px";
    ancher.style.marginBottom = "10px";
    ancher.style.borderBottom = "solid 1px white"
}

document.querySelector(".minus").addEventListener("click", showOption)

function showOption (){
    let anch = document.querySelector(".anch");
    let plus = document.querySelector(".plus");
    let minus = document.querySelector(".minus");
    let inner = document.querySelector(".innerTitle1");

    anch.style.display = "none";
    minus.style.display = "none";
    plus.style.display = "block";
    inner.style.borderBottomWidth = ""
}

// footer js about nike
document.querySelector(".plus1").addEventListener("click", showOpt)

function showOpt (){
    let opts = document.querySelector(".optsA");
    let plus = document.querySelector(".plus1");
    let minus = document.querySelector(".minus1");
    let inner = document.querySelector(".innerTitle2");
    opts.style.display = "block";
    plus.style.display = "none";
    minus.style.display = "block";
    inner.style.marginBottom = "15px"
    opts.style.paddingBottom = "15px";
   // ancher.style.borderBottom = "solid 1px white"
}

document.querySelector(".minus1").addEventListener("click", showOpts) 

function showOpts () {
    let opts = document.querySelector(".optsA");
    let plus = document.querySelector(".plus1");
    let minus = document.querySelector(".minus1");

    opts.style.display = "none";
    plus.style.display = "block";
    minus.style.display = "none";
}







