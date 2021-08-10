
/**
 * @desc 生成指定长度的随机数数组
 * 
 * @param {Number} len 长度
 * 
 * @returns {Array}
 */
export const randomArr = len=>{
    const arr = [];
    for (let i = 0; i < len; i++) {
        const num = Math.floor(Math.random() * 1e3);
        arr.push(num);
    }

    console.log(arr);
    return arr;
    // return [716, 549, 676, 276, 230, 310, 937, 838, 676, 677, 501, 390, 689, 978, 238, 914, 331, 610, 310, 586, 744];
}

/**
 * @desc 验证数组排序
 * @param {Array} arr 验证数组
 * 
 * @returns {Boolean}
 */
export const verify= arr=>{
    let tmp = arr[0];
    for (let item of arr) {
        if (item < tmp) {
            console.error('fail');
            console.log(arr);
            return false;
        }
        tmp = item;
    }
    console.log('success');
    return true;

}