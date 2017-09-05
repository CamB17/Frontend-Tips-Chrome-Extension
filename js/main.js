//JS Tips
var tipsList = [
  "Don't forget the <span class='code'>var</span> keyword when assigning a variable's value for the first time.",

	"<span class='code'>Stacks</span> are a collection of items. It allows access to only one data item: the last item inserted. This structure of accessing is known as Last in First out structure (LIFO). </br><span class='code-block'>if I have a list a, b, c, and I add d, it gets tacked on the end, so I end up with <em>a,b,c,d. If I want to pop an element of the list, I remove the last element I added, which is d. After a pop, my list is now a,b,c again</span>",

	"<span class='code'>Ques</span>Queue is a ordered collection of items. Items are inserted at other end called ‘rear’ of the queue. Items are deleted at one end called ‘front’ end of the queue. The first item inserted is the first to be removed (FIFO):<span class='code-block'>For a queue, I add new elements in the same way. a,b,c becomes a,b,c,d after adding d. But, now when I pop, I have to take an element from the front of the list, so it becomes b,c,d.</span>",

	"<span class='code'>undefined</span>, <span class='code'>null</span>, <span class='code'>0</span>, <span class='code'>false</span>, <span class='code'>NaN</span>, and <span class='code'>''</span> (empty string) are all falsy.",

	"Loose Equality<span class='code'>==</span></br><span class='code-block'>Loose equality is symmetric: A == B always has identical semantics to B == A for any values of A and B (except for the order of applied conversions).</span>",

	"Strict Equality<span class='code'>===</span> </br><span class='code-block'>var num = 0; </br> var obj = new String('0'); </br> var str = '0'; </br> console.log(num === num); // true </br> console.log(obj === obj ); //true </br>  console.log( num === obj ); //false </br> condole.log( obj === dtr ); // false </span>",

	"Declare a function with<br/> <span class='code-block'>function <em>myFunctionName</em>() { <br>&nbsp;&nbsp;...<br> }</span>",

	"<span class='code'>if</span>/<span class='code'>else</span> statements look like <br/> <span class='code-block'>if (<em>condition</em>) { <br/>&nbsp;&nbsp;...<br/>} else { <br/>&nbsp;&nbsp;...<br/>}",

	"You can return the result of a function into a variable with <span class='code'>return</span>:<br><span class='code-block'>function timesFive(inputNumber) {<br> &nbsp;&nbsp;return inputNumber * 5; <br>}<br>console.log(timesFive(6));<br>// Output: 30</span> ",

	"The <span class='code'>&&</span> operator means both things must be true: <br/> <span class='code-block'> true && true = true<br>true && false = false<br>false && false = false</span>",

	"The <span class='code'>||</span> operator means either can be true: <br/> <span class='code-block'> true || true = true<br>true || false = true<br>false || false = false</span>",

	"A <span class='code'>for</span> has three condtions: a start condition, a stop condition, and an iterator: <br> <span class='code-block'>for (var i = 0; i < myArray.length; i++) { <br>&nbsp;&nbsp;...<br>}</span>",

	"To interpolate a variable into a string, use the <span class='code'>+</span> operator, like this: <br> <span class='code-block'>var myName = 'Jon';<br/> 'Hello, my name is ' + myName;</span>",

	"To generate a random number, use JavaScript's built in function <span class='code'>Math.random()</span>.",

	"Arrays hold lists of data. You can access any of the list items by using bracket notation, like this: <br> <span class='code-block'>var myArray = ['pears', 'asparagus', 'bananas'];<br>myArray[1]; // asparagus</span>"

  "<span class='code'>for loop</span>",

  "<span class='code'>while loop</span>",

];

// var cssTipList = [
//
//   "There are <span class='code'>THREE</span> position properties in css:<br /><span class='code'>Static</span> : default positioning for an element.<br /><span class='code'>Absolute</span> : postion an element absolutly anywhere without disturbance<br /><span class='code'>Relative</span> :<br /><span class='code'>Fixed</span> : ",
//
// ];

//Generate a number
function generateNumber() {
    return Math.floor(Math.random() * tipsList.length);
}

//Generate JS tip
function generateTip() {
    var tip = tipList[generateNumber()];
    var tipElement = document.querySelector('.js-tip');
    var tipLimitCounter = document.querySelector('.tip-limit');

    tipElement.innerHTML = tip;
    tipLimitCounter.innerHTML = tipLimit;
}

//Generate CSS tip
// function generateCssTip() {
//     var cssTip = cssTipList[generateNumber()];
//     var cssElement = document.querySelector('css-tip');
//     var tipLimitCounter  = document.querySelector('tip-limit');
//
//     cssElement.innerHTML = cssTip;
//     tipLimitCounter.innerHTML = tipLimit;
//
// }

//Tip Button Event
function onTipButtonClick() {
    var tipButton = document.querySelector('.tip-button');
    tipButton.addEventListener('click', function() {
      tipLimit = tipLimit -1;
      if (tipLimit >= 0 ) {
        generateTip();

        if (tipLimit === 0) {
        tipButton.innerHTML = "New Tip";
        tipButton.classList.add('disabled');
        }
      }
    });
}
//Call click
onTipButtonClick();
//Call selected tip
generateTip();
generateCssTip();
