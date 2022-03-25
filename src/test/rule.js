function rule(length, num, lether, direction = false) {
    for (let i = 1; i <= length; i += 1) {
        if (!direction) {
            this.gps.push(`${num}${String.fromCharCode(lether.charCodeAt() + i - 1)}`);
        }
        if (direction) {
            this.gps.push(`${num + i - 1}${lether}`);
        }
    }
}

module.exports = rule;
