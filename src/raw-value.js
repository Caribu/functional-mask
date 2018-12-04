import createLoopValues from './loop-values';

//loop the values, and return nothing, to get the raw value

let loopValues = createLoopValues(() => '', () => '');

const rawValue = ({ mask, replacements, value }) => {
  let values = value.split('');
  let maskValues = mask.split('');

  let maskValue = maskValues.map((char, index) =>
    index + 1 <= maskValues.length
      ? loopValues(values[index], index, maskValues, replacements)
      : '',
  );

  return maskValue.join('');
};

export default rawValue;
