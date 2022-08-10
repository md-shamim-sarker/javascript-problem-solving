// Problem-1
function radianToDegree(radian) {
    if (typeof radian !== 'number') {
        return 'Please enter a valid number.';
    }
    return Number(((radian * 180) / Math.PI).toFixed(2));
}
radianToDegree(10);

// Problem-2
function isJavaScriptFile(fileName) {
    if (typeof fileName !== 'string') {
        return 'Please enter a valid string.';
    }
    return fileName.endsWith('js');
}

// Problem-3
function oilPrice(dieselAmount, patrolAmount, octanAmount) {
    if (
        typeof dieselAmount !== 'number' ||
        typeof patrolAmount !== 'number' ||
        typeof octanAmount !== 'number'
    ) {
        return 'Please enter a valid number.';
    }
    return dieselAmount * 114 + patrolAmount * 130 + octanAmount * 135;
}

// Problem-4
function publicBusFare(peopleQuantity) {
    if (typeof peopleQuantity !== 'number') {
        return 'Please enter a valid number.';
    }
    return ((peopleQuantity % 50) % 11) * 250;
}

// Problem-5
function isBestFriend(object1, object2) {
    if (typeof object1 !== 'object' || typeof object2 !== 'object') {
        return 'Please enter a valid object.';
    }
    return (
        object1.name.toLowerCase === object2.friend.toLowerCase &&
        object1.friend.toLowerCase === object2.name.toLowerCase
    );
}

// console.log(radianToDegree(10));
// console.log(isJavaScriptFile('image.jpg.js'));
// console.log(oilPrice(0, 2, 3));
console.log(publicBusFare(15));

const obj1 = { name: 'abul', friend: 'alex' };
const obj2 = { name: 'alex', friend: 'abul' };
// console.log(isBestFriend(obj1, obj2));

// let str = 'Shamim';
// console.log(str.toLowerCase());
