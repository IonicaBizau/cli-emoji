"use strict";

const imageToAscii = require("image-to-ascii");

/**
 * cliEmoji
 * Big emojis in your terminal.
 *
 * @name cliEmoji
 * @function
 * @param {String} emoji The emoji name.
 * @param {Object} options The options passed to `image-to-ascii`.
 * @param {Function} cb The callback function.
 */
module.exports = function cliEmoji (emoji, options, cb) {
    if (typeof options === "function") {
        cb = options;
        options = {};
    }

    let path = `https://github.global.ssl.fastly.net/images/icons/emoji/${emoji}.png?v5`;
    return imageToAscii(path, options, cb);
};
