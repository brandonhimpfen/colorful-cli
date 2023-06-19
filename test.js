const colorize = require('./index');

(async () => {
  console.log(await colorize('Hello, world!', { color: '#FFA500' }));
  console.log(await colorize('Hello, world!', { color: '#FF0000', fontWeight: 'bold' }));
  console.log(await colorize('Hello, world!', { color: 'green', fontWeight: 'underline' }));
  console.log(await colorize('Hello, world!', { color: '#FFCC33', fontWeight: 'dim' }));
  console.log(await colorize('Hello, world!', { color: 'blue', fontWeight: 'italic' }));
  console.log(await colorize('Hello, world!', { color: '#C2185B', fontWeight: 'strikethrough' }));
})();
