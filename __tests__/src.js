import isOr from '../src/index';

describe('src', () => {
  it('correct', () => {
    expect(isOr(1, 1, 2, 3)).toBe(true);
  });
  it('incorrect', () => {
    expect(isOr(3, 4, 5, 6, 7, 8, 1092)).toBe(false);
  });
});
