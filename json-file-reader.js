/*Part 2 (CREATE MODULE functionality of new part 
is exported from part 1, move that to module, find way to read file, 
pass info, pass parse.json back to main file(forloop to access country,
typed in command line, readabout external modules 
(importing, using own) and callback functions nodejs)
1. For the purposes of this exercise, 
you must create a separate module 
for reading and parsing the JSON file, 
named "json-file-reader".
2. This module should have a function 
that takes in a filename 
and a callback function as a parameter. 
It should then read that file, then parse the JSON. 
Finally, it should call the callback function 
and pass the parsed JSON to it.
- One way to think of this module is as a 
helper that can read and parse any JSON file. 
It has nothing to do with 'countries', 
so to speak.
- Another way to think of it is as a 
small wrapper to fs.readFile, 
except that this function only works with JSON files.

- The output of the application should 
have the following format: 

Country: <country name>
Top Level Domain: <tld>*/



/*Hints:
- Use JSON.parse (https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse 
(Links to an external site)to parse JSON data from files into a JavaScript object.
- Try first completing the assignment without creating a separate module 
- Extracting the second module out is significantly more difficult.*/

function fileReader(filename, callback){ //
	var fs = require('fs');// fs module from node
    fs.readFile(filename, 'utf-8', function(err, data){ // returned value passed to 'data' parameter 
    	// readFile job is to read file, after reading will have content, content = returned value
    	if(err){

        console.log("Error");

    		throw err;
    	
    	}
    	var parseData = JSON.parse(data); //parseData = array of objects
    	callback(parseData);


    })

}
module.exports.fileReader = fileReader; //defining modules for use in countryName.js