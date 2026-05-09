

//    Chapter 20 - Nested Loops


for (var i = 1; i <= 3; i++) {

    for (var j = 1; j <= 5; j++) {

        console.log("Row " + i + " Column " + j);
    }
}



//    Chapter 21 - Changing Case

var city = "karachi";

console.log(city.toUpperCase());
console.log(city.toLowerCase());


//    Chapter 22 - Strings Measuring Length

var text = "JavaScript";

console.log("Length:", text.length);


//    Chapter 23 - Finding Segments

var sentence = "I love JavaScript";

console.log(sentence.indexOf("JavaScript"));


//    Chapter 24 - Finding Character

var word = "Pakistan";

console.log(word.charAt(3));


//    Chapter 25 - Replacing Characters

var message = "Hello World";

var updatedMessage = message.replace("World", "JavaScript");

console.log(updatedMessage);