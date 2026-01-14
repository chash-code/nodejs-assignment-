// Import the boxen module
const boxen = require('boxen');

// Define the message
const message = "I am using my first external module!!";

// Define the title
const title = "Hurray!!!";

// Print in Classic style (default)
console.log(boxen(message, { 
    title: title,
    padding: 1
}));

// Print in SingleDouble style (mixed single and double borders)
console.log(boxen(message, { 
    title: title,
    padding: 1,
    borderStyle: 'singleDouble'
}));

// Print in Round style (rounded corners)
console.log(boxen(message, { 
    title: title,
    padding: 1,
    borderStyle: 'round'
}));

// BONUS: Add background color
console.log(boxen(message, { 
    title: title,
    padding: 1,
    borderStyle: 'round',
    backgroundColor: '#555555'
}));
