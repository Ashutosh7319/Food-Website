// Navigation Menu Toogle.

document.addEventListener("DOMContentLoaded", function () {

    const menuToggle =
        document.getElementById("menu-toggle");

    const navLinks =
        document.getElementById("nav-links");

    menuToggle.addEventListener("click", function () {

        navLinks.classList.toggle("show");

        if (navLinks.classList.contains("show")) {
            menuToggle.innerHTML = "✕";
        }
        else {
            menuToggle.innerHTML = "☰";
        }

    });

});

// Hero Sliding Code.

const slides = document.querySelectorAll(".slide");

let currentSlide = 0;


function showSlide(index) {

    // Remove active classes from current slide
    const current = slides[currentSlide];

    current.classList.remove("active");

    current
        .querySelector(".hero-text")
        .classList.remove("active-text");

    current
        .querySelector(".hero-image")
        .classList.remove("active-image");


    // Update current slide index
    currentSlide = index;


    // Add active classes to next slide
    const next = slides[currentSlide];

    next.classList.add("active");


    // Small delay makes animation smoother
    setTimeout(() => {

        next
            .querySelector(".hero-text")
            .classList.add("active-text");

        next
            .querySelector(".hero-image")
            .classList.add("active-image");

    }, 100);

}



function nextSlide() {

    let nextIndex = currentSlide + 1;

    if (nextIndex >= slides.length) {

        nextIndex = 0;

    }

    showSlide(nextIndex);

}

// Auto slider
setInterval(nextSlide, 4000);

// Reservation Date and Time Handler.

const dateInput = document.getElementById("booking-date");

const timeInput = document.getElementById("booking-time");


const now = new Date();


// DATE
const year = now.getFullYear();

const month = String(
    now.getMonth() + 1
).padStart(2, "0");

const day = String(
    now.getDate()
).padStart(2, "0");


dateInput.value =
    `${year}-${month}-${day}`;




// TIME
const hours = String(
    now.getHours()
).padStart(2, "0");

const minutes = String(
    now.getMinutes()
).padStart(2, "0");


timeInput.value =
    `${hours}:${minutes}`;

// For Table Selection and Pricing.

const tableOptions =
    document.querySelectorAll(
        'input[name="table-type"]'
    );

const priceDisplay =
    document.getElementById(
        "table-price"
    );


tableOptions.forEach(option => {

    option.addEventListener(
        "change",

        () => {

            priceDisplay.textContent =
                `₹${option.value}`;

        }

    );

});

// Mock Pop-Up code.

const form =
    document.querySelector(
        ".reservation-form"
    );

const popup =
    document.querySelector(
        ".reservation-popup"
    );

const popupDetails =
    document.getElementById(
        "popup-details"
    );

const closePopup =
    document.getElementById(
        "close-popup"
    );



form.addEventListener(
    "submit",

    function (e) {

        e.preventDefault();

        const name =
            document.getElementById(
                "customer-name"
            ).value;

        const phone =
            document.getElementById(
                "customer-phone"
            ).value;

        const date =
            document.getElementById(
                "booking-date"
            ).value;

        const time =
            document.getElementById(
                "booking-time"
            ).value;

        const selectedTable =
            document.querySelector(
                'input[name="table-type"]:checked'
            ).parentElement.textContent.trim();

        // Random token
        const token =
            "RB" +
            Math.floor(
                1000 +
                Math.random() * 9000
            );

        popupDetails.innerHTML = `

            <p>
                Token:
                <strong>${token}</strong>
            </p>

            <p>
                Name:
                ${name}
            </p>

            <p>
                Phone:
                ${phone}
            </p>

            <p>
                Date:
                ${date}
            </p>

            <p>
                Time:
                ${time}
            </p>

            <p>
                Table:
                ${selectedTable}
            </p>

        `;

        popup.classList.add(
            "show"
        );

    }

);

closePopup.addEventListener(

    "click",

    () => {

        popup.classList.remove(
            "show"
        );

    }

);

// Contact Us Mock-up.

const contactForm =
    document.querySelector(
        ".contact-form"
    );

const messagePopup =
    document.querySelector(
        ".message-popup"
    );

const messageDetails =
    document.getElementById(
        "message-details"
    );

const closeMessage =
    document.getElementById(
        "close-message"
    );



contactForm.addEventListener(

    "submit",

    function (e) {

        e.preventDefault();



        const name =
            document.getElementById(
                "contact-name"
            ).value;



        const email =
            document.getElementById(
                "contact-email"
            ).value;



        const messageId =
            "MSG-" +
            Math.floor(
                1000 +
                Math.random() * 9000
            );



        messageDetails.innerHTML = `

            <p>
                Name:
                ${name}
            </p>

            <p>
                Email:
                ${email}
            </p>

            <p>
                Message ID:
                <strong>${messageId}</strong>
            </p>

            <p>
                We'll get back to you shortly.
            </p>

        `;



        messagePopup.classList.add(
            "show"
        );

    }

);

closeMessage.addEventListener(

    "click",

    () => {

        messagePopup.classList.remove(
            "show"
        );

    }

);

// Loading Screen Code.

window.addEventListener(

    "load",

    () => {

        const loader =
            document.querySelector(
                ".loader-screen"
            );


        setTimeout(() => {

            loader.classList.add(
                "hide"
            );

        }, 3000);

    }

);

// Theme toggling code.

const toggleBtn =
    document.getElementById("theme-toggle");

/* keep saved theme */

if (localStorage.getItem("theme") === "light") {
    document.body.classList.add("light");
    toggleBtn.innerHTML = "☀";
}



toggleBtn.addEventListener("click", () => {

    document.body.classList.toggle("light");


    if (
        document.body.classList.contains("light")
    ) {

        toggleBtn.innerHTML = "☀";

        localStorage.setItem(
            "theme",
            "light"
        );

    } else {

        toggleBtn.innerHTML = "🌙";

        localStorage.setItem(
            "theme",
            "dark"
        );

    }

});