const express = require('express')

const WEB_SERVER = express();

WEB_SERVER.use(express.static(__dirname + "/public"));


WEB_SERVER.listen(Config.webport, () => {
ok("Web server started successfully on port " + Config.webport + ".");
});

