//PART 1
//Build a program that prints the "grade" for the following requirement using if-else if-else structure
//*. There are "score" and "grade" variables declared for you
//1. If score >= 60 then grade = "D"
//2. If score >= 70 then grade = "C"
//3. If score >= 80 then grade = "B"
//4. If score >= 90 then grade = "A"
//5. If score < 60 then grade = "F"

let score = 76;
let grade;

if (score >= 90) {
    grade = "A";
} else if (score >= 80) {
    grade = "B";
} else if (score >= 70) {
    grade = "C";
} else if (score >= 60) {
    grade = "D";
} else {
    grade = "F";
}

console.log(`Your grade is: ${grade}`);

//PART 2
//Build a program that prints the "monthName" for a given "monthNumber" using if structure
//*. There are "monthName" and "monthNumber" variables declared for you
//1. The program must print "Invalid month number" for an invalid monthNumber (eg: 20)

let monthNumber = 5;
let monthName;

if (monthNumber === 1) {
    monthName = "January";
}
if (monthNumber === 2) {
    monthName = "February";
}
if (monthNumber === 3) {
    monthName = "March";
}
if (monthNumber === 4) {
    monthName = "April";
}
if (monthNumber === 5) {
    monthName = "May";
}
if (monthNumber === 6) {
    monthName = "June";
}
if (monthNumber === 7) {
    monthName = "July";
}
if (monthNumber === 8) {
    monthName = "August";
}
if (monthNumber === 9) {
    monthName = "September";
}
if (monthNumber === 10) {
    monthName = "October";
}
if (monthNumber === 11) {
    monthName = "November";
}
if (monthNumber === 12) {
    monthName = "December";
}
if ((monthNumber > 12) || monthNumber < 1) {
    monthName = "Invalid month number";
}

console.log(monthName);

//PART 3
//Optimize the above code using if-else if structure
if (monthNumber === 1) {
    monthName = "January";
} else if (monthNumber === 2) {
    monthName = "February";
} else if (monthNumber === 3) {
    monthName = "March";
} else if (monthNumber === 4) {
    monthName = "April";
} else if (monthNumber === 5) {
    monthName = "May";
} else if (monthNumber === 6) {
    monthName = "June";
} else if (monthNumber === 7) {
    monthName = "July";
} else if (monthNumber === 8) {
    monthName = "August";
} else if (monthNumber === 9) {
    monthName = "September";
} else if (monthNumber === 10) {
    monthName = "October";
} else if (monthNumber === 11) {
    monthName = "November";
} else if (monthNumber === 12) {
    monthName = "December";
} else if ((monthNumber > 12) || monthNumber < 1) {
    monthName = "Invalid month number";
}

//PART 4
//Further optimize the above code using if-else if-else structure
if (monthNumber === 1) {
    monthName = "January";
} else if (monthNumber === 2) {
    monthName = "February";
} else if (monthNumber === 3) {
    monthName = "March";
} else if (monthNumber === 4) {
    monthName = "April";
} else if (monthNumber === 5) {
    monthName = "May";
} else if (monthNumber === 6) {
    monthName = "June";
} else if (monthNumber === 7) {
    monthName = "July";
} else if (monthNumber === 8) {
    monthName = "August";
} else if (monthNumber === 9) {
    monthName = "September";
} else if (monthNumber === 10) {
    monthName = "October";
} else if (monthNumber === 11) {
    monthName = "November";
} else if (monthNumber === 12) {
    monthName = "December";
} else {
    monthName = "Invalid month number";
}

//PART 5
//Further optimize the above code by converting it to the switch structure
switch (monthNumber) {
    case 1:
        monthName = "January";
        break;
    case 2:
        monthName = "February";
        break;
    case 3:
        monthName = "March";
        break;
    case 4:
        monthName = "April";
        break;
    case 5:
        monthName = "May";
        break;
    case 6:
        monthName = "June";
        break;
    case 7:
        monthName = "July";
        break;
    case 8:
        monthName = "August";
        break;
    case 9:
        monthName = "September";
        break;
    case 10:
        monthName = "October";
        break;
    case 11:
        monthName = "November";
        break;
    case 12:
        monthName = "December";
        break;
    default:
        monthName = "Invalid month number";
        break;
}

//PART 6
//Build a program that prints days of the week starting from the "weekDayName" until "Saturday"
//*. Assume that the week starts with "Sunday" and ends with "Saturday"
//*. There is "weekDayName" variable declared for you
//1. The program must print "Invalid week day" for an invalid weekDayName (eg: Mayday)

let weekDayName = "Thursday";

switch (weekDayName) {
    case "Sunday":
        console.log("Sunday");
    case "Monday":
        console.log("Monday");
    case "Tuesday":
        console.log("Tuesday");
    case "Wednesday":
        console.log("Wednesday");
    case "Thursday":
        console.log("Thursday");
    case "Friday":
        console.log("Friday");
    case "Saturday":
        console.log("Saturday");
        break;
    default:
        console.log("Invalid week day");
        break;
}