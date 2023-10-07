var closeIcon = document.getElementsByClassName("close-icon")[0];
var hamburgerIcon = document.getElementsByClassName("hamburger-icon")[0];
var mobileNavigation = document.getElementsByClassName("mobile-navigation")[0];

hamburgerIcon.addEventListener("click", () => {

    mobileNavigation.style.display = "block";
    
});

closeIcon.addEventListener("click", () => {
    mobileNavigation.style.display = "none";
});