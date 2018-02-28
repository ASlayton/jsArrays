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

