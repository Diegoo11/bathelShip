/* eslint-disable no-console */
function ship(length, status = 'live') {
    // eslint-disable-next-line no-undef
    damage = {};
    for (let i = 1; i <= length; i += 1) {
        this.damage[`site${i}`] = 'good';
    }
    // eslint-disable-next-line no-undef
    hit = (site) => {
        if (site > 0 && site <= length) {
            this.damage[`site${site}`] = 'bad';
        }
    };
    // eslint-disable-next-line no-undef
    isHundido = () => (Object.values(this.damage).every((site) => site === 'bad'));
    return {
        length,
        // eslint-disable-next-line no-undef
        damage,
        status,
        // eslint-disable-next-line no-undef
        hit,
        // eslint-disable-next-line no-undef
        isHundido,
    };
}

module.exports = ship;
