import create from './create';
import rawValue from './raw-value';

const createMask = ({ mask, replacements }) => ({
  create: value => create({ mask, replacements, value }),
  rawValue: value => rawValue({ mask, replacements, value }),
});

export default createMask;
