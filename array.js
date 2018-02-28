console.log("Hello.");

var a = [1,2,3];
console.log(a.join(''));

var b = "Join us";
console.log(b.split());

// CHAllENGE 1

var test1 = 'cat';
var test2 = 'racecar';
var test3 = 'bear';
var test4 = 'mom';


//ANSWER
var test = "cat";
var opp = test.split("").reverse().join("");
if (test === opp){
  console.log("same?:", true);
}else{
  console.log("same?:", false);
}


var animals = ['fish','dog','cat'];
var animalzElement = document.getElementById('animalz');

for(var i=0; i < animals.length; i++){
  // console.log("animal:", animals[i]);
  animalzElement.innerHTML += '<h5>' + animals[i] + '</h5>';
}

// CHallenge 2

// var book1 = "Catch 22";
// var book2 = "Slaughterhouse 5";
// var book3 = "Farenheit 451";
// var book = "3 blind Mice";

// var bookSplit = book.split("");
// var bookNum = "";
// for(var i = 0; i < book.length; i++) {
//   if (isNaN(bookSplit[i])){
//     //Do Nothing
//   }else{
//     bookNum += bookSplit[i];
//   }
// }
// console.log(bookNum);



// CHALLENGE 2 ANSWER

var book = "catch 22";
var bookSplit = book.split("");
var realNumz = [];
for(var j = 0; j < bookSplit.length; j++){
  if (bookSplit[j] * 1 ){  //Multiply a letter by 1 = NaN, statement tests as true
    realNumz.push(bookSplit[j]);
  }
}
console.log("answer:", realNumz.join(""));

