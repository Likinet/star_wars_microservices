const server = require("./src/server");

// const { Character, Film , Planet}= require("./src/database");

// Character.delete(200).then((res) => console.log(res));
// Planet.delete(222).then((res) => console.log(res));

server.listen(8004, () => {
    console.log("Database service listening on PORT 8004");
});