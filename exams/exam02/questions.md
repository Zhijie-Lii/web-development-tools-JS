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

For the returned plain text,  the username is not an object under JSON case, the value of username is undefined. 

We should print  `user is named username` simply.

## Q3: What does it mean to "store your state in the DOM"?  Why shouldn't you do this?

The DOM is the 'View' in MVC, is to shown in screen, so will be highly related to the display. While a good MVC should separate the temp state as 'Model', will make change to DOM/display less impact on state. And we should make a Object state in browser to better decouple state and display code.

## Q4: Explain the differences between a multiple-page-web application and single-page-web application.  Be sure to fully demonstrate your understanding.

- MPA is the traditional way to reload another page from the server to browser. It may be larger and re-render more traffic.

- SPA is inside one page and load resource, re-render using browser-JS. As a result, the data and html (DOM) should be separate to handle complex data and JS-logic. 

  

## Q5: What is Progressive Enhancement?  What is the difference in an SPA that uses Progressive Enhancement compared to an SPA that doesn't use Progressive Enhancement?



## Q6: Explain how a REST service is or is not similar to a dynamic asset.

## Q7: Give an example of a piece of information you should not store in a cookie, and why you should not store it that way.

We should not store personal data, sentive data, application state and big amount data in cookie. The one reason is for security concerns, and application state varies in tabs while cookie is same across tabs. 

## Q8: Explain why it is useful to separate a function that fetches data from what you do with that data



## Q9: Explain why try/catch is useless when dealing with asynchronous errors (assume you aren't using async/await)

## Q10: Is separation of concerns a front end issue, a server-side issue, or both?  Describe an example the demonstrates your answer.

