
let godine = window.prompt("Koliko imate godina")


if (isNaN(godine)) {
    document.getElementById("text").innerHTML = "To nisu godine"
} else if (godine > 120) {

    document.getElementById("text").innerHTML = "Vi ste prestari"

} else {
    let date = new Date().toLocaleDateString('en-us', { year: "numeric" })

    document.getElementById("text").innerHTML = `Vi ste rođeni ${date - godine}. godine`
}
