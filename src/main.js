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

/* ----------------------------------- */

var languages = new Map();

languages.set("VB.NET", [5.88, "#945db7"]);
languages.set("Python", [5.88, "#3572a5"]);
languages.set("HTML", [11.76, "#e34c26"]);
languages.set("Java", [5.88, "#b07219"]);
languages.set("Rust", [17.65, "#dea584"]);
languages.set("Assembly", [5.88, "#6e4c13"]);
languages.set("C++", [5.88, "#f34b7d"]);
languages.set("C", [11.76, "#555555"]);
languages.set("Dart", [11.76, "#00b4ab"]);
languages.set("Vue", [5.88, "#41b883"])

const mapArray = Array.from(languages);
mapArray.sort((a, b) => b[1][0] - a[1][0]);
const sortedMap = new Map(mapArray);

const firstStrings = Array.from(sortedMap.entries()).map(([key, _value]) => key);
const numbers = Array.from(sortedMap.entries()).map(([_key, value]) => value[0]);
const secondStrings = Array.from(sortedMap.entries()).map(([_key, value]) => value[1]);

/*
 * Thanks for ChatGPT for this part
 * Get a reference to the canvas element
*/
const canvas = document.getElementById('chart');
const ctx = canvas.getContext('2d');

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
        backgroundColor: secondStrings
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
