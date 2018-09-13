// Initial attempt to use the jsftp module

const jsftp = require("jsftp");
const Ftp = new jsftp({
    host: 'ftp2.census.gov'
});

console.log ("STARTING tryftp\n");  //DEBUG

Ftp.auth('anonymous', 'anonyous', (err, data) => {
    if (err) { return console.log(err); }
    console.log(data);
    console.log("\n");

    Ftp.ls("./geo/tiger/tiger2k", (err, res) => {
        if (err) { return console.log(err); }
          res.forEach(file => console.log(file.name));
          //res.forEach(file => console.log(file));
          process.exit(0);
    })
});

// ftp://ftp2.census.gov/geo/tiger/TGRGDB17/
// ftp://ftp2.census.gov/geo/tiger