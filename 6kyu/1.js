// Write an algorithm that will identify valid IPv4 addresses in dot-decimal format.
// IPs should be considered valid if they consist of four octets, with values between
// 0 and 255, inclusive.

function isValidIP(str) {
    return /^(25[0-5]|2[0-4][0-9]|[1][0-9][0-9]|[1-9]?[0-9])\.(25[0-5]|2[0-4][0-9]|[1][0-9][0-9]|[1-9]?[0-9])\.(25[0-5]|2[0-4][0-9]|[1][0-9][0-9]|[1-9]?[0-9])\.(25[0-5]|2[0-4][0-9]|[1][0-9][0-9]|[1-9]?[0-9])$/.test(str);
}

console.log(isValidIP('1.2.123.123'))