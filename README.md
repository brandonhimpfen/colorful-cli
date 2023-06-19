# colorful-cli

Add color, font weight, and style to your command line output.

## Installation

Use npm to install the Colorful CLI package:

```
npm install colorful-cli
```

## Usage

Import the colorize function from the colorful-cli package and use it to add color, font weight, and style to your text.

```
const colorize = require('colorful-cli');

console.log(colorize('Hello, world!', { color: '#FF0000', fontWeight: 'bold' }));
console.log(colorize('Success!', { color: 'green', fontWeight: 'underline' }));
```

The `colorize` function takes two parameters: the `text` to style and an `options` object. The `options` object supports the following properties:

* `color`: Specifies the color of the text. You can provide a hex color value (e.g., '`#FF0000`') or a color name supported by the `chalk` library.
* `fontWeight`: Sets the font weight of the text. Supported values are `'bold'`, `'dim'`, `'italic'`, `'underline'`, `'inverse'`, `'hidden'`, and `'strikethrough'`.

(Optional) Additional style options can be explored in the [chalk documentation](https://www.npmjs.com/package/chalk).