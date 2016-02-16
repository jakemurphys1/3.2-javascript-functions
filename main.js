/**
 *
 */

// ---------------------
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript.
// ---------------------

function max(first, second){
    "use strict";
    if(first===second){
    alert("You can't have two numbers will the same value.")
      return;
    }
    if(first>second){
      return first;
    } else {
      return second;
    }
}
console.assert(max(1,2)===2);
// ---------------------
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// ---------------------

function maxOfThree(first, second, third){
    "use strict";
if(first===second || first===third || second===third){
alert("You can't have two numbers will the same value.")
  return;
}

    if (first>second && first > third){
      return first;
    } else if(second>first && second > third) {
      return second;
    } else{
      return third;
    }
}
console.assert(maxOfThree(1,2,3)===3);
// ---------------------
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// ---------------------

function isVowel(char){
    "use strict";

  if(char ==="a" || char==="A" || char==="e" || char==="E" || char==="o" || char==="O" || char==="i" || char==="I"|| char==="u" || char==="U"){
    return true;
  }else {
    var randnum = Math.floor((Math.random() * 2) + 1);
    if((char === "y" || char==="Y") && randnum===2){
      return true;
    }else{
      return false;
    }
  }
}
console.assert(isVowel("a")===true);
// ---------------------
// Write a function rovarspraket() that will translate a text into "rövarspråket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
// ---------------------

function rovarspraket(phrase){
    "use strict";
    var phrasepiece=phrase.split("");
    var totalstring="";

  for(var i =0;i<phrase.length;i++){
    if(isVowel(phrasepiece[i])){
totalstring+=phrasepiece[i];
    } else{
      totalstring+=phrasepiece[i] + "o" + phrasepiece[i];
    }
  }
return totalstring;
}
console.assert(rovarspraket("hello")==="hohelollolo");
// ---------------------
// Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
// ---------------------

function sum(array){
    "use strict";
    var totalsum=0;
    for(var i = 0; i<array.length;i++){
      totalsum+=array[i];
    }
return totalsum;
}
console.assert(sum([1,2])===3);

function multiply(array){
    "use strict";
    var totalsum=1;
    for(var i = 0; i<array.length;i++){
      totalsum*=array[i];
    }
return totalsum;
}
console.assert(multiply([1,2])===2);
// ---------------------
// Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
// ---------------------

function reverse(phrase){
    "use strict";
  var totalstring="";
  var phrasepiece= phrase.split("");
  for(var i = phrasepiece.length-1;i>=0;i--){
    totalstring+=phrasepiece[i];
  }
  return totalstring;
}
console.assert(reverse("cat")==="tac");
// ---------------------
// Write a function findLongestWord() that takes an array of words and returns the length of the longest one.
// ---------------------

function findLongestWord(words){
    "use strict";
    var largestnum=0;
    for(var i =0;i<words.length;i++){
      if(words[largestnum].length<words[i].length){
        largestnum=i;
      }
    }
    return words[largestnum]
}
console.assert(findLongestWord(["cat","long","longer","longest"])==="longest");

// ---------------------
// Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
// ---------------------

function filterLongWords(words, i){
    "use strict";
  var inum=0;
  var ivar=[];
  for(var p =0;p<words.length;p++){
    if(words[p].length>i){
      ivar[inum]=words[p];
      inum+=1;
    }
  }
  return ivar;
}


//function for filterLongWords is at bottom
console.assert(arraysEqual(filterLongWords(["this", "is", "a", "short","sentence"],3),["this", "short", "sentence"]))

// ---------------------
// Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
// ---------------------




function charFreq(string){
    "use strict";
    var stringarray=string.split("");
    var chararray=[];
  function thischar(name){
    this.name=name;
    this.quantity=0;
  }

for(var p =0;p<stringarray.length;p++){

var isnew=true;
  for(var i =0;i<chararray.length;i++){
      if(stringarray[p]===chararray[i].name){
  isnew=false;
  chararray[i].quantity+=1;
      }
  }

  if(isnew){
    chararray[chararray.length]=new thischar(stringarray[p]);
  }

}

var totalstring=""
for(var q=0;q<chararray.length;q++){
  totalstring+= chararray[q].name + ": " + (chararray[q].quantity+1) + ",";
}
return totalstring
}
console.assert(charFreq("scooby dooby doo")==="s: 1,c: 1,o: 6,b: 2,y: 2, : 2,d: 2,")


//not part of assignment but required to compare arrays for filterLongWords section
function arraysEqual(a, b) {
  if (a === b) return true;
  if (a == null || b == null) return false;
  if (a.length != b.length) return false;

  // If you don't care about the order of the elements inside
  // the array, you should sort both arrays here.

  for (var i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}
