module.exports = function longestConsecutiveLength(array) {
function quickSort(items, left, right) {
    let index;
    if (items.length > 1) {
        index = partition(items, left, right);
        if (left < index - 1) {
            quickSort(items, left, index - 1);
        }
        if (index < right) {
            quickSort(items, index, right);
        }
    }
    return items;

}

function partition(items, i, j) {
    let pivot = items[Math.floor((i + j) / 2)];
    while (i <= j) {
        while (items[i] < pivot) {
            i++;
        }
        while (items[j] > pivot) {
            j--;
        }
        if (i <= j) {
            const temp = items[i];
            items[i] = items[j];
            items[j] = temp;
            i++;
            j--;
        }
    }
    return i;
}

let result = quickSort(array, 0, array.length - 1);
let maxLength = [];
let alone = true;
if (result[0]) {
    let length = 0;
    for (let i = 1; i < result.length; i++) {
        if (result[i - 1] === (result[i] - 1)) {
            if (alone) alone = false;
            if (!maxLength[length]) maxLength[length] = 1;
            maxLength[length]++;
        } else if (result[i - 1] === result[i]) {
        } else {
            if (!alone) {
                length++;
                alone = true;
            }
        }
    }
}
if (array.length < 2) return array.length;
return maxLength.length > 0 ? Math.max(...maxLength) : 0;
};