
# `$ cli-emoji`

 [![PayPal](https://img.shields.io/badge/%24-paypal-f39c12.svg)][paypal-donations] [![AMA](https://img.shields.io/badge/ask%20me-anything-1abc9c.svg)](https://github.com/IonicaBizau/ama) [![Version](https://img.shields.io/npm/v/cli-emoji.svg)](https://www.npmjs.com/package/cli-emoji) [![Downloads](https://img.shields.io/npm/dt/cli-emoji.svg)](https://www.npmjs.com/package/cli-emoji) [![Get help on Codementor](https://cdn.codementor.io/badges/get_help_github.svg)](https://www.codementor.io/johnnyb?utm_source=github&utm_medium=button&utm_term=johnnyb&utm_campaign=github)

> Big emojis in your terminal.

## :cloud: Installation

You can install the package globally and use it as command line tool:


```sh
$ npm i -g cli-emoji
```


Then, run `cli-emoji --help` and see what the CLI tool can do.


```
$ cli-emoji --help
Usage: cli-emoji <emoji> [options]

Big emojis in your terminal.

Command arguments:
  <emoji>  The emoji name (e.g. tada).

Options:
  -v, --version  Displays version information.
  -h, --help     Displays this help.

Documentation can be found at https://github.com/IonicaBizau/cli-emoji#readme.
```

## :clipboard: Example


Here is an example how to use this package as library. To install it locally, as library, you can do that using `npm`:

```sh
$ npm i --save cli-emoji
```



```js
const cliEmoji = require("cli-emoji");

cliEmoji("tada", (err, data) => {
    console.log(err || data);
});
```

## :memo: Documentation

For full API reference, see the [DOCUMENTATION.md][docs] file.

## :yum: How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].


## :scroll: License

[MIT][license] © [Ionică Bizău][website]

[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(http%3A%2F%2Fionicabizau.net)&year=2016#license-mit
[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md