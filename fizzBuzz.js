const chestCode = Number(process.argv[2]);

const divisivel = num => {
  if (num % 3 === 0 && num % 5 === 0) {
    return "JavaScript";
  } else if (num % 3 === 0) {
    return "Java";
  } else if (num % 5 === 0) {
    return "Script";
  } else {
    return "NOT divisible by 3 OR 5";
  }
};

console.log(divisivel(chestCode));
