# Inception-Session1
1.Emmet:

1. It is used to write the code i.e, html and css faster.
2. shortcut for the Emmit is !+Enter , it generated all of the boilerplate of HTML.
3. It is essentially a bunch of different shortcuts and snippets where we tye a small amount of code.
4. It is really powerful when it comes to creating complex HTML.

Example:

IN HTML:

<div id="home">
    <div class="logo">LOGO</div>
    <ul id="navbar">
        <li class="navitem"><a href="" class="navlink">Item 1</a></li>
        <li class="navitem"><a href="" class="navlink">Item 2</a></li>
        <li class="navitem"><a href="" class="navlink">Item 3</a></li>
        <li class="navitem"><a href="" class="navlink">Item 4</a></li>
        <li class="navitem"><a href="" class="navlink">Item 5</a></li>
    </ul>
</div>

BY USING EMMIT:

#home>div.logo{LOGO}+ul#navbar>li.navitem\*5>a.navlink{Item $}

' > ' means Child element
' + ' means Sibling element
' . ' represents CSS Class
' # ' represents CSS ID
' {} ' represents text of an element
' \* ' represents multiplication
' $ ' represents numbering
' ^ ' represents climb-up
' () ' represents Grouping

2. LIBRARY AND FRAMEWORK:

In LIBRARY has less no.of rules.
It is a simply collection of codes
some function and documnet object models are all being packed together and is being used over and over that is called library,So whenever i have the power to call the code whenever we want.
IN THE LIBRARY WE ARE MAKING THE CALL.

In FRAMEWORK has more no.of rules.
Framework calls our code and Further our code calls to library.

3/7.CDN:DIFFFERENCE BETWEEN DEVELOPMENT.js AND PRODUCTION.js FILES VIA CDN

<body>
      <script src="https://unpkg.com/react@18/umd/react.development.js" crossorigin></script> 
      <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js" crossorigin></script> 
   </body>

We are using unpkg CDN. unpkg is an open source, global content delivery network supporting npm packages.

@17represent the version of the React library

This is the development version of the React library with debugging option. To deploy the application in the production environment, we use below scripts.
Minified and optimized production versions of React:

<script crossorigin src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>

USE: To Deliver fast, efficient and secure delivery of content to websites and Internet services.

4.REACT:

React is a javascript library.
It is an open source library for building user interface.
Focus on UI.
Rich ecosystem(handle the http/routing)
It is component based archeiture.
We can reuse the code.

5.CROSS ORIGIN RESOURCE SHARING:

CORS is a mechanism which uses additional http headers to tell the browser whether specific web app can share the resource with another web app.
if the two web app has different domains then they need CORS.

6.REACT AND REACT DOM:

To work with React in the browsers, we need to include 2 libraries.React and ReactDOM.
React library is responsible for creating views and ReactDOM library is responsible to actually render UI in the browser.

8.ASYNC AND DIFFER:

ASYNC:In the ASYNC when the html parsing the code line by line and at the same time javascript file also runnig parallel
when the js code fectched in the browser it executes then and there and after that html code starts the parsing where it is left.
IMP:Doesnot give the gurantee of the order of execution.

DIFFER:In the DIFFER when the html parsing the code line by line and at the same time javascript file also runnig parallel
js code is executes only the html parsing has fully completed.
IMP:Does give the gurantee of the order of execution.
