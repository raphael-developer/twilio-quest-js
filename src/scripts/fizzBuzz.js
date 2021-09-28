const chestCode = Number(process.argv[2]);

const divisivel = num => {
  if (num % 5 === 0 && num % 3 === 0) {
    return "JavaScript";
  }

  if (num % 3 === 0) {
    return "Java";
  }

  if (num % 5 === 0) {
    return "Script";
  }

  return num;
};

console.log(divisivel(chestCode));
