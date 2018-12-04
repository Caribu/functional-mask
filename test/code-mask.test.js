import createMask from '../src/index';

let mask = createMask({
  mask: 'dddd-dddd',
  replacements: {
    d: {
      placeholder: ' ',
      valid: value => !isNaN(parseInt(value)),
    },
  },
});

test('makes code mask', () => {
  expect(mask.create('44445555')).toEqual('4444-5555');
});

test('renders hyphen with mask', () => {
  expect(mask.create('4')).toEqual('4   -    ');
});

test('ignores wrong characters ', () => {
  expect(mask.create('4tt')).toEqual('4   -    ');
});

test('gets raw value from masked value', () => {
  expect(mask.rawValue('4   -    ')).toEqual('4');
});

test('full raw value correctly', () => {
  expect(mask.rawValue('5555-6666')).toEqual('55556666');
});

test('raw value from masked value and trims if too long', () => {
  expect(mask.rawValue('5555-66667')).toEqual('55556666');
});

test('selectionIndex works as expected', () => {
  expect(mask.selectionIndex('4   -    ')).toEqual(1);
});

test('selectionIndex works as expected', () => {
  expect(mask.selectionIndex('123 -    ')).toEqual(3);
});

test('selectionIndex skips placeholder item', () => {
  expect(mask.selectionIndex('1234-    ')).toEqual(5);
});

test('selectionIndex skips placeholder item', () => {
  expect(mask.selectionIndex('1234-5   ')).toEqual(6);
});

test('selectionIndex handles backspace', () => {
  expect(mask.selectionIndex('1234-5  ')).toEqual(5);
});

test('selectionIndex handles backspace', () => {
  expect(mask.selectionIndex('77   -     ')).toEqual(2);
});
