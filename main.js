/* Thanks to Fireship for code */

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        } else {
            entry.target.classList.remove("show");
        }
    });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));

// Get a reference to the canvas element
const canvas = document.getElementById("chart");

// Create a new pie chart using Chart.js
// Forks are not included
// TODO: fetch data from GitHub
const chart = new Chart(canvas, {
    type: "pie",
    data: {
        labels: [
            "VB.NET",
            "Python",
            "HTML",
            "Java",
            "Rust",
            "Assembly",
            "C++",
            "C",
            "Dart",
        ],
        datasets: [
            {
                data: [6.66, 6.66, 13.33, 6.66, 26.66, 6.66, 6.66, 13.33, 6.66],
                backgroundColor: ["#945db7", "#3572a5", "#e34c26", "#b07219", "#dea584", "#6e4c13", "#f34b7d", "#555555", "#00b4ab"],
            },
        ],
    },
    options: {
        animation: {
            animateRotate: true,
            animateScale: true,
        },
    },
});
