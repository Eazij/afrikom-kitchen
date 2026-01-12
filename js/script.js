//we will add contact form alert//
const form = document.querySelector("form");

if (form) {
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        alert("Thank you for contacting Afrikom Kitchen! We will get back to you shortly.");
        form.reset();
    });
}

//smooth scrolling for internal links//

const links = document.querySelectorAll('a[href^="#"]');
links.forEach(link => {
    link.addEventListener("click", function (event){
        event.preventDefault();
        const targetId = this.getAttribute("href");
        const targetElement =document.querySelector(targetId);

        if (targetElement) {targetElement.scrollIntoView({behavior: "smooth"});
    }
    });
});

//confirm before opening whatsapp link//

const whatsappLinks = document.querySelectorAll('a[href^="wa.me"]');

whatsappLinks.forEach(link => {
    link.addEventListener("click", function () {
        return confirm("You are about to place an order via whatsapp. Continue?");
    });
});