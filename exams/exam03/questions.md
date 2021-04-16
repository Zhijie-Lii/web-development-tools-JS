# Exam 3 Questions

* Answers should be roughly 2-5 sentences, and in your own words.  
* Some questions ask for a code sample - keep them short and to the point.
* Be sure to be clear - be careful not to use vague pronouns like "it" if I can't be completely sure what "it" is.
* I cannot assume knowledge you don't demonstrate, so be clear and explicit.

* NOTE: Because there is no coding portion to Exam 3, each of these questions is worth more to your grade than the questions on previous Exams!  Be sure to have answers you are confident shows your understanding!

## Q1: I have said that React JSX components are like functions and follow many of the same best practices.  Give at least 2 such best practices that are good for both JS functions and JSX Components.  (Give details!)

- React component and function both care the naming of inside variables, apart from top-level name of component, they use camelCase. 
- They both prefer `const` instead of `let` and avoid `var`
- They should both keep decoupling, that make a component  specific for clear purposes, moving logic part out of it or into another block.

## Q2: I have said that using Progressive Enhancement (supporting both MPA and SPA) is best, but many places don't do so because of the effort involved.  What is at least one major reason not to use SPA alone?

Compared to PE, SPA has higher require for browser. Some old-version browser is not using JS or not support newer-version JS. In that case, the page would show nothing and make inconvenient. If using MPA, there will still be dynamic asset rendered on page, it's working though not that fancy and convenient.

## Q3: The "proxy" setting in your package.json is required for the create-react-app dev server to call a local service, but not if you are calling a service that will always be on a different domain.  Explain what happens (in terms of network traffic) when your dev server is running on localhost port 3000 and the page makes a call to `/service` when you have "proxy" set to `http://localhost:4000` and a server running on localhost port 4000 that has the `/service` service.  hint: This should list and describe multiple request/response steps, and be clear where each request is coming from and where the response is received.

1. If page make call to services, the fetch first go to local service (default port 3000), local server found no asked URLs. Then it check the "proxy" to send request from page to setting server 'behind'.
2. The server on port 4000 get the req and check the URLs matched, it sends response to port 3000 the given data.
3. The local server get the response from port 4000, matched with ask from page, then send response to page with data.
4. Finally, page receives response from local server it wants and render it out. However, page has no aware of port 4000 and where real data comes from.

## Q4: Follow-up: Using the above scenario, list and describe what the network calls are like after you run `npm run build` and are only running all of your content on localhost port 4000 when your JSX makes a call to `/service`

After `npm run build` , React use web-pack to pack all back-end files including server, html, css and browser-JS into '/build/static '. 

When service is called, fetch will go into server in /static to get data from bundled files and send back fetched resources. The react server send response based on /static to browser and render it out.

## Q5: I have said that you can only pass data "down" in React, not "up".  What does that mean?  Give simple code sample if that makes it easier to describe.

The App.jsx can pass wrapped **userState** inside **login** function to child component Login.jsx. The child receives the prop and read from it. However, Login.jsx could not pass to parent. 

