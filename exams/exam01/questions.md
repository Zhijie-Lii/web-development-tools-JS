# Exam 1 Questions

* Answers should be roughly 2-5 sentences, and in your own words.  
* Some questions ask for a code sample - keep them short and to the point.
* Be sure to be clear - be careful not to use vague pronouns like "it" if I can't be completely sure what "it" is.
* I cannot assume knowledge you don't demonstrate, so be clear and explicit.

## Q: What is the difference between a dynamic asset and a static asset?

- Static asset on web is html that be sent back to browser and is repeatable. Usually by a "GET" method with no request body
- Dynamic asset must pull in the request information and send back respond according to request. So dynamic asset is changing, and not repeatable. It is used by "POST".

## Q: What is the difference between a relative and absolute file path in an href?  What is the "webserver root/document root" and how do absolute/relative paths relate to this document root?

Absolute path always start with "/" from root directory. On the other hand, relative path with no root '/', and start from current loaded page. Web server root is the place where data on server is put.

So when refer to document root from different devices or tabs, absolute path is always different and cause problems, while relative path is easy and simple to relate 

## Q: What is the difference between server-side and client-side JS?

- Browser have virtual machine to compile JS. Client-side JS is used to render the page. Plus it have the DOM
- While server-side JS could not be compiled but interpreted as only programming language.



## Q: What are the differences between `var`, `const`, and `let`, and when should you use each of them?

- Mostly, **const** is preferred for once it is set, could not be assign again, 

- var is a relatively outdated keyword, whose scope is the whole function and instance's value is changeable which may be changed by others easier and cause errors. And it is hoist that it will be first call in the program wherever it is.

- let is oftenly used in a loop and need to be reassign the value, with block-wide scope

  

## Q: What are the 4 ways to create inheritance in JS? (no examples needed, just a sentence describing each)

- The mostly used is constructor, by using keyword **this** in Object function and **new** to call the constructor function, to make prototype and create inheritance.
- object.create( instance )  is also a equally good way to call prototype, but we should manually add  .someFunction to make **this** bound to the function.
- a Java like method is to use 'class' named object, and then like the constructor method. It should be cautious that the instance can add some new functions the and seems misleading in other language
-  to assign prototype directly by **setPrototypeOf()** which should only be considered when meeting weird library

## Q: Give a short code demonstration of 1 way to create JS inheritance to __inherit__ a method named "purr".

const Cat = function(name) {

  this.name = name; };



Cat.prototype.purr = function() {

  console.log(`${this.name}  is happy`);

};



const lily = new Cat('Lily');

lily.purr();

## Q: Give a short code demonstration of a different way to create JS inheritance to __inherit__ a method named "hiss".

const dog = {

  hiss : function() {

​    console.log(`${this.name} is angry`);

  }

};

const benson = Object.create(dog);

benson.name = 'Benson';

benson.hiss( );

## Q: Explain what a callback is, and give an example.

The callback is code from high-level that we could define and pass it to lower API to have the function we want. It helps to decouple codes and make API better reusable for asynchronous case.

In the class example, **tellTeacher()** is the callback that be passed to checkGrade(**student, callback**). When we could access to checkGrade(), we could change the condition of when to invoke callback () and adjust **tellTeacher()** to **praiseStudent()**.



## Q: What are the words that would correctly fill in the space in this sentence:

"If a function using `this` is `_______`, then `this` will not have the intended implicit value"

**called as a callback function**



## Q: In CSS, what does it mean "You shouldn't name your classes after what they look like"?   Why?  Give an example of a class that is well named and a class that is poorly named.

Because the browser will always alter apprearance of the page, there will be different showing patterns on different platforms like mobile, Chrome or Safari. We, when writing the CSS or HTML, have no idea of the class looks like in a given setting, so it's inaccurate to name a class after its apprearance, instead, we name it after its semantic meaning. Like in a chat box, "topping" or "bottom" is a bad case, while "chat-user" is a better css class name.