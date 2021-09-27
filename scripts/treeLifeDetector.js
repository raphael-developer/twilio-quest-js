const statusID = Number(process.argv[2]);

if (statusID === 0) {
    console.log("alive");
} else {
    console.log("other");
}