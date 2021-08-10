import { randomArr,verify } from "../../../util/util.js";
import {quickSort,quickSort2} from "../../../sort/quick.js";

/* 快速排序1 */
// const arr = randomArr(21);

// quickSort(arr);

// verify(arr);

/* 快速排序2 */
const arr = randomArr(100);
// const arr =  [493, 715, 734, 51, 946, 559, 959, 489, 758, 715, 601, 351, 623, 65, 65, 251, 861, 348, 487, 49, 613];

quickSort2(arr);

verify(arr);