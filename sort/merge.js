
export default function mergeSort(arr){
    segment(arr,0,arr.length);
}

/**
 * @desc 分割数组
 * 
 * @param {Array} arr 排序数组
 * @param {Number} startIndex 开始下标
 * @param {Number} endIndex 结束下标
 * 
 */
function segment(arr,startIndex,endIndex) {
    if(endIndex- startIndex<= 1) return;
  
    const middleIndex = Math.floor((endIndex+startIndex)/2);
    
    segment(arr,startIndex,middleIndex),
        segment(arr,middleIndex,endIndex);

        // console.log(startIndex,endIndex);
    return merge(arr,startIndex,middleIndex,endIndex);

}

/**
 * @desc 合并
 * 
 * @param {Array} arr 排序数组
 * @param {Number} startIndex 开始下标 
 * @param {Number} middleIndex 分割下标
 * @param {Number} endIndex 结束下标
 */
function merge(arr,startIndex,middleIndex,endIndex){
   let s = startIndex,m = middleIndex;
   const tmpArr = [];
    while(s<middleIndex||m<endIndex){
        let tmp;
        if(s>=middleIndex){
            tmp=arr[m];
            m++
        } else if(m>=endIndex){
            tmp=arr[s];
            s++;
        }else if(arr[s]<=arr[m]){
            tmp=arr[s];
            s++;
        } else if (arr[s]>arr[m]){
            tmp=arr[m];
            m++
        }
        tmpArr.push(tmp);
    }

    for(let s = startIndex,i=0;s<endIndex;s++,i++){
        arr[s] = tmpArr[i];
    }

}