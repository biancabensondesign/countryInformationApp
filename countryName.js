/*Part 1 (INPUT AND OUTPUT PART, readFile/writeFile)
Create a Node.js application that does the following:
1. Takes in one parameter from the command line, 
the name of a country (INPUT)
Note: command line arguments can be read from 
the global array `process.argv` 
console.log(process.argv[0])
2. Reads and parses the `countries.json` file. 
Note: you must use readFile and not readFileSync. 
(Get it here: countries.jsonPreview)
readFile (fs) 
make use of the fs module, in code require, after require it,
you need to apply readFile function.
Parsing - need to dwnld countries.json file
- need to find method that will parse the json file,
make it readable for javascript
https://www.w3schools.com/js/js_json_parse.asp
3. OUTPUTS information about that specific country. 
Must be in the following format:
Country: <country name>
Top Level Domain: <tld>
console.log what data looks like that is parsed
how to access information about the specific country that you input
*/


var file_reader = require("./json-file-reader"); //require "json-file-reader" module we've created 
file_reader.fileReader('./countries.json',  function(parseData){ // fileReader content passed onto (parseData) parameter
// In Node when calling function to perform task, the returned value will get passed on
// to one of the parameters in the callback function	
// .notation to utilist functions that comes with module	

 	for (var i = 0; i < parseData.length; i++) { // for loop for accessing data in parsed file
 	    if(parseData[i].name === process.argv[2]){ //if a name from parseData is entered into the command line
    	//(parseData[i]) = reading elements in array
	    	console.log(parseData[i].name);
	    	console.log(parseData[i].topLevelDomain);



	    	
	    }
	   
  
	}


});