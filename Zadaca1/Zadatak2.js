
function piramida(n) {

    for (let i = 1; i <= n; i++) {
        let java = i + " "
        let script = ""
        for (let j = 0; j <= i; j++) {
            script += j + " "
        }

        document.getElementById("text").innerHTML += '<b>' + java + '</b>' + script + "<br>"
    }

}
piramida(5)