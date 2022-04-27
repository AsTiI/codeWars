// Write an algorithm that will identify valid IPv4 addresses in dot-decimal format.
// IPs should be considered valid if they consist of four octets, with values between
// 0 and 255, inclusive.

function isValidIP(str) {
    return str.split('.').filter(function(v){return v===Number(v).toString() && Number(v)<256}).length===4;
}

console.log(isValidIP('1.2.123.123'))