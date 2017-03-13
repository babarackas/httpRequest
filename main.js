var request = require('request');
var fs = require('fs');

request.get('https://sytantris.github.io/http-examples')
       .on('error', function (err) {
         throw err;
       })
       .on('response', function (response) {
         console.log("Response Status Code: ", response.statusCode);
         console.log("Response Type:", response.headers['content-type']);
         console.log("Response Message: ", response.statusMessage);
         console.log()
       })
       .pipe(fs.createWriteStream('./future.jpg'));

