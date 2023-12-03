const fs = require("node:fs")

fs.readFile("input.txt", "utf-8", (err, fileContent) => {

    const result = getValidPartNumberSum(fileContent)
    console.log("Sum:", result[0])
    console.log("Sum2:", result[1])
})

function getValidPartNumberSum(fileContent) {

    let sum = 0;
    let sum2 = 0;

    const data = fileContent.split("\n")
    let symbols = []
    for(const line of data) {
        let index = 0
        let lineSymbols = []
        let charCache = ""
        for(const char of line) {
            if(char === ".") {
                if(charCache !== "") {
                    lineSymbols.push({t: 0, i: index, s: charCache})
                    index = index + charCache.length
                    charCache = ""
                }
                index++
            }
            else if(isNaN(parseInt(char))) {
                if(charCache !== "") {
                    lineSymbols.push({t: 0, i: index, s: charCache})
                    index = index + charCache.length
                    charCache = ""
                }
                lineSymbols.push({t: 1, i: index, s: char})
                index++
            }
            else {
                charCache += char
            }
        }
        if(charCache !== "") {
            lineSymbols.push({t: 0, i: index, s: charCache})
        }
        symbols.push(lineSymbols)
    }
    
    for(let i = 0; i < data.length; i++) {
        // Part 1
        for(const numberSymbol of symbols[i].filter(val => val.t === 0)) {
            let isValid = false;
            for(let j = -1; j <= numberSymbol.s.length; j++) {
                let currentIndex = numberSymbol.i + j
                if(i !== 0) {
                    if(symbols[i - 1].some(
                                            val =>  val.i === currentIndex &&
                                                    val.t === 1)) {
                        isValid = true;
                        // console.log(numberSymbol)
                        // console.log("-1", symbols[i - 1].filter(val => val.i === currentIndex))
                    }
                }
                if(symbols[i].some(
                                    val =>  val.i === currentIndex &&
                                            val.t === 1)) {
                    isValid = true;
                    // console.log(numberSymbol)
                    // console.log(symbols[i].filter(val => val.i === currentIndex))
                }
                if(i !== data.length - 1) {
                    if(symbols[i + 1].some(
                                        val =>  val.i === currentIndex &&
                                                val.t === 1)) {
                        isValid = true;
                        // console.log(numberSymbol)
                        // console.log("+1", symbols[i + 1].filter(val => val.i === currentIndex))
                    }
                }
                }
             
            if(isValid) {
                sum += parseInt(numberSymbol.s)
            }
        }

        // Part 2
        for(const gear of symbols[i].filter(val => val.t === 1 && val.s === "*")) {
            let gearRatio = 0;
            let nearNumbers = []
            if(i !== 0) {
                nearNumbers.push(symbols[i - 1].filter(numSymbol => {
                    if(numSymbol.t === 0) {
                        for(let j = 0; j < numSymbol.s.length; j++) {
                            let currentIndex = numSymbol.i + j
                            if( currentIndex === gear.i - 1 ||
                                currentIndex === gear.i ||
                                currentIndex === gear.i + 1 ) {
                                    /*console.log(i)
                                    console.log(gear)
                                    console.log(numSymbol)*/
                                    return true;
                                }
                        }
                    }
                }))
            }
            nearNumbers.push(symbols[i].filter(numSymbol => {
                if(numSymbol.t === 0) {
                    for(let j = 0; j < numSymbol.s.length; j++) {
                        let currentIndex = numSymbol.i + j
                        if( currentIndex === gear.i - 1 ||
                            currentIndex === gear.i ||
                            currentIndex === gear.i + 1 ) {
                                /*console.log(i)
                                    console.log(gear)
                                    console.log(numSymbol)*/
                                return true;
                            }
                    }
                }
            }))
            if(i !== data.length - 1) {
                nearNumbers.push(symbols[i + 1].filter(numSymbol => {
                    if(numSymbol.t === 0) {
                        for(let j = 0; j < numSymbol.s.length; j++) {
                            let currentIndex = numSymbol.i + j
                            if( currentIndex === gear.i - 1 ||
                                currentIndex === gear.i ||
                                currentIndex === gear.i + 1 ) {
                                    /*console.log(i)
                                    console.log(gear)
                                    console.log(numSymbol)*/
                                    return true;
                                }
                        }
                    }
                }))
            }
            nearNumbers = nearNumbers.reduce((acc, curr) => acc.concat(curr), [])

            // console.log(nearNumbers)
            if(nearNumbers.length === 2) {
                // console.log(i)
                // console.log(nearNumbers)
                gearRatio = parseInt(nearNumbers[0].s) * parseInt(nearNumbers[1].s)
                // console.log(gearRatio)
                sum2 += gearRatio;
            }
        }
    }
    return [sum, sum2];
}


const testData = "467..114....\n...*......\n..35..633.\n......#...\n617*......\n.....+.58.\n..592.....\n......755.\n...$.*....\n.664.598..\n"

const result = getValidPartNumberSum(testData)
if(result[0] === 4361 && result[1] === 467835) {
    console.log("Yay")
}
else {
    console.log(result)
}
