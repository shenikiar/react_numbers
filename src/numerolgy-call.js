unirest.post("https://vedicrishi-horoscope-matching-v1.p.rapidapi.com/numero_table/")
.header("X-RapidAPI-Key", "2b22665ebemshab6dacc93695a80p105860jsn850894c9cdba")
.header("Content-Type", "application/json")
.send({"day":"25","month":"12","year":"1988","hour":"2","min":"30","name":"demo","lat":"25.123","lon":"82.34","tzone":"5.5"})
.end(function (result) {
  console.log(result.status, result.headers, result.body);
});




//http request
const request = require("request");
const url = "https://jsonplaceholder.typicode.com/posts/1";
request.get(url, (error, response, body) => {
  let json = JSON.parse(body);
  console.log(body);
});


const fetch = require("node-fetch");
const url = "https://jsonplaceholder.typicode.com/posts/1";
const getData = async url => {
  try {
    const response = await fetch(url);
    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.log(error);
  }
};
getData(url);


//sending api key request
GET /something?api_key=abcdef12345

//or

GET /something HTTP/1.1
X-API-Key: abcdef12345



openapi: 3.0.0
...
# 1) Define the key name and location
components:
  securitySchemes:
    ApiKeyAuth:        # arbitrary name for the security scheme
      type: apiKey
      in: header       # can be "header", "query" or "cookie"
      name: X-API-KEY  # name of the header, query parameter or cookie
# 2) Apply the API key globally to all operations
security:
  - ApiKeyAuth: []     # use the same name as under securitySchemes
  
  

Following is the complete PDF API url -

https://pdf.astrologyapi.com/v1/basic_horoscope_pdf

Please note that all Vedic Rishi APIs use POST method for API call and so does PDF APIs.
