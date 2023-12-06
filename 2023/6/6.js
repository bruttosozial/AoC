const fs = require("node:fs")

fs.readFile("input.txt", "utf-8", (err, fileContent) => {

    const lines = fileContent.split("\n")

    times = lines[0].split(":")[1]
                        .split(" ")
                            .filter(s => s !== "")
                            .map(str => parseInt(str))
    distances = lines[1].split(":")[1]
                            .split(" ")
                                .filter(s => s !== "")
                                .map(str => parseInt(str))

    times.push(parseInt(lines[0].replaceAll(" ", "").split(":")[1]))
    distances.push(parseInt(lines[1].replaceAll(" ", "").split(":")[1]))

    console.log(times)
    console.log(distances)

    let result = 1
    for(let i = 0; i < times.length - 1; i++) {
        const record = distances[i]

        let possibleTimes = 0
        for(let j = 1; j <= times[i]; j++) {
            if((times[i] - j) * j > record) {
                possibleTimes++
            }
        }
        result *= possibleTimes
    }

    let possibleTimes = 0
    for(let j = 1; j <= times[4]; j++) {
        if((times[4] - j) * j > distances[4]) {
            possibleTimes++
        }
    }

    console.log(result)
    console.log(possibleTimes)

})