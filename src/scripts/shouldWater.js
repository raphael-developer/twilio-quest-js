const statusID = Number(process.argv[2]);
const drynessLevel = Number(process.argv[3]);

if (statusID === 0 && drynessLevel > 10) {
  console.log("WATER");
}
