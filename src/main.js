const accordionHistory = []
const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");

accordionItemHeaders.forEach(accordionItemHeader => {
    accordionItemHeader.addEventListener("click", event => {
        accordionItemHeader.classList.toggle("active");
        
        const accordionItemBody = accordionItemHeader.nextElementSibling;
        const headerContent = accordionItemHeader.textContent;

        let newHeaderContent = headerContent.replace(/\s+/g, '');
        newHeaderContent = newHeaderContent.replace(/\n/g, '');

        if (accordionItemHeader.classList.contains("active")) {
            accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
            accordionHistory.push(newHeaderContent);

            if (newHeaderContent == "Own, personal projects".replace(/\s+/g, '') && accordionHistory.includes("ringwormGO projects".replace(/\s+/g, ''))) {
                document.documentElement.style.setProperty("--square-height", "650px");
            }

            if (newHeaderContent == "ringwormGO projects".replace(/\s+/g, '') && accordionHistory.includes("Own, personal projects".replace(/\s+/g, ''))) {
                document.documentElement.style.setProperty("--square-height", "650px");
            }
        }

        else {
            accordionItemBody.style.maxHeight = 0;

            if (newHeaderContent == "Own, personal projects".replace(/\s+/g, '') && accordionHistory.includes("ringwormGO projects".replace(/\s+/g, ''))) {
                document.documentElement.style.setProperty("--square-height", "525px");
            }

            if (newHeaderContent == "ringwormGO projects".replace(/\s+/g, '') && accordionHistory.includes("Own, personal projects".replace(/\s+/g, ''))) {
                document.documentElement.style.setProperty("--square-height", "525px");
            }

            const index = accordionHistory.indexOf(newHeaderContent);
            if (index > -1) {
                accordionHistory.splice(index, 1);
            }
        }
    })
});

/* ---------------------------------------------------------------------------- */

/* Thanks to Fireship for the code */
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

/* ---------------------------------------------------------------------------- */

function CalculatePercentage(number) {
    const number_of_repos = 31;

    return (number / number_of_repos) * 100;
}

var languages = new Map();

languages.set("Assembly", [CalculatePercentage(1), "#6e4c13"]);
languages.set("C", [CalculatePercentage(5), "#555555"]);
languages.set("C++", [CalculatePercentage(3), "#f34b7d"]);
languages.set("Cuda", [CalculatePercentage(1), "#3a4e3a"]);
languages.set("Dart", [CalculatePercentage(2), "#00b4ab"]);
languages.set("HTML", [CalculatePercentage(2), "#e34c26"]);
languages.set("Java", [CalculatePercentage(6), "#b07219"]);
languages.set("Makefile", [CalculatePercentage(1), "#427819"])
languages.set("Python", [CalculatePercentage(1), "#3572a5"]);
languages.set("Rust", [CalculatePercentage(6), "#dea584"]);
languages.set("VB.NET", [CalculatePercentage(1), "#945db7"]);
languages.set("Vue", [CalculatePercentage(1), "#41b883"]);
languages.set("Without language", [CalculatePercentage(1), "gray"]);

const mapArray = Array.from(languages);
mapArray.sort((a, b) => b[1][0] - a[1][0]);
const sortedMap = new Map(mapArray);

const firstStrings = Array.from(sortedMap.entries()).map(
    ([key, _value]) => key
);
const numbers = Array.from(sortedMap.entries()).map(
    ([_key, value]) => value[0]
);
const secondStrings = Array.from(sortedMap.entries()).map(
    ([_key, value]) => value[1]
);

numbers_two = [];

for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];

    numbers_two.push((Math.round(element * 100) / 100).toString() + "%");
}

console.log(numbers_two);

/*
 * Thanks for ChatGPT for this part
 * Get a reference to the canvas element
 */
const canvas = document.getElementById("chart");
const ctx = canvas.getContext("2d");

/*
 * Thanks for ChatGPT for this part
 * Create a new pie chart using Chart.js
 */
const chart = new Chart(ctx, {
    type: "pie",
    data: {
        labels: firstStrings,
        datasets: [
            {
                data: numbers,
                backgroundColor: secondStrings,
            },
        ],
    },
    options: {
        animation: {
            animateRotate: true,
            animateScale: true,
        },
        tooltips: {
            callbacks: {
                label: function (tooltipItems, data) {
                    return (
                        data.labels[tooltipItems.index] +
                        " : " +
                        (
                            Math.round(
                                data.datasets[tooltipItems.datasetIndex].data[tooltipItems.index] * 100
                            ) / 100
                        ).toString() +
                        " %"
                    );
                },
            },
        },
    },
});
