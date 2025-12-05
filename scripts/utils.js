export const newCounterInc = function (max) {
  let counter = 0;
  return function (inc) {
    if (counter <= max) {
      return (counter += inc);
    } else {
      return -1;
    }
  };
};
