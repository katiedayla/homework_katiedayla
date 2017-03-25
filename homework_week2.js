

//Assignment 1

for (var i = 99; i > 0; i--) {
  console.log(i + " bottles of beer on the wall " + i +
  " bottles of beer. Take one down and pass it around, " (i-1) +
  " bottles of beer on the wall.");
} else if(i > -1) {
  console.log(i + " bottle of beer on the wall, " + i +
  " bottle of beer. Take one down and pass it around, no more bottles of beer on the wall. No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall." )
}


//Assignment 2

var streetName = ["Rose St", "Alta Vista Ave", "Wesley St", "Higuera St", "Main St"]
var streetNumber = [453, 928, 124, 920, 118]
var cityName = ["Culver City", "West Hollywood", "Beverly Hills", "Carson", "Santa Monica"]
var stateName = ["California", "Colorado", "Texas", "New York", "Ohio"]
var zipCode = [90232, 93827, 91827, 90456, 93012]


console.log(streetNumber[math.random()] + streetName[math.random()] + "," + cityName[math.random()] + "," + stateName[math.random()] + zipCode[math.random()])
