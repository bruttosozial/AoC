const fs = require("node:fs")

const RED_CUBES = 12;
const GREEN_CUBES = 13;
const BLUE_CUBES = 14;

fs.readFile("input.txt", "utf-8", (err, data) => {

    let sum = 0;
    let sum2 = 0;

    for(currentLine of data.split("\n")) {
        const gameNumber = 
            parseInt(currentLine.substring(5, 8)
                        .replace(":", "")
                        .replace(" ", ""))
        
        const numberSection = currentLine.split(":")[1]
        let isPossible = true;
        let highestRed = 0;
        let highestBlue = 0;
        let highestGreen = 0;

        for(let round of numberSection.split(";")) {
            round = round.trim()
            for(let colorDraw of round.split(",")) {
                colorDraw = colorDraw.trim()
                const number = parseInt(colorDraw.substring(0, 3).trim())
                if(colorDraw.indexOf("red") !== -1) {
                    if (number > RED_CUBES) {
                        isPossible = false
                    }

                    highestRed = number > highestRed ? number : highestRed
                }
                else if(colorDraw.indexOf("blue") !== -1) {
                    if (number > BLUE_CUBES) {
                        isPossible = false
                    }

                    highestBlue = number > highestBlue ? number : highestBlue
                }
                else if(colorDraw.indexOf("green") !== -1) {
                    if (number > GREEN_CUBES) {
                        isPossible = false
                    }  
                    highestGreen = number > highestGreen ? number : highestGreen
                }
            }
        }

        sum2 += highestRed * highestBlue * highestGreen

        if(isPossible) {
            console.log(currentLine)
            sum += gameNumber
        }

        // console.log(currentLine)
        // console.log(gameNumber)
    }

    console.log("Sum:", sum)
    console.log("Sum2: ", sum2)
})