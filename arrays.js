var chocolateBars = new Array("snickers", "hundred grand", "kitkat", "skittles");
var element1 = "almondjoy";

function addElementToBeginningOfArray(chocolateBars, element1) {
  var narray = [element1, ...chocolateBars];
  return narray;
}

function destructivelyAddElementToBeginningOfArray(chocolateBars, element1) {
  chocolateBars.unshift(element1);
  return chocolateBars;
}

function addElementToEndOfArray() {
  
}

funtion 

var names = ["Sheila", "Susan", "Bob", "Buddy"];
var index = 1;
function accessElementInArray(names, index) {
  return names[index];
}

var stuff = ["thing1, thing2", "thing3", "thing4","thing5"];
function destructivelyRemoveElementFromBeginningOfArray(stuff) {
  stuff.shift();
}

var cats = ["Milo", "Garfield", "Otis"];
function removeElementFromBeginningOfArray(cats) {
  cats.slice(1);//slice removes element located before specified index
  return cats;
}

var iceCreams = ["chocolate", "vanilla", "raspberry"];
function destructivelyRemoveElementFromEndOfArray(iceCreams) {
  iceCreams.pop();
  return iceCreams;
}

function removeElementFromEndOfArray() {
  return iceCreams.slice(0, iceCreams.length - 1);
}