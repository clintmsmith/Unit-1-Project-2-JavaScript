let golferName = prompt ("Welcome to GC mini golf! What is your name?");
let holeCount = prompt (`Hi, ${golferName}! Would you like to play 3 or 6 holes?`)

if (holeCount === '3') {
    var hole1a = prompt (`How many putts for hole 1?`)    
    var hole2a = prompt (`How many putts for hole 2?`)
    var hole3a = prompt (`How many putts for hole 3?`)
} else {
    var hole1b = prompt (`How many putts for hole 1?`)    
    var hole2b = prompt (`How many putts for hole 2?`)
    var hole3b = prompt (`How many putts for hole 3?`)
    var hole4 = prompt (`How many putts for hole 4?`)
    var hole5 = prompt (`How many putts for hole 5?`)
    var hole6 = prompt (`How many putts for hole 6?`)
}

    let number_hole1a = Number(hole1a);
    let number_hole1b = Number(hole1b);
    let number_hole2a = Number(hole2a);
    let number_hole2b = Number(hole2b);
    let number_hole3a = Number(hole3a);
    let number_hole3b = Number(hole3b);
    let number_hole4 = Number(hole4);
    let number_hole5 = Number(hole5);
    let number_hole6 = Number(hole6);

console.log (golferName);

let totalScore3 = (number_hole1a + number_hole2a + number_hole3a) - 9;
let totalScore6 = (number_hole1b + number_hole2b + number_hole3b + number_hole4 + number_hole5 + number_hole6) - 18;

if (holeCount === '3')
    if (totalScore3 === '0')
        console.log (`Good game, ${golferName}.  Your total par was: 0.`)
    if (totalScore3 > '0')
        console.log (`Nice try, ${golferName}... Your total par was: +${totalScore3}.`)
    if (totalScore3 < '0')
        console.log (`Great job, ${golferName}! Your total par was: ${totalScore3}`)

if (holeCount === '6')
    if (totalScore6 === '0')
        console.log (`Good game, ${golferName}.  Your total par was: 0.`)
    if (totalScore6 > '0')
        console.log (`Nice try, ${golferName}... Your total par was: +${totalScore6}.`)
    if (totalScore6 < '0')
        console.log (`Great job, ${golferName}! Your total par was: ${totalScore6}`)