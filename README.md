### Node.js and Backbone

####Getting started with Node.js

- First you need to create a `package.json` file. `npm init` walks you through the process.
- Install your command utilities. `npm install -g nodemon`, `npm install -g node-debug`
- Install local packages, ie. `npm install --save url-pattern`
- Create an init file and run using `node index.js`

####Getting started with Backbone.js

Backbone supplies structure to JavaScript-heavy applications by providing models with key-value binding and custom events, collections with a rich API of enumerable functions, views with declarative event handling, and connects it all to your existing application over a RESTful JSON interface.

- I'm using Bower for the client's package manager. Add bower.json with `bower init`.
- Add Backbone and jQuery: `bower install backbone --save`, `bower install jquery --save`
- Set up `index.html`, `init.js`, and Backbone file structure.

#### Handling Cross-Origin Resource Sharing with Node

Whenever your browser needs to send a cross-origin request it will do so using the HTTP [Options](http://zacstewart.com/2012/04/14/http-options-method.html) method. Since our Backbone app will be served at a different domain than our Node.js server, the browser will initiate an OPTIONS request on the client's behalf. Our server will respond with a 200 and will have an Allow header with the list of HTTP resources Backbone can use.

To start, run `nodemon server.js` to start the our server locally at `http://127.0.0.1:8080/`. Open Backbone at `client/index.html` to see it getting responses from the server.







