const command = process.argv[2];

const getLaserSetting = sensor => {
    if (sensor === "please") {
        return "OFF";    
    } else {
        return "ON";
    }
};

console.log("Command: " + command);
console.log(getLaserSetting(command));