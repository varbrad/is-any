import isAny from '../src/index';

describe('src', () => {
  it('correct', () => {
    expect(isAny(1, 1, 2, 3)).toBe(true);
  });
  it('incorrect', () => {
    expect(isAny(3, 4, 5, 6, 7, 8, 1092)).toBe(false);
  });
});
