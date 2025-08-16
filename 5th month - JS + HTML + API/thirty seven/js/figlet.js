const figlet = require("figlet");

figlet(process.argv[2], function (err, data) {
    console.log(data);
});

