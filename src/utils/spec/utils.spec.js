import { capitaliseString, formatDate } from '../utils';

describe('capitaliseString()', () => {
  it('does not mutate passed in string', () => {
    const input = 'cooking';
    capitaliseString(input);
    expect(input).toEqual('cooking');
  });
  it('returns a capitalised string', () => {
    expect(capitaliseString('cooking')).toEqual('Cooking');
  });
});

describe('formatDate()', () => {
  it('does not mutate the passed in date', () => {
    const input = '2018-05-27T03:32:28.514Z';
    formatDate(input);
    expect(input).toEqual('2018-05-27T03:32:28.514Z');
  });
  it('returns a formatted date', () => {
    expect(formatDate('2018-05-27T03:32:28.514Z')).toEqual(
      'Sun, May 27, 2018, 4:32 AM GMT+1'
    );
  });
});
