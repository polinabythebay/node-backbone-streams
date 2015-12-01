/*************************************************************
Imports
**************************************************************/
var http = require('http');
var UrlPattern = require('url-pattern');

/*************************************************************
Globals
**************************************************************/
var port = 8080;
var ip = "127.0.0.1"; //alias for localhost
//Simple route pattern matching
var pattern = new UrlPattern('/streams/:id');
//currently storing POST requests in memory
//dummy data
var bucket = {
  'results': [
      {
      "createdAt": "2015-12-01T18:53:52.413Z",
      "objectId": "F8baj0FytS",
      "opponents": {
        "__type": "Relation",
        "className": "Player"
      },
      "roomname": "lobby",
      "text": "Where is Rachel!",
      "updatedAt": "2015-12-01T18:53:52.413Z",
      "username": "SuperMan"
    },
    {
      "createdAt": "2015-12-01T18:51:09.090Z",
      "objectId": "YxFS3622N7",
      "opponents": {
        "__type": "Relation",
        "className": "Player"
      },
      "roomname": "NEWROOM",
      "text": "Batman",
      "updatedAt": "2015-12-01T18:51:09.090Z",
      "username": "fawn"
    },
    {
      "createdAt": "2015-12-01T04:02:57.076Z",
      "objectId": "3Wju8ywLZm",
      "opponents": {
        "__type": "Relation",
        "className": "Player"
      },
      "roomname": "lobby",
      "text": "akjdhfkasd",
      "updatedAt": "2015-12-01T04:02:57.076Z",
      "username": "benji"
    }
  ]
};
//allow for cross-origin resource sharing
//allows to talk to different domains, ie. Backbone's index.html
var defaultCorsHeaders = {
  "access-control-allow-origin": "*",
  "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
  "access-control-allow-headers": "content-type, accept",
  "access-control-max-age": 10 // in seconds
};
//Class:http.ServerResponse
var write = function(response, statusCode, data, headers) {
  response.writeHead(statusCode, headers);
  //can also do response.write(JSON.stringify(data));
  response.end(JSON.stringify(data));
}

/*************************************************************
Request Handler
**************************************************************/
var requestHandler = function(request, response) {
  console.log("Serving request type " + request.method + " for url " + request.url);

  var headers = defaultCorsHeaders;
  headers['Content-Type'] = "application/json";

  if (pattern.match(request.url) || request.url === '/') {

    //handle cross origin resource sharing
      if (request.method === 'OPTIONS') {
        write(response, 200, bucket, headers);
      }

      if (request.method === 'POST') {
        var body = '';

        request.on("data", function(data) {
          body = JSON.parse(data);
        });

        request.on("end", function() {
          bucket.results.push(body);
          write(response, 201, bucket, headers);
          console.log("Response", 201);
        });
      }

      if (request.method === 'GET') {
        write(response, 200, bucket, headers);
        console.log("Response", 200);
      }
  }
  else {
    write(response, 404, '', headers);
    console.log("Response", 404);
  }
};

/*************************************************************
Server
**************************************************************/
var server = http.createServer(requestHandler);
console.log("Listening on http://" + ip + ":" + port);
server.listen(port, ip);


