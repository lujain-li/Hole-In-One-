document.addEventListener("DOMContentLoaded", function () {
    const bookingForm = document.getElementById("booking-form");

    bookingForm.addEventListener("submit", function (event) {
        event.preventDefault(); // منع الإرسال الفوري للنموذج

        const packageType = document.getElementById("package").value;
        const date = document.getElementById("date").value;
        const guests = document.getElementById("guests").value;

        if (!date || guests < 1) {
            alert("يرجى إدخال تاريخ صالح وعدد الضيوف.");
            return;
        }

        alert(`تم حجز ${packageType} في ${date} لعدد ${guests} أشخاص بنجاح!`);
        bookingForm.reset(); // إعادة تعيين النموذج بعد الإرسال
    });
});

document.getElementById("login-form").addEventListener("submit", function(event) {
    var userType = document.getElementById("user-type").value;
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    if (userType.trim() === "" || username.trim() === "" || password.trim() === "") {
        event.preventDefault();
        alert("Please fill in all fields before logging in.");
    }
});

function toggleDropdown() {
    var menu = document.getElementById("dropdownMenu");
    menu.style.display = menu.style.display === "block" ? "none" : "block";
}

function toggleDetails(element) {
    var packageElement = element.parentElement;
    var details = packageElement.querySelector(".package-details");
    var icon = element.querySelector(".toggle-icon");
    
    if (details.style.display === "block") {
        details.style.display = "none";
        icon.innerHTML = "&#9660;";
    } else {
        details.style.display = "block";
        icon.innerHTML = "&#9650;";
    }
}

