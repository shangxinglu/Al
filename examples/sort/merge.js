
import { randomArr,verify } from "../../util/util.js";
import mergeSort from "../../sort/merge.js";


const arr = randomArr(100);

console.log(arr);

mergeSort(arr);

verify(arr);
