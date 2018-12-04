import createLoopValues from './loop-values';

const rawValue = ({ mask, replacements, value, fullArray }) => {
  //loop the values, and return nothing, to get the raw value
  let loopValues = createLoopValues(() => '', () => '', true);

  let values = value.split('');
  let maskValues = mask.split('');

  let maskValue = values.map((char, index) =>
    loopValues(char, index, maskValues, replacements),
  );

  if (fullArray) return maskValue;

  return maskValue
    .map(character => {
      return character.value;
    })
    .join('');
};

export default rawValue;
