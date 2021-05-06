# Exam 2 Questions

* Answers should be roughly 2-5 sentences, and in your own words.  
* Some questions ask for a code sample - keep them short and to the point.
* Be sure to be clear - be careful not to use vague pronouns like "it" if I can't be completely sure what "it" is.
* I cannot assume knowledge you don't demonstrate, so be clear and explicit.

## Q1: The first rule I've given about REST services is that the URL should represent a resource.  What does that mean?  Give an example where a url DOES not represent a resource, then describe how to modify it so that it does.

URL is the given resource to interact with, usually with a "noun". 

For example, in a inventory of items stocked, to add a new item into server-side, the bad example is /addItem/, which will make a URL only apply to a certain method. Better way is /item/ and with a method 'POST'.

## Q2: If the service returns the username as a plain text string (not JSON), what is wrong with the below and what would fix it? (Assume the service works without error)

```
  const username = fetch('/username');
  console.log(`user is named ${username}`);
```

If using 'fetch' returns with string, the response will be "Response Object", we need to username.text() to retrieve the string



## Q3: What does it mean to "store your state in the DOM"?  Why shouldn't you do this?

It means that we should make a Object state in browser to better decouple state and display code. The DOM is the 'View' in MVC, is to shown in screen, so will be highly related to the display. While a good MVC should separate the temp state as 'Model', and make changes on DOM/display have less impact on state. 

## Q4: Explain the differences between a multiple-page-web application and single-page-web application.  Be sure to fully demonstrate your understanding.

- MPA is the traditional way to reload another page from the server to browser. It may be larger and re-render more traffic.

- SPA is inside one page and load resource, re-render using browser-JS. As a result, the data and html (DOM) should be separate to handle complex data and JS-logic. 

  

## Q5: What is Progressive Enhancement?  What is the difference in an SPA that uses Progressive Enhancement compared to an SPA that doesn't use Progressive Enhancement?

Progressive Enhancement is a way to combine semantic html and forms to load pages (non-client-JS),  with the front-end-JS together, to be best utilized for app without front-JS, or search engine with old JS.

For SPA using PE, the front-JS would first turn off the functionality of forms in the existed DOM, and according to given event, to call the specific event handlers. 

On the other hand, if without PE, the SPA would always pass the whole forms to the server.

## Q6: Explain how a REST service is or is not similar to a dynamic asset.

A REST service usually uses with SPA, combines as Progressive Enhancement, is much modern way than dynamic web page loading. The dynamic asset means we have to implement side by side from server to client as a whole, they can't be decoupled and apply to other applications. While RESTful can also apply to third party system, only if server have REST API on it.

## Q7: Give an example of a piece of information you should not store in a cookie, and why you should not store it that way.

We should not store personal data, sentive data, application state or big data in cookie.     One reason is for security concerns, personal contact or passwords may be access by unauthorized browsers.  And application state varies in tabs while cookies are the same across tabs, so they would conflict.

## Q8: Explain why it is useful to separate a function that fetches data from what you do with that data

In the MVC framework, the fetch service is Control part, as data is Model part. To separate them make it easier to reuse the code or add complex features later. If we combine these two into one function, the side-effect will make it unclear to change or reuse in another case.

## Q9: Explain why try/catch is useless when dealing with asynchronous errors (assume you aren't using async/await)

Try/catch in async have a problem that normal executive order would only run first try and then catch, but in async the error may be thrown after catch, and not be caught. So the sync order using try/catch is ineffective in async.

## Q10: Is separation of concerns a front end issue, a server-side issue, or both?  Describe an example the demonstrates your answer.

Separation of concerns is both front-end and server-side issue, and also a philosophy in others programming language. We use them to make our function pure and clearer, confident to reuse in different cases. Imagine a music record application, on server side, the logic to mantain the database and the DB itself must be separate so that the system can apply to different DBs, it is much more reusable.