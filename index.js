const colorize = async (text, options = {}) => {
  const chalk = await import('chalk');

  let styledText = chalk.default;

  if (options.color) {
    const lowerColor = options.color.toLowerCase();

    if (lowerColor.startsWith('#')) {
      // Handle hex color values
      styledText = styledText.hex(lowerColor);
    } else if (typeof styledText[lowerColor] === 'function') {
      // Handle color names supported by chalk
      styledText = styledText[lowerColor];
    }
  }

  if (options.fontWeight && typeof styledText[options.fontWeight] === 'function') {
    // Handle font weights supported by chalk
    styledText = styledText[options.fontWeight];
  }

  return styledText(text);
};

module.exports = colorize;
