// PROBLEM 1: Write a code to ﬁnd area of rectangle
// Define rectangle length and width
let rectangleLength = 20
let rectangleWidth = 10

// Define formula for rectangle area
let rectangleArea = rectangleLength * rectangleWidth

// Deploy Rectangle Area
console.log("PROBLEM 1:")
console.log("Rectangle Length: " + rectangleLength)
console.log("Rectangle Width: " + rectangleWidth)
console.log("Rectangle Area: " + rectangleArea)

console.log("")
// PROBLEM 2: Write a code to ﬁnd perimeter of rectangle
// Define formula for rectangle perimeter
let rectanglePerimeter = (2*rectangleLength) + (2*rectangleWidth)

// Deploy Rectangle Perimeter
console.log("PROBLEM 2:")
console.log("Rectangle Perimeter: " + rectanglePerimeter)

console.log("")
// PROBLEM 3: Write a code to ﬁnd diameter, circumference and area of a circle
// Define circle radius
let circleRadius = 5

// Define circle diameter
let circleDiameter = 2*circleRadius

// Defiine phi value
let phi = 3.14

// Define formula for circle circumference
let circleCircumference = 2 * phi * circleRadius

//Define formula for circle area
let circleArea = phi * (circleRadius ** 2)

// Deploy circle diameter, circumference, and area
console.log("PROBLEM 3:")
console.log("Circle Radius: " + circleRadius)
console.log("Circle Diameter: " + circleDiameter)
console.log("Circle Circumference: " + circleCircumference.toFixed())
console.log("Circle Area: " + circleArea.toFixed())

console.log("")
// PROBLEM 4: Write a code to ﬁnd angles of triangle if two angles are given
// Define Angle 1
let triangleAngle1 = 50

// Define Angle 2
let triangleAngle2 = 80

// Define formula for tiangle angle 3
let triangleAngle3 = 180 - (triangleAngle1 + triangleAngle2)

// Deploy triangle angles
console.log("PROBLEM 4:")
console.log("Triangle Angle 1: " + triangleAngle1)
console.log("Triangle Angle 2: " + triangleAngle2)
console.log("Triangle Angle 3: " + triangleAngle3)

console.log("")
// PROBLEM 5: Write a code to get difference between dates in days
// NOTE: Difference between now to 1 January in next year
// Define currrent date
let currentDate = new Date()

// Define last date in current year
let currentYear = currentDate.getFullYear()
let newYearDate = new Date((currentYear + 1) + "-01-01")

// Define Difference in Time
let differenceInTime = newYearDate.getTime() - currentDate.getTime()

// Define Difference in Days to first day in next year
let differenceInDays = Math.floor(differenceInTime / (1000 * 3600 * 24))

// Deploy the difference in days
console.log("PROBLEM 5:")
console.log("Difference between today to next year 1st January: " + differenceInDays + " Days")

// Convert to Year, Month, & Day
let convertDiffYear = Math.floor(differenceInDays / 365)                  // Convert Year
let daysRemainingFromDiffYear = differenceInDays % 365
let convertDiffMonth = Math.floor(daysRemainingFromDiffYear / 30)   // Convert Remaining Month
let daysRemainingFromDiffMonth = daysRemainingFromDiffYear % 30     // Convert Remaining Days
console.log(convertDiffYear + " Year, " + convertDiffMonth + " Month, " + daysRemainingFromDiffMonth + " Days")

console.log("")
// PROBLEM 6: Write a code to convert days to years, months and days.
let dayNum = 400
let convertYear = Math.floor(dayNum / 365)                  // Convert Year
let daysRemainingFromYear = dayNum % 365
let convertMonth = Math.floor(daysRemainingFromYear / 30)   // Convert Remaining Month
let daysRemainingFromMonth = daysRemainingFromYear % 30     // Convert Remaining Days

// Deploy Date Convertation
console.log("PROBLEM 6:")
console.log("Number of days: " + dayNum)
console.log(convertYear + " Year, " + convertMonth + " Month, " + daysRemainingFromMonth + " Days")
