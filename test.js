const myStrings = require('./htmlscore');
console.log(myStrings.scoreHTML(`<!DOCTYPE html>
<html>

<head>
    <title>All about chickens</title>
</head>

<body>
    <h1>Something about chickens</h1>
    <p>This is a story about a specific chicken named Ralph.</p>
    <h3>Ralph the chicken</h3>
    <p>yada, yada, yada</p>
</body>

</html>`, "chicken") )

console.log(myStrings.scoreRemote('https://en.wikipedia.org/wiki/Fast_food', "chicken") )