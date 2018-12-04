import createLoopValues from './loop-values';

//loop the values, and return the placeholder

let loopValues = createLoopValues(value => value, value => value);

const create = ({ mask, replacements, value }) => {
  let values = value.split('');
  let maskValues = mask.split('');

  let maskValue = maskValues.map((char, index) =>
    index + 1 < maskValues.length
      ? loopValues(values[index], index, maskValues, replacements)
      : '',
  );

  return maskValue.map(character => character.value).join('');
};

export default create;
