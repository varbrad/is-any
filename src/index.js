export default (a, ...bs) => {
  for (let i = 0; i < bs.length; ++i) {
    if (a === bs[i]) return true;
  }
  return false;
};
