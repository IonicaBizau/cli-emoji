"use strict";

const cliEmoji = require("../lib");

cliEmoji("tada", (err, data) => {
    console.log(err || data);
});
