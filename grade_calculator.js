let mark1 = 7;
let mark2 = 9;
let mark3 = 8;
let result
let userOption = prompt("Type 1 to calculate the total marks | Type 2 to calculate the average marks")


switch (userOption) {
    
    case "1":
        result = mark1 + mark2 + mark3;
        console.log("This is your total marks: " + result);
        break;

    case "2":
        result = (mark1 + mark2 + mark3) / 3;
        console.log("This is your avarege marks: " + result);

    default:
        break;
}

