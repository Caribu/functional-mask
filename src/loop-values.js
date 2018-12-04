const loopValues = (beforeReplacement, beforePlaceholder) => (
  char,
  index,
  maskValues,
  replacements,
  isLooped,
) => {
  //maskValues = ['d','d','-'] array of the mask chars
  let placeholderCharacter = maskValues[index];
  //grab the replacement key where it matched the maskValue
  let replacement = replacements[placeholderCharacter];

  //if it exists, check if valid, otherwise return the masked character
  if (replacement) {
    if (replacement.valid(char)) return { value: char, type: 'input' };
    return { value: beforeReplacement(replacement.placeholder), type: 'mask' };
  }

  if (isLooped) return '';

  let afterPlaceholder =
    loopValues(beforeReplacement, beforePlaceholder)(
      char,
      index + 1,
      maskValues,
      replacements,
      true,
    ).value || '';

  let beforePlaceholderValue = beforePlaceholder(placeholderCharacter);

  return {
    value: beforePlaceholderValue + afterPlaceholder,
    type: 'placeholder',
  };
};

export default loopValues;
