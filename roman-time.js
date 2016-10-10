'use strict';

/*
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function toRoman(x, Res) {
    if (x >= 50) {
        return toRoman (x - 50, Res + 'L');
    }
    if (x >= 40) {
        return toRoman (x - 40, Res + 'XL');
    }
    if (x >= 10) {
        return toRoman (x - 10, Res + 'X');
    }
    if (x >= 9) {
        return toRoman (x - 9, Res + 'IX');
    }
    if (x >= 5) {
        return toRoman (x - 5, Res + 'V');
    }
    if (x >= 4) {
        return toRoman (x - 4, Res + 'IV');
    }
    if (x >= 1) {
        return toRoman (x - 1, Res + 'I');
    }
    if (Res === '') {
        return "N";
    }

    return Res;
}

function correctTime(hours, minutes) {
    return (hours >= 0 && hours <= 23 && minutes >= 0 && minutes <= 59);
}

function romanTime(time) {
    var partTime = time.split (':');
    if (partTime.length === 2) {
        var hours = parseInt (partTime[0], 10);
        var minutes = parseInt (partTime[1], 10);
        if (correctTime (hours, minutes)) {
            return toRoman (hours, '') + ':' + toRoman (minutes, '');
        }
    }

    return new TypeError ("Неверное время");
}

module.exports = romanTime;
