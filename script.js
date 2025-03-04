
const container = document.getElementById("wave-container");
const speedControl = document.getElementById("speed");
const countControl = document.getElementById("count");

function createCircles(count) {
    container.innerHTML = "";
    for (let i = 0; i < count; i++) {
        let circle = document.createElement("div");
        circle.classList.add("circle");
        circle.style.setProperty("--i", i);
        container.appendChild(circle);
    }
}

speedControl.addEventListener("input", () => {
    document.documentElement.style.setProperty(
        "--speed",
        speedControl.value + "s"
    );
});

countControl.addEventListener("input", () => {
    createCircles(countControl.value);
});

createCircles(20); // Default circles
