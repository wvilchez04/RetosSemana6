let tasks = []
        let button = document.getElementById("button")
        let input = document.querySelector("#input")
        button.addEventListener("click", function() {
            let txt = input.value
            if (txt === "") {
                alert("you must write something!!!")
            } else {
                tasks.push(txt)
                if (tasks.length == 1) {
                    document.getElementById("message").innerHTML =
                    `${txt} task pushed.`
                }
                else {
                    document.getElementById("message").innerHTML =
                    `${txt} task pushed. Last task was ${tasks[tasks.length - 2]}.`
                }
                input.value = ""
            }
        })