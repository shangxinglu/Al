

/**
 * 快慢指针实现
 */
export function quickSort(arr, left = 0, right) {
    right = right ?? arr.length - 1;
    if (left < right) {
        const baseIndex = partition(arr, left, right);
        quickSort(arr, left, baseIndex);
        quickSort(arr, baseIndex + 1, right);
    }
    return arr;
}

/**
 * @desc 将数组以基准值进行划分到
 * @param {Array} arr 
 * @param {Number} startIndex 开始划分下标 
 * @param {Number} endIndex 结束下标
 * 
 */
function partition(arr, startIndex, endIndex) {
    const baseIndex = startIndex,
        base = arr[baseIndex];

    startIndex++;

    let slow = startIndex;

    for (let fast = slow; fast <= endIndex; fast++) {
        let item = arr[fast];
        if (item < base) {
            exchange(arr, slow, fast);
            slow++;
        }
    }
    slow--;

    exchange(arr, baseIndex, slow)

    return slow;

}

function exchange(arr, x1, x2) {
    const tmp = arr[x1];
    arr[x1] = arr[x2];
    arr[x2] = tmp;
}


/**
 * 双端指针实现
 */
export function quickSort2(arr, left = 0, right) {
    right = right ?? arr.length - 1;
    if (left < right) {
        const baseIndex = partition2(arr, left, right);

        quickSort2(arr, left, baseIndex-1);
        quickSort2(arr, baseIndex + 1, right);
    }
    return arr;
}

/**
 * @desc 将数组以基准值进行划分到
 * @param {Array} arr 
 * @param {Number} startIndex 开始划分下标 
 * @param {Number} endIndex 结束下标
 * 
 */
function partition2(arr, startIndex, endIndex) {

    const baseIndex = startIndex,
        base = arr[baseIndex];

    let s = startIndex, e = endIndex;

    while (s < e) {
        while (s < e && arr[e] > base) {
            e--;
        }

        while (s < e && arr[s] <= base) {
            s++;
        }

        exchange(arr, s, e);
    }

    exchange(arr, s, baseIndex);

    return s;


}