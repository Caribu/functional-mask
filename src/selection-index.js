import rawValue from './raw-value';

const selectionIndex = ({ mask, replacements, value }) => {
  let raw = rawValue({ mask, replacements, value, fullArray: true });

  let backspaces = mask.length > raw.length ? mask.length - raw.length : 0;
  //keep the user input and placeholder (aka items that will always show in the mask)
  return (
    raw.filter((item, index) => {
      if (item.type === 'input') return true;
      //count the placeholder as an index if the previous item was user input
      if (
        item.type === 'placeholder' &&
        raw[index - 1] &&
        raw[index - 1].type === 'input'
      )
        return true;
    }).length - backspaces
  );
};

export default selectionIndex;
