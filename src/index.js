import create from './create';
import rawValue from './raw-value';
import selectionIndex from './selection-index';

const createMask = ({ mask, replacements }) => ({
  create: value => create({ mask, replacements, value }),
  rawValue: value => rawValue({ mask, replacements, value }),
  selectionIndex: value => selectionIndex({ mask, replacements, value }),
});

export default createMask;
