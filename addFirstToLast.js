const addFirstToLast = (arr) => {
  let firstAndLast = "";

  if (arr.length > 0) {
    firstAndLast = arr[0] + arr[arr.length - 1];
  }

  return firstAndLast;
};

console.log(addFirstToLast(["first", "second", "third"]));
