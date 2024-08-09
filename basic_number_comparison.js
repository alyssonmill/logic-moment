let num1 = 0;
let num2 = 1;
let num3 = 2;
let userOption = prompt("Type 1 to find the largest number, Type 2 to find the smaller numer")
let largest
let smaller


switch (userOption) {
    case "1":
        if (num1 >= num2 && num1 >= num3) {
            largest = num1;
            alert(num1)
        }else if (num2 >= num1 && num2 >= num3){
            largest = num2;
            alert(num2)
        }else{
            largest = num3;
            alert(num3)
        }
        break;
        
    case "2":
        if (num1 <= num2 && num1 <= num3) {
            smaller = num1;
            alert(num1)
        }else if(num2 <= num1 && num2 <= num3) {
            smaller = num2;
            alert(num2)
        }else{
            smaller = num3
            alert(num3)
        }
        break;

    default:
        break;
}



