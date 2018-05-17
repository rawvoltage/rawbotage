const array = ["1", "2", "3", "a"]
const vips = ["a", "b", "c"]

const matching = vips.filter((vips) => array.includes(vips))
//const matching = vips.filter((word) => !wordsToRemove.includes(word))

if (matching.length == 0) return
else console.log(matching)


//const vips = ["anteluce", "danyellyjelly", "rawvoltage", "tiffae", "tinaqt"]
//
//const matching = vips.filter((vips) => username.includes(vips))
//
//console.log(matching)