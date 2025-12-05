export const newCounterInc = function (max = 10) {
  let counter = 0;
  return function (inc = 1) {
    if (counter + inc <= max) {
      return (counter += inc);
    }

    return -1;
  };
};
