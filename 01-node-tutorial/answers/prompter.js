const http = require("http");
var StringDecoder = require("string_decoder").StringDecoder;

let defaultColor= "blue";

const getBody = (req, callback) => {
  const decode = new StringDecoder("utf-8");
  let body = "";

  req.on("data", function (data) {
    body += decode.write(data);
  });

  req.on("end", function () {
    body += decode.end();
    const body1 = decodeURI(body);
    const bodyArray = body1.split("&");
    const resultHash = {};

    bodyArray.forEach((part) => {
      const partArray = part.split("=");
      resultHash[partArray[0]] = partArray[1];
    });
    callback(resultHash);
  });
};

// here, you could declare one or more variables to store what comes back from the form.
let jokeHere = "<h1>Enter a joke below</h1>";
let jokeBelow= "<h2>Are you a comedian?</h2>"

// here, you can change the form below to modify the input fields and what is displayed.
// This is just ordinary html with string interpolation.
const form = () => {
  return `
  <body>
  <p>${jokeHere}</p>
  <br>
  <p>${jokeBelow}</p>
  <form method="POST">
  <input style="background-color:${defaultColor}" name="joke"> </input>
  <button type="submit">Click here to see!</button>
  </form>
  </body>
  `;
};

const server = http.createServer((req, res) => {
  console.log("req.method is ", req.method);
  console.log("req.url is ", req.url);

  if (req.method === "POST") {
    getBody(req, (body) => {
      console.log("The body of the post is ", body);
      // here, you can add your own logic
      if (body["joke"]) {
        jokeHere = `${body["joke"]}<p> You are super funny! </p>`
      } else {
        jokeHere = `No joke was entered`;
      }
      // Your code changes would end here
      res.writeHead(303, {
        Location: "/",
      });
      res.end();
    });
  } else {
    res.end(form());
  }
});

server.on("request", (req) => {  
  console.log("event received: ", req.method, req.url);  
}); 

server.listen(3000);
console.log("The server is listening on port 3000.");