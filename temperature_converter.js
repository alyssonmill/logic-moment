let userInput = prompt("Input a temperature");
let userOption = prompt("Press 1 to convert from C to F, Press 2 to convert from F to C");
let result

switch (userOption) {
    case "1":
        result = (userInput * 9 / 5) + 32 ;
        console.log(userInput + "°C" + " = " + result + "°F")
        break;

    case "2":
        result = (userInput - 32) * 5 / 9 ;
        console.log(userInput + "°F" + " = " + result + "°C")
    default:
        break;
}
