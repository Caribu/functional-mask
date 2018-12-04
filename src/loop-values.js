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
    if (replacement.valid(char)) return char;
    return beforeReplacement(replacement.placeholder);
  }

  if (isLooped) return '';

  return (
    beforePlaceholder(placeholderCharacter) +
    loopValues(beforeReplacement, beforePlaceholder)(
      char,
      index + 1,
      maskValues,
      replacements,
      true,
    )
  );
};

export default loopValues;