if (userState.isLoggedIn) {

​    chatPage = <**Chat** />;

  } else {

​    chatPage = <**Login** *onLogin*={**login**}/>;

## Q6: Follow-up: If you can't pass data "up" the component tree, how can anything that is "down" change data that is in an ancestor?  Give simple code samples if that makes it easier to describe.

The Login.jsx, take **login** function from App.jsx and add its own state like input username into **onlogin** function and as callback to parent App.jsx

`onLogin({ username });`

## Q7: Imagine you have a collection of student records, with each having a student id, a name, and an address. (an example of one item in the collection would be: { id: "654321", name: "Bao", address: "123 Main Street" })  Imagine you also have collection of steps to create a pizza, with each step having an ingredient, a quantity, and an instruction. (an example of one item in the collection would be the object { qty: "1 cup", ingredient: "shredded cheese", instructions: "sprinkle over pizza" })

Give a code sample where each collection is shown with at least one more element (2+ students for the first collection, 2+ pizza-making steps).  Make sure you make proper use of arrays and objects.  Explain why you've chosen each way of making a collection (e.g. Why you use an array for one or both, or why you use an object for one or both)

- `{1: { id: "654321", name: "Bao", address: ... },  2:  { id: "654322", name: "Wu", address: ... },  3: { id: "654323", name: "Ja", address: ... } }`
- `[{ qty: "500g", ingredient: "flour", instructions: "..." }, { qty: "1 cup", ingredient: "shredded cheese", instructions: "..." }, { qty: "100ml", ingredient: "water", instructions: "stir it" }]`
- First, for students object, it's easier to search with keys and the order does not matter
- For the instruction array, we should follow elements one by one, order matters

## Q8: How does inheritance in JS relate to a prototype?  Give a simple code sample if it helps explain.

Conside `function doSomething(){}`

As JS object finds property follow prototye link from low to high

`doSomething.prototype.foo = 1`

`let doSomeInstancing = new doSomething()`

 we create doSomeInstancing inherits from doSomething

## Q9: What is wrong about this code sample? `if( !username || username == undefined) { ` Be sure to explain why that is wrong.

The two is same to check if username is assigned a value. If username is "  ", it would not checked

## Q10: In your own words, what is decoupling?  What is an example of decoupling in a React app?  Why is this beneficial?

Decoupling is to make a function as pure or specific on certain purposes as possible.

In React, we extract Nav and Login from main App.jsx, and also take logic part outside like `reducer.js` to make App.jsx clear enough.

By seperate all differernt purpose of functions, every part has little known how props is passed in and what its state is managed outside. Code would be much easier to reuse or modefy later. 

## Q11: In React you should not read/write from/to the DOM directly.  If you wanted a button that changed the background color of an element between two choices, how would you change that color without modifying the style attribute of the element?  Be sure to describe how you make this happen using React.

We should not use `querySelector()` or `classList()` to modefy because it would conflict with virtualDOM in React.

`const setTheme = () => {if (theme==light) {theme=dark;}}` and same with set to light

`<button onclick={setTheme}>`  and inside css add two selector `.dark` `.light`

## Q12: Imagine you have a React application with an input field and a button.  When you click the button, it should call a service you have written and pass the value from the input field, and display a string returned in the service JSON on the page.  Also imagine that it is not working.  Describe at least two ways you could figure out if the problem is in the service code or if the problem is in the React code.  Hint: This question is about debugging, not coding

- First console.log() could be add to blocks in service or front-end to print and see outcome value; we could also go to chrome console or terminal to check any error or undefined
- Chrome debugger can be used to put breakpoints inside front-end code or in services, we look into them step by step to check if expected value is got

## Q13: How many times would the below code render (if there are no changes from outside this code), and what is the rendered output for each of those times, and what triggered (caused) the render?  Assume something DOES cause this to be rendered at least once.
```
import { useState } from 'react';

function Demo() { 
  const [count, setCount] = useState(0);
  if (!count){
  	setCount(1);
  }
  return (
    <div>{count}</div>
  );
}
```

It would render twice. First count get default value of 0 with no output, then count is set to be 1 and updated state trigger another render,  print on screen of "1".

## Q14: What happens with the below code when rendered and why?

```
import { useState, useEffect } from 'react';

function Demo() { 
  const [count, setCount] = useState(0);
  
  useEffect( () => { 
    Promise.resolve().then( () => { 
      setCount(count + 1);
    });
  }, [count]);
  return (
    <div>{count}</div>
  );
}
```

The code would run in a infinite loop and count keeps increasing fast.

Inside useEffect, count is set to increment 1 and trigger a re-render. Then useEffect check the `[count]` is changed and rerun again. And setCount again. We should not put count inside the array.

## Q15: What is the difference between `WHATEVER.json(...)` in browser-side code and server-side code?  (assume variables are named according to our normal practice)

- On browser-side, `response.json()` is to parse received data from server-side, response contains pass-in data. There is no argument inside
- On server-side, `res.json(someData)` , some data must be added as params to send as response to front-end

## Q16: In our projects we had our services on the same server as our HTML/JS/CSS.  What would be different about the urls in our browser-side fetch code if our services were on a different server? (in production, not in development)

When having CORs issue, the URL from page request would contain headers to prove to browser, after that, browser would give data and pass request to server-side. As CORs is a must for security concerns and could not walk around.

## Q17: In our projects we had our services on the same server as our HTML/JS/CSS.  What would be different about the responses from our server-side code if our services were on a different server? (in production, not in development)

On server-side, it uses middleware from `./build` rather than ./public because the webpack bundle all files into ./build. 

And the response also contains headers to say about CORs

## Q18: If a browser navigates to `http://localhost:3000/page/start` on an express server set up in our conventional way with the below routes, list the web request(s)/response(s) involved, and what the user will see.  (Hint: If you are uncertain, you can set up and try this code!)

```
app.get('/page/start', (req, res) => { 
  res.redirect('/page/end');
});

app.get('/page/end', (req, res) => { 
  res.send('Hello World');
});
```
User will see a glimpse of blank page and soon jump into another blank page, where the URL ending in `/page/end`. And if open Network tab, the /end call shows a response of {"Hello World"}

## Q19: The web is stateless.  When we log in to websites, we have an experience that looks stateful (We do not have to log in to every page).  Assuming cookie-based sessions, how does this work?

Web communicates based on all contained info. After we logged-in, the page send request with cookies. Cookies have session id (to identify the unique session of the log in).

Server receives and check session id and keep the session, (in other case, it would end session), and do additional work.

By this authentication, the page keep logged-in for us under the scene.

## Q20: I have said that "working code is the start of programming, not the end".  If "working" isn't what defines good code, what does?

- Good working code should be simple to read and skim. Later co-worker can understand const name without extra comments
- Time and zone complex must be control
- Based on law of Demeter, every part of functions shall have specific purpose and clear name. It makes code much easier to reuse and modefy after.